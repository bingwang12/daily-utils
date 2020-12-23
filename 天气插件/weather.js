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

//获取天气的图标
function getWeatherPic(type) {
	switch (type) {
		case "暴雨":
			return "&#xe66a;";
		case "大暴雨":
			return "&#xe66b;";
		case "大雨":
			return "&#xe66c;";
		case "大雪":
			return "&#xe66d;";
		case "暴雪":
			return "&#xe66e;";
		case "雷阵雨":
			return "&#xe670;";
		case "雷阵雨伴冰雹":
			return "&#xe671;";
		case "浮尘":
			return "&#xe672;";
		case "强沙尘暴":
			return "&#xe673;";
		case "多云":
			return "&#xe674;";
		case "晴":
			return "&#xe675;";
		case "雾":
			return "&#xe676;";
		case "特大暴雨":
			return "&#xe677;";
		case "小雪":
			return "&#xe678;";
		case "扬沙":
			return "&#xe679;";
		case "沙尘暴":
			return "&#xe67a;";
		case "小雨":
			return "&#xe67b;";
		case "阴":
			return "&#xe67c;";
		case "雨夹雪":
			return "&#xe67d;";
		case "中雨":
			return "&#xe67e;"
		case "阵雪":
			return "&#xe67f;";
		case "阵雨":
			return "&#xe680;";
		case "中雪":
			return "&#xe681;";
		case "冻雨":
			return "&#xe682;";
		case "小雨":
			return "&#xe67b;";
		case "大暴雨":
			return "&#xe683;";
		case "大雨":
			return "&#xe684;";
		case "暴雪":
			return "&#xe685;"
		case "暴雨":
			return "&#xe686;";
		case "大雪":
			return "&#xe687;"
		case "雷阵雨":
			return "&#xe688;";
		case "多云":
			return "&#xe689;";
		case "雷阵雨伴冰雹":
			return "&#xe68a;";
		case "特大暴雨":
			return "&#xe68b;";
		case "阴":
			return "&#xe68c;";
		case "小雨":
			return "&#xe68d;";
		case "雨夹雪":
			return "&#xe68e;";
		case "小雪":
			return "&#xe68f;"
		case "晴":
			return "&#xe690;";
		case "阵雪":
			return "&#xe691;";
		case "阵雨":
			return "&#xe692;";
		case "中雨":
			return "&#xe693;";
		case "中雪":
			return "&#xe694;"
	}

}
