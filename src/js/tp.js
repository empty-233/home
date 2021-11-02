function tp() {
    $('#tp img').css('opacity', '0')
    imgeA = Math.floor(Math.random() * 9); //后面的数字改成一共有几张
    imge = img[imgeA];
    var a = `<img src="./img/${imgeA}.webp" class="tpImg">`
    $('#tp').append(a)
}

function img() {
    tp()
    set = setInterval(function () {
        tp();
        $('.tpImg').on("load", function () {
            setTimeout(function () {
                $('#tp img').eq(0).remove();
            }, 1500)
        })

        if ($('#tp img').length > 2) {
            $('#tp img').eq(0).remove();
        }
    }, 10000)
}

function checkUrl(URL) {
    var str = URL;
    var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
    var objExp = new RegExp(Expression);
    if (objExp.test(str) == true) {
        return true;
    } else {
        return false;
    }
}

function url() {
    let value = $('.site_input>input').val()
    if (localStorage.getItem('background_image') != null) {
        value = localStorage.getItem('background_image')
    }
    if (value == '') {
        value = 'https://drive.kongwu.top/image/pixiv?random=jpg'
        console.log('123');
    }
    localStorage.setItem('background_image', value)
    clearInterval(set)
    if (checkUrl(value)) {
        $('#tp').append('<img src="' + value + '" class="tpImg">')
        localStorage.setItem('background_image', value)
    } else {
        console.log(checkUrl(value));
        alert('请输入正确的url')
    }
    if ($('#tp img').length > 1) {
        $('#tp img').eq(0).remove();
    }
}

let set = null
$('.mui-switch').eq(0).click(function () {
    if ($('.mui-switch').eq(0).prop("checked")) {
        localStorage.setItem('background', 'true')
    } else {
        localStorage.setItem('background', 'false')
    }
    if (localStorage.getItem('background') == 'true') {
        $('.site_input').hide(500)
        img()
    } else {
        $('#tp img').eq(0).remove();
        $('.site_input').show(500)
        url()
    }
})
$('.site_input>button').click(function () {
    url()
})
if (localStorage.getItem('background') == 'true' || localStorage.getItem('background') == null) {
    $('.mui-switch').eq(0).prop('checked', true)
    $('.site_input').hide(500)
    img()
}
if (localStorage.getItem('background') != 'true' && localStorage.getItem('background') != null) {
    $('.mui-switch').eq(0).prop('checked', false)
    url()
    $('.site_input').show(500)
}