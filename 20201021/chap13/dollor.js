function $(arg) {
    let rate = 1149;
    if (arg == undefined) {//값이 없는 경우 대비하긴
        document.write("현재 환율은" + rate + "원입니다.<br>");
    } else {
        document.write(arg + "달러는 " + (arg * rate) + "원입니다.<br>");
    }
}