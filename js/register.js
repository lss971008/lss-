window.onload=function(){
    var oLogin=document.getElementById('s_login');
    var oPassword=document.getElementById('s_password');
    var oXm=document.getElementById('xm');
    var oTel=document.getElementById('tel');
    var oGh=document.getElementById('gh');
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
    //姓名
    oXm.onblur=function(){
        var reg= /^[\u4E00-\u9FA5A-Za-z]+$/;
        var str=oXm.value;
        var bool=reg.test(str);
        if(!bool){
            this.placeholder='只能输入中文和英文';
        }
    }
    oXm.onfocus=function(){
        this.value='';
    }
    //电话
    oTel.onblur=function(){
        var reg=/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$/;
        var str=oTel.value;
        var bool=reg.test(str);
        if(!bool){
            this.placeholder='请输入正确手机号码';
        }
        alert(reg.test(str))
    }
    //工号
    oGh.onblur=function(){
        var reg=/^[0-9]{5}$/ ;
        var str=oGh.value;
        var bool=reg.test(str);
        if(!bool){
            this.placeholder='请五位数字';
        }
        alert(reg.test(str))
    }
}