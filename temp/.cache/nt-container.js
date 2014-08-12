/*TMODJS:{"version":3,"md5":"5d122e2ff375900129dbb0c2471cb8c7"}*/
template('nt-container',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,content=$data.content,$out='';$out+='<div class="container"> ';
$out+=$string( content);
$out+=' </div>';
return new String($out);
});