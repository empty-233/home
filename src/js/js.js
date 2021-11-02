//建站时间
var urodz = new Date("11/18/2020");
var s = "本网站自2020年11月18日起已建站运行 ";
var now = new Date();
var ile = now.getTime() - urodz.getTime();
var dni = Math.floor(ile / (1000 * 60 * 60 * 24));
console.log(s + dni + "天");

setInterval(function () {
  myTimer();
}, 500);

function myTimer() {
  var H = new Date().getHours();
  var i = new Date().getMinutes();
  var timeM = new Date().getSeconds();
  var time0 = 0;
  var time1 = 0;
  var time2 = 0;
  if (i < 10) {
    time0 = "0";
  } else {
    time0 = "";
  }
  if (timeM < 10) {
    time1 = "0";
  } else {
    time1 = "";
  }
  if (H < 10) {
    time2 = "0";
  } else {
    time2 = "";
  }
  var time = time2 + H + ":" + time0 + i;
  $("#time").html(time);
  $("#time-xq").html("星期" + "日一二三四五六".charAt(new Date().getDay()));
  $("#time-m").html(time1 + timeM);
}

function id(name) {
  return document.getElementById(name);
}
$(document).ready(function () {
  yySx();
  var timeout = null,
    timeout1 = null;

  function tp_true() {
    $("#qh").css("display", "none");
    $("#yy").css("display", "none");
  }

  function animation() {
    $("#qh").css("opacity", "1").css("transform", "translateY(0)")
    $("#yy").css("opacity", "1").css("transform", "translateY(0)")
  }
  id("ss").onclick = function () {
    clearTimeout(timeout);
    $("#qh").css("display", "inline-block");
    $("#yy").css("display", "");
    $("#tp")
      .css("filter", "blur(5px) brightness(var(--brightness))")
      .css("transform", "scale(1.1, 1.1)");
    id("input").classList.add("open");
    $(".dialog").css("display", "none");
    if ($("#xlk>div>li").length != 0) {
      // $('#xlk').show(500);
      $("#xlk").css("height", "340px");
    }
    timeout1 = setTimeout(animation, 100)
  };
  id("tp").onclick = function () {
    clearTimeout(timeout1)
    $("#qh").css("opacity", "0").css("transform", "translateY(-150%)");
    $("#yy").css("opacity", "0").css("transform", "translateY(-100%)");
    $("#tp")
      .css("filter", "blur(0px) brightness(var(--brightness))")
      .css("transform", "scale(1, 1)");
    timeout = setTimeout(tp_true, 500);
    id("input").classList.remove("open");
    $(".dialog").css("display", "none");
    $("#xlk").css("height", "0");
  };
});

function show() {
  fetch("https://v1.hitokoto.cn/?c=a")
    .then((response) => response.json())
    .then((data) => {
      const hitokoto = id("hitokoto_text");
      hitokoto.href = "https://hitokoto.cn/?uuid=" + data.uuid;
      hitokoto.innerText = data.hitokoto;

      const from = id("hitokoto_cc");
      from.href = "https://hitokoto.cn/?uuid=" + data.uuid;
      from.innerText = data.from;

      const from_who = id("hitokoto_zz");
      from_who.href = "https://hitokoto.cn/?uuid=" + data.uuid;
      from_who.innerText = data.from_who;

      if (data.from_who == null) {
        $("#yy-zz").css("opacity", "0");
      } else {
        $("#yy-zz").css("opacity", "1");
      }
    })
    .catch(console.error);
}

function css(dom, obj) {
  for (var i in obj) dom.style.setProperty(i, obj[i]);
}
$(function () {
  $("#qh-baidu,#ss").click();
  document.getElementById('input').select()
});

setInterval(function () {
  yySx();
}, 10000);
id("id-yy").onclick = function () {
  yySx();
};

function yySx() {
  setTimeout(function () {
    show();
  }, 400);
  $("#id-yy").css("opacity", "0");
  setTimeout(function () {
    $("#id-yy").css("opacity", "1");
  }, 800);
}

// 获取所有按钮
let bts = document.querySelectorAll(".button-left");
// 循环所有按钮
for (const key in bts) {
  if (bts.hasOwnProperty(key)) {
    const bt = bts[key];
    // 增加点击事件监听
    bt.addEventListener("click", () => {
      // 切换打开样式
      bt.classList.toggle("open");
      if ($(".button-left").attr("class") == "button-left open") {
        // $('#Pop_up').css('display', 'flex').css('width', '100%').css('height', '100%')
        $(".Pop_up").toggleClass("open");
        $(".Pop_up").css(
          "willChange",
          "transform,opacity,border-radius"
        );
      } else {
        // $('#Pop_up').css('width', '0')
        // $('#Pop_up').css('height', '0')
        $(".Pop_up").toggleClass("open");
        $(".Pop_up").css(
          "willChange",
          "transform,opacity,border-radius"
        );
      }
      document.querySelectorAll(".Pop_up")[0].addEventListener("transitionend", function () {
        this.style.willChange = "auto";
      });
    });
  }
}

var idYy = id("id-yy");
idYy.onmouseover = function () {
  $(".yy-mh").css("opacity", "1");
};
idYy.onmouseout = function () {
  $(".yy-mh").css("opacity", "0");
};

function resize() {
  var w = $(window).height();
  $("body").css("zoom", w / 860); //类似这样
}

function backdrop() {
  var userAgent = navigator.userAgent;
  if (userAgent.toLowerCase().indexOf("firefox") > -1) {
    // $('.Pop_up').classList.add('firefox')
  }
}

function getElementTop(element) {
  var el =
    typeof element == "string" ? document.getElementById(element) : element;

  if (el.parentNode === null || el.style.display == "none") {
    return false;
  }

  return el.offsetTop - el.parentNode.offsetTop;
}

$(".Pop_up_content_navigation_introduce").click(function () {
  let index = $(this).index();
  // window.location.href = '#introduce' + index
  var pos = getElementTop("introduce" + index) + 56;
  $(".Pop_up_content").animate({
      scrollTop: pos,
    },
    500
  );
});

$('.site_img').click(function () {
  if ($('.site_img').css('transform') == 'none') {
    $('.site_img').css('transform', 'rotate(90deg)')
    $('.site_div').show(300)
  } else {
    $('.site_img').css('transform', '')
    $('.site_div').hide(300)
  }
})