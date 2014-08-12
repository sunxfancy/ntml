/*TMODJS:{"version":8,"md5":"c8afb6d867196ba8bd189b623dab9579"}*/
template('nt-article',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,title=$data.title,$string=$utils.$string,date=$data.date,content=$data.content,$out='';$out+='<div style=\'text-align:center;\'> <h1>';
$out+=$escape(title);
$out+='</h1> <h5>';
$out+=$string($helpers. setDefault($escape(date ), 'hello'));
$out+='</h5> </div> <p> ';
$out+=$string( content);
$out+=' </p>';
return new String($out);
});