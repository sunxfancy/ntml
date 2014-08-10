/* 
* @Author: sxf
* @Date:   2014-08-10 11:55:38
* @Last Modified by:   sxf
* @Last Modified time: 2014-08-10 22:32:53
*/



var html_tag_collection = ['a','abbr','acronym','address','applet','area','b','base','basefont','bdo','big','blockquote','body','br','button','caption','center','cite','code','col','colgroup','dd','del','dfn','dir','div','dl','dt','em','fieldset','font','form','frame','frameset','h1','h2','h3','h4','h5','h6','head','hr','html','i','iframe','img','input','ins','kbd','label','legend','li','link','map','menu','meta','noframes','noscript','object','ol','optgroup','option','p','param','pre','q','s','samp','script','select','small','span','strike','strong','style','sub','sup','table','tbody','td','textarea','tfoot','th','thead','title','tr','tt','u','ul','var'];

function is_html_tag (tag) {
	return contain_html(tag,0,html_tag_collection.length);
}

function contain_html (item,a,b) {
	if (a >= b) return false;
	var mid = parseInt((a + b) /2);
	if (html_tag_collection[mid]==item)
	{
		return true;
	} else {
		if (html_tag_collection[mid]<item) {
			return contain_html(item,mid+1,b);
		} else {
			return contain_html(item,a,mid);
		}
	}
}

var NTML = function () {
	// alert(is_html_tag('h1'));
};

NTML.prototype = {
	data : null,
	html : '',

	parse : function(ntml_text) {
	    this.data = ntml_text;

	    ///解析xml文件
	    var xmldoc = $.parseXML( this.data );
		$xml = $( xmldoc );
		var child = $xml.contents()[0];
		// console.log($(child));

		this.html = this.parse_node_children($(child));

	    return this.html;
	},

	parse_nt : function (node) {
		// console.log("parse_nt");
		// console.log(node);
	
		var tag = node.prop("tagName");
		var attr = node.prop("attributes");

		var data = {};
		var childList = node.contents();
		for (var i = 0; i < childList.length; i++) {
			var child = childList[i];
			$child = $( child );
			// console.log($child);
			var childTag = $child.prop("tagName");
			if (childTag === undefined || childTag == null) 
			{
				data['content'] += $child.text();	
			} else {
				// console.log(childTag);
				if (childTag.toLowerCase() == 'params')
				{
					var childAttr = $child.prop("attributes");
					data.push(childAttr);

				} else {
					// console.log(childTag);
					// console.log(childTag.substring(0,2) == 'a-');
					if (childTag.substring(0,2) == 'a-')
					{
						// console.log(childTag);
						data[childTag.substring(2)] = this.parse_node_children($child);
					}
					else
						data['content'] += this.parse_node($child);
				}
			}
		}
		// console.log(data);

		var html =  '<?xml version="1.0" encoding="utf-8" ?>\n';
		html += '<ntml>\n';
		html += this.make_html_header('div',attr);
		html += template(tag, data);
		html += this.make_html_footer('div');
		html += '</ntml>\n';
		/// 如果是nt节点的话，要将模板渲染出的html代码，二次作为文本进行解析
		// console.log(html);

		return this.parse(html);
	},


	//提供跳过自己不进行解释，直接解释自己孩子的方法。
	parse_node_children : function (node) {
		// console.log('children');
		var childList = node.contents();
		var ans = '';
		for (var i = 0; i < childList.length; i++) {
			var child = childList[i];
			// console.log(' children'+i);
			ans += this.parse_node($(child));
		}
		return ans;
	},

	///对一个节点进行解析
	parse_node : function (node) {
		// console.log("parse_node");
		// console.log(node);

		// console.log(node.val());

		var tag = node.prop("tagName");
		if (tag=== undefined ||tag == null ) 
		{
			// console.log(node.text());
			return node.text();
		}
		if (((tag.length>3) && (tag.substring(0,3)=='nt-'))
			||(!is_html_tag(tag))) 
			return this.parse_nt(node);
		var attr = node.prop("attributes");

		var ans = '';
		ans += this.make_html_header(tag,attr);

		var childList = node.contents();
		for (var i = 0; i < childList.length; i++) {
			var child = childList[i];
			ans += this.parse_node($(child));
		};

		ans += this.make_html_footer(tag);

		return ans;
	},

	make_html_header : function (tag, attr) {
		var text = '<';
		text += tag; 
		for(var i=0; i<attr.length; i++)
		{
			text += (' '+ attr[i].nodeName + '=\"' + attr[i].nodeValue +'\"'); 
		}
		text += '>\n';
		return text;
	},

	make_html_footer : function (tag) {
		return '</' + tag + '>\n';
	},


	load : function (url) {
		$.get(url, function(ntml){
		});
	}
};

	// child.each(function (i,ele) {
	// 	$('#show').append($(ele).prop("tagName"));
	// 	$('#show').append($(ele).text());

	// });


function GetXmlComplete(xml) {
	var nt = new NTML();
	$('#show').html(nt.parse(xml));
}


$(document).ready(function(){  
	// $.get('test.xml',function(xml) {
	// 	// alert(xml);
	// });
    $.ajax({
        url: 'test.xml',
        type: 'GET',
        dataType: 'text',
        timeout: 1000,  //设定超时
        cache: true,   //缓存
        error: function(xml) {
            alert("加载XML文档出错!");
        },
        success: GetXmlComplete   //设置成功后回调函数
    });
});


