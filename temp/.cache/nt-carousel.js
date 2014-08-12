/*TMODJS:{"version":2,"md5":"143df909b7a62477f60600c47265c013"}*/
template('nt-carousel',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,image=$data.image,$out='';$out+='<div class="carousel slide" id="main-carousel" data-ride="carousel"> <ol class="carousel-indicators"> <li data-slide-to="0" data-target="#main-carousel" class="active"> </li> <li data-slide-to="1" data-target="#main-carousel" > </li> <li data-slide-to="2" data-target="#main-carousel" > </li> <li data-slide-to="3" data-target="#main-carousel" > </li> </ol> <div class="carousel-inner" role="listbox"> <div class="item active"> ';
$out+=$escape(image('image/lp.jpg'));
$out+=' <div class="carousel-caption"> <h4> First Thumbnail label </h4> <p> Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. </p> </div> </div> <div class="item"> ';
$out+=$escape(image('image/lp.jpg'));
$out+=' <div class="carousel-caption"> <h4> Second Thumbnail label </h4> <p> Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. </p> </div> </div> <div class="item"> ';
$out+=$escape(image('image/lp.jpg'));
$out+=' <div class="carousel-caption"> <h4> Third Thumbnail label </h4> <p> Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. </p> </div> </div> <div class="item"> ';
$out+=$escape(image('image/lp.jpg'));
$out+=' <div class="carousel-caption"> <h4> Third Thumbnail label </h4> <p> Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. </p> </div> </div> </div> <a class="left carousel-control" href="#main-carousel" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span><span class="sr-only">Previous</span></a> <a class="right carousel-control" href="#main-carousel" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span><span class="sr-only">Next</span></a> </div>';
return new String($out);
});