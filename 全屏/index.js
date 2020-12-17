//全屏
function doFullScreen() {
	var docElm = document.documentElement;
	//Chrome等
	if (docElm.webkitRequestFullScreen) {
		docElm.webkitRequestFullScreen();
	}
	//FireFox   
	else if (docElm.mozRequestFullScreen) {
		docElm.mozRequestFullScreen();
	}
	//W3C 
	else if (docElm.requestFullscreen) {
		docElm.requestFullscreen();
	}
	//IE11   
	else if (elem.msRequestFullscreen) {
		elem.msRequestFullscreen();
	}
}



//退出全屏
function exitFullScreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if (document.webkitCancelFullScreen) {
		document.webkitCancelFullScreen();
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	}
}