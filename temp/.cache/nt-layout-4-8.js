/*TMODJS:{"version":2,"md5":"d4d34d9a22378012e44afc635a39f2e6"}*/
template('nt-layout-4-8',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,left=$data.left,right=$data.right,$out='';$out+='<div class=\'row clearfix\'> <div class=\'col-xs-12 col-sm-4\'> ';
$out+=$string( left);
$out+=' </div> <div class="col-xs-12 col-sm-8"> ';
$out+=$string( right);
$out+=' </div> </div>';
return new String($out);
});