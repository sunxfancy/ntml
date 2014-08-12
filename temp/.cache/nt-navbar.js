/*TMODJS:{"version":2,"md5":"b7bd3c13750decda2f46992c01c3e718"}*/
template('nt-navbar',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,brand=$data.brand,$each=$utils.$each,left=$data.left,$value=$data.$value,$index=$data.$index,right=$data.right,$out='';$out+='<div class="navbar navbar-fixed-top navbar-inverse" role="navigation"> <div class="navbar-header"> <div class="container"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#">';
$out+=$escape(brand);
$out+='</a> <div class="collapse navbar-collapse"> <ul class="nav navbar-nav pull-left"> ';
$each(left,function($value,$index){
$out+=' <li> <a href="javascript:void(0);" onclick="test(); return false;"> ';
$out+=$escape($value);
$out+='</a> </li> ';
});
$out+=' </ul> <ul class="nav navbar-nav pull-right"> ';
$each(right,function($value,$index){
$out+=' <li> <a href="javascript:void(0);" onclick="test(); return false;"> ';
$out+=$escape($value);
$out+='</a> </li> ';
});
$out+=' </ul> </div> </div> </div> </div>';
return new String($out);
});