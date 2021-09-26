window.onload = function () {
    setTimeout(function () {
        $("#tp").css("opacity", '1')
        $("#time-zong").css("opacity", '1')
        $("#yy").css("opacity", '1')
        $("#qh").css("opacity", '1')
    }, 500)
    var oQ = document.getElementById('input');
    oQ.onkeyup = function () {
        if (encodeURIComponent(this.value) != '') {
            var oScript = document.createElement('script');
            oScript.src = 'https://suggestion.baidu.com/su?wd=' + encodeURIComponent(this.value) + '&cb=leo'; //this.value是我们在输入框中输入的内容。leo是我们定义的回调函数的名称
            document.body.appendChild(oScript);
        } else {
            $("#xlk>div").find("li").remove();
            $("#xlk").css('height', '0')
        }
    };
    resize();
    window.onresize = function () {
        resize();
    }
    backdrop();
}