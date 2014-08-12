/*TMODJS:{"version":2,"md5":"50132990c16163bb4761fbf03998b4ed"}*/
template('nt-layout-4-4-4',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,left=$data.left,middle=$data.middle,right=$data.right,$out='';$out+='<div class=\'row clearfix\'> <div class=\'col-xs-12 col-sm-4\'> ';
$out+=$string( left);
$out+=' </div> <div class=\'col-xs-12 col-sm-4\'> ';
$out+=$string( middle);
$out+=' </div> <div class="col-xs-12 col-sm-4"> ';
$out+=$string( right);
$out+=' </div> </div>';
return new String($out);
});