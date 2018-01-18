window.onload=function(){
    var oLogin=document.getElementById('s_login');
    var oPassword=document.getElementById('s_password');
    //用户名
    oLogin.onblur=function(){
        var reg= /^[\u4e00-\u9fa5]{2,}$/;
        var str=oLogin.value;
        var bool=reg.test(str);
        if(!bool){
            this.placeholder='请输入汉字';
        }
    }
    oLogin.onfocus=function(){
        this.value='';
    }
    //密码
    oPassword.onblur=function(){
        var reg= /^[a-zA-Z0-9_-]{4,16}$/;
        var str=oPassword.value;
        var bool=reg.test(str);
        if(!bool){
            this.placeholder='4到16位（字母，数字，下划线，减号）';
        }
        alert(reg.test(str))
    }
}