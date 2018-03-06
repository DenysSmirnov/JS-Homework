(function($){
function l(...args){
	console.log(...args);
}

$('img').hover( function(e) {
    $(e.target).closest('.sale-photo').find('.shop-it').css("display", "block");
}, function(e) {
    $(e.target).closest('.sale-photo').find('.shop-it').css("display", "");
})

$(window).on('resize', resize);
carousel();
carousel2();

function resize() {
	var width = 1200;
	if ($(document).width() < $(".gallery").width()+1) {
		width = $(document).width();
	}
	$(".gallery ul li").css('width', $("div.gallery").width()+'px');
	return width;
}

function carousel(){
	var slides = $(".gallery ul li");
	width = resize();
	var i = 1;
	var offset = 0;
l('№'+i, 'off '+offset, width);
	$('.gallery a.next').on('click', function(e) {
		e.preventDefault();
		if (i < slides.length) {
			offset += width;
		} else {
			i = 0;
			offset = 0;
		}
		$('.gallery ul').css({
			"-webkit-transform":"translateX(-"+offset+"px)",
			"-webkit-transition":"all 1s ease-in-out"
		});
		i++; l('№'+i, 'off '+offset, width);
	})


	$('.gallery a.prev').on('click', function(e) {
		e.preventDefault();
		if (offset > 0) {
			offset -= width;
		} else {
			offset = width * (slides.length - 1);
			i = slides.length+1;
		}
		$('.gallery ul').css({
			"-webkit-transform":"translateX(-"+offset+"px)",
			"-webkit-transition":"all 1s ease-in-out"
		});
		i--; l('№'+i, 'off '+offset, width);
	})
}

function carousel2() {				   
	var slides = $(".tab.active .article");
	var width = $(".tab.active .article").width()+13;
	var i = slides.length;
	var offset = 0;
	var xxx = $(document).width();
	$(".btn-tabs-next").on('click', function(){
		if (offset < width * i - xxx) {
			offset += width;
			$(".tab.active").css({
				"-webkit-transform":"translateX(-"+offset+"px)",
				"-webkit-transition":"all 1s ease-in-out"
			});
			i--;
		}
	});

	$(".btn-tabs-prev").on('click', function(){
		if (offset > 0) {
			offset -= width;
			$(".tab.active").css({
				"-webkit-transform":"translateX(-"+offset+"px)",
				"-webkit-transition":"all 1s ease-in-out"
			});
			i++;
		}
	});
}

$('ul.tabset li').on('click', function(e) {
	e.preventDefault();
	let text = $(e.target).text().replace(/[\s'?]/g, '');
	$('ul.tabset li.active').removeClass('active').show();
	$(e.target).parent().addClass('active').siblings().toggle();
	$('div.tab.active').removeClass('active');
	$('#tab-' + text).addClass('active');

	carousel2();
})

})(jQuery);