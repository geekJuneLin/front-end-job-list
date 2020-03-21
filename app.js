$(function() {
    if ($(window).width() <= 375) {
        console.log('changing the img src')
        $('.header-img').attr('src', 'images/bg-header-mobile.svg')
    } else {
        $('.header-img').attr('src', 'images/bg-header-desktop.svg')
    }
})