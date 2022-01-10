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


let word = null

function word_sI() {
    word = setInterval(function () {
        yySx();
    }, 10000);
}
if (localStorage.getItem('word') == "true" || localStorage.getItem('word') == null) {
    word_sI()
}
$('.mui-switch').eq(1).click(function () {
    if ($('.mui-switch').eq(1).prop("checked")) {
        localStorage.setItem('word', 'true')
        word_sI()
    } else {
        localStorage.setItem('word', 'false')
        clearInterval(word)
    }
})