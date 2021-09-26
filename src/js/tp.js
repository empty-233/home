function tp() {
    var img = [
        'https://pic.rmb.bdstatic.com/bjh/3b432644545978359b6f5108a8d2461b.png',
        'https://pic.rmb.bdstatic.com/bjh/1c9e91f33e74dc97fe3aababccb066bc.png',
        'https://pic.rmb.bdstatic.com/bjh/9fdec4298a8849affd85e5b3497370da.png',
        'https://pic.rmb.bdstatic.com/bjh/3e559df5d86aaa1cd6ce39b96beb1018.png',
        'https://pic.rmb.bdstatic.com/bjh/717adee135a1b05a5fcc8d11ff24a696.png',
        'https://pic.rmb.bdstatic.com/bjh/41816b8e9137fda8d05a0f2d1c210dc7.jpeg',
        'https://pic.rmb.bdstatic.com/bjh/a45f0ddd88ba6318b016f214004d40af.jpeg',
        'https://pic.rmb.bdstatic.com/bjh/ba3ae5ea63e9b02506222e8031108f4a.jpeg',
        'https://pic.rmb.bdstatic.com/bjh/f902df515b0991563be93c086a9b422d.jpeg'
    ]
    $('#tp img').css('opacity', '0')
    imgeA = Math.floor(Math.random() * 9); //后面的数字改成一共有几张
    imge = img[imgeA];
    var a = `<img src="./img/${imgeA}.webp" class="tpImg">`
    // var a = `<img src="${imge}" class="tpImg">`
    $('#tp').append(a)
}
tp();
setInterval(function () {
    tp();
    $('.tpImg').on("load", function () {
        setTimeout(function () {
            $('#tp img').eq(0).remove();
        }, 1500)
    })
}, 10000)