function $(arg) {
	var rate = 1149;
	if (arg == undefined) {
		document.write("현재 환율은 " + rate + "원입니다.<br />");
	} else {
		document.write(arg + "달러는 " + (arg * rate) + "원입니다.<br />");
	}
}
