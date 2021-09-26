function leo(data) { //回调函数
    var oUl = document.getElementById('xlk');
    var html = '';
    if (data.s.length) { //判断是否有数据
        $('#xlk').css('height','340px'); //有数据让下拉菜单显示出来
        for (var i = 0; i < data.s.length; i++) {
            html += '<li><a target="_blank" href="' + ss + data.s[i] + '">' + data.s[i] + '</a></li>';
        }
        oUl.getElementsByTagName('div')[0].innerHTML = html;
        $('#xlk').show();
    } else {
        $('#xlk').css('height','0'); //没有则不显示
    }
}

var ss, li = ["https://www.baidu.com/s?wd=", "https://cn.bing.com/search?q=", "https://www.google.com/search?q="],
    cf = document.getElementsByClassName('but')
Array.from(cf).forEach(function (value, index, array) {
    value.onclick = function () {
        ss = li[index]
        Array.from(cf).forEach(function (val, ind, array) {
            css(val, {
                "background-color": "var(--background-color-3)"
            })
        })
        css(value, {
            "background-color": "var(--background-color-8)"
        })
    }
})
$('#input').bind('keydown', function (event) {
    if (event.keyCode == "13") {
        var input = id("input").value
        window.open(ss + encodeURIComponent(input) + "&ie=utf-8&tn=ace")
    }
});