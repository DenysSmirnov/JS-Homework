$('.burger').on('click', function(e) {
    let parent = $(e.target).parent();
    console.log(parent);
    e.preventDefault();
    $('.sidebar-wrapper').css('display', 'block');
    if ( parent.hasClass('menu') ) {
        $('.sidebar').addClass('-up');
    } else {
        $('.footer-nav').addClass('up');
        $('.footer-nav button').css('display', 'block');
    }
})

$('.sidebar-wrapper, .btn-close').mouseup(function() {
    $('.sidebar').removeClass('-up');
    $('.footer-nav').removeClass('up');
    $('.sidebar-wrapper').css('display', 'none');
    $('.footer-nav button').css('display', 'none');
})