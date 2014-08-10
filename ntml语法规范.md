ntml语法规范

所有需要被ntml解析的标签前，可以加上'nt-'，用来被解释器识别。'nt-'是标准ntml组件库的前缀，你也可以自己规定名称前缀。
eg.
	<nt-login_form class='col-xs-12 col-xs-4'>
	</nt-login_form>


nt对象下面的子对象，所有加'nta-'前缀的，认为是nt语法中的属性
eg.
	<nt-article class='col-xs-12 col-xs-8'>
		<a-title>关于nt语法的一些介绍</a-title>
		<a-date>2014-8-10</a-date>
		<a-content>
			下面我们来简要介绍一下ntml这种标记式语言。
			<nt-ad class='col-xs-12 col-xs-8'>
				
			</nt-ad>
		</a-content>
	</nt-article>

nt对象中的params标签下的属性会被解释为声明，内容会被解释为content
eg.
	<nt-article class='col-xs-12 col-xs-8'>
		<a-params title='关于nt语法的一些介绍'
			date='2014-8-10' >
			下面我们来简要介绍一下ntml这种标记式语言。
			<nt-ad class='col-xs-12 col-xs-8'>
				
			</nt-ad>
		</a-params>
	</nt-article>

nt对象中非nta前缀的标签也会被解释为content
eg.
	<nt-article class='col-xs-12 col-xs-8'>
		<a-params title='关于nt语法的一些介绍'
			date='2014-8-10' />
		下面我们来简要介绍一下ntml这种标记式语言。
		<nt-ad class='col-xs-12 col-xs-8'>
			
		</nt-ad>
	</nt-article>

如果同时存在多个content位置的内容的话，会被从上到下依次添加

nt组件模板的开发
nt解析器会将最外层的标签解释为div，所以不必再增加嵌套div。
eg.
	<? xml version="1.0" encoding="utf-8" ?> 
	<div style='align-center;'>
		<h1>{{#title}}</h1>
		<h5>{{#date}}</h5>
	</div>
	<p>
		{{#content}}  
	</p>

我们使用artTemplate模板引擎，建议将模板编译成js代码，使用TmodJS工具。
