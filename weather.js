//获取天气
function getWeather() {
	$.ajax({
		//免费的天气 接口
		url: "https://wthrcdn.etouch.cn/WeatherApi?city=成都",
		type: "get",
		success: function(res) {
			//初始化 x2js对象
			var x2js = new X2JS();
			//xml转成json对象
			var jsonObj = x2js.xml_str2json(res);
			//天气的类型
			var type = jsonObj.resp.forecast.weather[0].day.type;
			//风向
			var fengxiang = jsonObj.resp.fengxiang;
			var wendu = jsonObj.resp.forecast.weather[0].low.substr(3) + "~" + jsonObj.resp.forecast.weather[0].high.substr(3);
			
			
		}
	});
}