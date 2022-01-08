$().ready(function(){
	if (navigator.userAgent.indexOf("Chrome") < 0) {
		if(window.confirm("推荐使用Chrome浏览器访问该页面，是否跳转到相应页面下载安装浏览器？")){
			window.location.href = "http://www.baidu.com/s?wd=%E8%B0%B7%E6%AD%8C%E6%B5%8F%E8%A7%88%E5%99%A8";
		};
	};
});