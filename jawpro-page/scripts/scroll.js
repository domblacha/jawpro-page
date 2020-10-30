$('.btnBanner').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.portfolio').offset().top
    })
})

if (screen.width < 1024) {
    $('.contactBtn').attr("href", 'tel: 664461410');
} else {
    $('.contactBtn').on('click', function () {
        $('body, html').animate({
            scrollTop: $('.contact').offset().top
        })
    })
}
