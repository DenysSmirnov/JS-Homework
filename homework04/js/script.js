$('img').hover( function(e) {
    $(e.target).closest('.sale-photo').find('.shop-it').css("display", "block");
}, function(e) {
    $(e.target).closest('.sale-photo').find('.shop-it').css("display", "");
})

// $('ul.tabset').on('click', function(e) {
// 	e.preventDefault();
// 	// console.log($(e.target).text());
// 	// let text = $(e.target).text().replace(' ', '-').replace("'", '').replace('?', '');
// 	let text = $(e.target).text().replace(/[\s'?]/g, '');
// 		$('ul.tabset li').removeClass('active');
// 		$(e.target).parent().addClass('active');
// 		$('div.tab.active').removeClass('active');
// 		$('#tab-' + text).addClass('active');

// 	// slides = $(".tab.active .article");
// 	// width = $(".tab.active .article").width()+13;
// 	// i = slides.length;
// 	// offset = 0;

// })
$(window).on('resize', carousel);
carousel();

function carousel(){
	var slides = $(".gallery ul li");
	if ($(document).width() < $(".gallery").width()+1) {
		var width = $(document).width();
	} else {
		var width = 1200;
	}
	slides.css('width', $("div.gallery").width()+'px');
	var i = slides.length-1;
	var offset = 0;
	$('.gallery a.next').on('click', function(e) {
		e.preventDefault();
	console.log(i, offset, width);/////////////////////
		if (i > 0) {
			offset += width;
		} else {
			i = slides.length;
			offset = 0;
		}
		$('.gallery ul').css({
			"-webkit-transform":"translateX(-"+offset+"px)",
			"-webkit-transition":"all 1s ease-in-out"
		});
		i--;
	})
	$('.gallery a.prev').on('click', function(e) {
		e.preventDefault();
	console.log(i, offset, width);/////////////////////
		if (offset > 0) {
			offset -= width;
		} else {
			offset = width * i;
			i = 0;
		}
		$('.gallery ul').css({
			"-webkit-transform":"translateX(-"+offset+"px)",
			"-webkit-transition":"all 1s ease-in-out"
		});
		i++;
	})
}

$(document).ready(function xxx() { // Ждём загрузки страницы
						   
	var slides = $(".tab.active .article"); // Получаем массив всех слайдов
	var width = $(".tab.active .article").width()+13; // Получаем ширину 1 артикла
	// var width = $(document).width();
	var i = slides.length; // Получаем количество слайдов
	var offset = i * width; // Задаем начальное смещение и ширину всех слайдов
	// var offset = $(document).width();
	i--; // уменьшаем кол-во слайдов на один ( для проверки в будущем )
	// i = i-4;
// console.log(slides, i, offset);
	// $(".tab.active").css('width',offset); // Задаем блоку со слайдами ширину всех слайдов
	
	offset = 0; // Обнуляем смещение, так как показывается cначала 1 слайд
	$(".btn-tabs-next").on('click', function(){	// Событие клика на кнопку "следующий слайд"
		console.log(i, offset, width * i+width);
		if (offset < width * i) {	// Проверяем, дошли ли мы до конца
			offset += width; // Увеличиваем смещение до следующего слайда
			$(".tab.active").css({ 	// Смещаем блок со слайдами к следующему
				"-webkit-transform":"translateX(-"+offset+"px)",
				"-webkit-transition":"all 1s ease-in-out"
				});
			i = i-2;
		}
	});

	$(".btn-tabs-prev").on('click', function(){	// Событие клика на кнопку "предыдущий слайд"
		console.log(offset, width*i-width);
		if (offset > 0) { // Проверяем, дошли ли мы до конца
			offset -= width; // Уменьшаем смещение до предыдущего слайда
			$(".tab.active").css("-webkit-transform","translateX(-"+offset+
			"px)").css("-webkit-transition","all 1s ease-in-out"); // Смещаем блок со слайдами к предыдущему
			i = i+2;
		}
	});

	$('ul.tabset').on('click', function(e) {
		e.preventDefault();
		// console.log($(e.target).text());
		// let text = $(e.target).text().replace(' ', '-').replace("'", '').replace('?', '');
		let text = $(e.target).text().replace(/[\s'?]/g, '');
			$('ul.tabset li').removeClass('active');
			$(e.target).parent().addClass('active');
			$('div.tab.active').removeClass('active');
			$('#tab-' + text).addClass('active');

		// slides = $(".tab.active .article");
		// width = $(".tab.active .article").width()+13;
		// i = slides.length;
		// offset = 0;
		xxx();
		console.log(i)

	})

});