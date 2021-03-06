/**
 * Created by wangqian on 2019/1/31.
 */
var util = {
	//获取服务器的地址
    getServerUrl : function(path){
        return conf.serverHost + path;
    },
    getUrlParam : function(name){
        // baidu.com/product/list?keyword=1&page=2(获取1)
        var reg     = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var result 	= window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    },
    //成功提示
    successTips : function(msg){
        alert( msg || '操作成功！');
    },
    //错误提示
    errorTips : function(msg){
        alert( msg || '出现错误');
    },
    //表单验证，支持非空，手机，邮箱
    validate  : function(value, type){
        var value = $.trim(value);
        // 非空验证
        if('require' === type){
            return !!value;//确保返回的是布尔值
        }
        // 手机号验证
        if('phone' === type){
            return /^1\d{10}$/.test(value);
        }
        // 邮箱格式验证
        if('email' === type){
            return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
        }
    },
    //统一 登陆处理
    doLogin 	: function(){
        window.location.href = './user-login.html?redirect =' + encodeURIComponent(window.location.href);
    },
    goHome		: function() {
        window.location.href = './index.html';
    },
    pageSize: function () {
        return 6;
    }
}
export default util;