$('.burger').on('click', function(e) {
    e.preventDefault();
    $('.sidebar-wrapper').css('display', 'block');
    $('.sidebar').addClass('-up');
})

$('.sidebar-wrapper, .btn-close').mouseup(function() {
    $('.sidebar').removeClass('-up');
    $('.sidebar-wrapper').css('display', 'none');
})