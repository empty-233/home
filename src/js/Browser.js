$(document).ready(function () {
    var ua = navigator.userAgent.toLocaleLowerCase()
    if (ua.match(/chrome/) != null && ua.match(/safari/) != null && ua.match(/windows/) == null) {
        $(".dialog").show(500)
        setTimeout(function () {
            document.getElementsByClassName('dialog')[0].getElementsByTagName('p')[0].style.opacity = '1'
            document.getElementsByClassName('dialog')[0].getElementsByTagName('p')[1].style.opacity = '1'
        }, 500)
        setTimeout(function () {
            document.getElementsByClassName('dialog')[0].style.transition = '1s'
            document.getElementsByClassName('dialog')[0].style.opacity = '0'
            setTimeout(function () {
                document.getElementsByClassName('dialog')[0].style.display = 'none'
            }, 1000)
        }, 5000)
    } else if (ua.match(/chrome/) == null && ua.match(/safari/) != null && ua.match(/windows/) == null) {
        $(".dialog").show(500)
        document.getElementsByClassName('dialog')[0].getElementsByTagName('p')[0].innerHTML = '您使用是手机端<br>麻烦使用原版Chrome内核的浏览器<br>不知道您用了啥奇怪内核导致不兼容<br>可能会出现致命错误'
        setTimeout(function () {
            document.getElementsByClassName('dialog')[0].getElementsByTagName('p')[0].style.opacity = '1'
            document.getElementsByClassName('dialog')[0].getElementsByTagName('p')[1].style.opacity = '1'
        }, 500)
        setTimeout(function () {
            document.getElementsByClassName('dialog')[0].style.transition = '1s'
            document.getElementsByClassName('dialog')[0].style.opacity = '0'
            setTimeout(function () {
                document.getElementsByClassName('dialog')[0].style.display = 'none'
            }, 1000)
        }, 5000)
    } else if (ua.match(/chrome/) != null && ua.match(/safari/) == null && ua.match(/windows/) == 'windows') {
        $(".dialog").show(500)
        document.getElementsByClassName('dialog')[0].getElementsByTagName('p')[0].innerHTML = '您使用是电脑端<br>麻烦使用原版Chrome内核的浏览器<br>不知道您用了啥奇怪内核导致不兼容<br>可能会出现致命错误'
        setTimeout(function () {
            document.getElementsByClassName('dialog')[0].getElementsByTagName('p')[0].style.opacity = '1'
            document.getElementsByClassName('dialog')[0].getElementsByTagName('p')[1].style.opacity = '1'
        }, 500)
        setTimeout(function () {
            document.getElementsByClassName('dialog')[0].style.transition = '1s'
            document.getElementsByClassName('dialog')[0].style.opacity = '0'
            setTimeout(function () {
                document.getElementsByClassName('dialog')[0].style.display = 'none'
            }, 1000)
        }, 5000)
    }
})