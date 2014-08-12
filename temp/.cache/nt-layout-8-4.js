/*TMODJS:{"version":2,"md5":"5c3f8536a56c3c965aa34f7e46973fe0"}*/
template('nt-layout-8-4',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,left=$data.left,right=$data.right,$out='';$out+='<div class=\'row clearfix\'> <div class=\'col-xs-12 col-sm-8\'> ';
$out+=$string( left);
$out+=' </div> <div class="col-xs-12 col-sm-4"> ';
$out+=$string( right);
$out+=' </div> </div>';
return new String($out);
});