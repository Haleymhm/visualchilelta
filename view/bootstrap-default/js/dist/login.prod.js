"use strict";function goLogin(){var e,t="user="+__("correo").value+"&pass="+__("password").value+"&sesion="+!!__("sesion").checked,o=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");o.onreadystatechange=function(){4==o.readyState&&200==o.status?1==o.responseText?(e='<div class="alert alert-form alert-success text-xs-center">',e+="<span>Conectado..!",e+="<strong> Estamos redireccionando...</strong></span>",e+="</div>",__("_AJAX_LOGIN_").innerHTML=e,location.reload()):__("_AJAX_LOGIN_").innerHTML=o.responseText:4!=o.readyState&&(e='<div class="alert alert-form alert-warning text-xs-center">',e+="<span>Procesando...",e+='<strong> espere porfavor....   </strong> <img src="http://localhost/prueba/login-mvc/view/bootstrap-default/img/ajax-loader.gif"> </span>',e+="</div>",__("_AJAX_LOGIN_").innerHTML=e)},o.open("POST","http://localhost/prueba/login-mvc/ajax.php?mode=login",!0),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.send(t)}function runScriptLogin(e){13==e.keyCode&&goLogin()}