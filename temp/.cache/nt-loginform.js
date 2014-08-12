/*TMODJS:{"version":8,"md5":"66bf4b4a26bc18cf8d8132e966189d79"}*/
template('nt-loginform',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,action=$data.action,method=$data.method,$out='';$out+='<form action="';
$out+=$escape(action);
$out+='" method="';
$out+=$escape(method);
$out+='"> <h2>欢迎登陆</h2> <div class="form-group"> <div class="input-group"> <span class="input-group-addon"> <i class="glyphicon glyphicon-user"></i> </span> <input type="text" id="username" name="username" class="form-control input-lg" size="32" placeholder="用户名/邮箱/手机" /> </div> </div> <div class="form-group"> <div class="input-group"> <span class="input-group-addon"> <i class="glyphicon glyphicon-lock"></i> </span> <input type="password" id="password" name="password" class="form-control input-lg" size="32" placeholder="密码" /> </div> </div> <div class="checkbox form-group"> <label><input type="checkbox" id="isAutoLogin" name="isAutoLogin" /> 下次自动登陆</label> </div> <div class=\'form-group\'> <input type="submit" value="登陆" class="btn btn-lg btn-primary" /> <button class="btn btn-default btn-lg" >注册</button> <a href="/HHA-Web/#">忘记密码</a> </div> <div class="form-group"> <label class="text-danger"></label> </div> </form> ';
return new String($out);
});