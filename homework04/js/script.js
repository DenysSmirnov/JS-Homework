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

$('.gallery a.next').on('click', function(e) {
	e.preventDefault();
	$('.gallery ul li.active').removeClass('active').next().addClass('active');
// }, function() {
// 	$('.gallery ul li.active').first().addClass('active');
})
$('.gallery a.prev').on('click', function(e) {
	e.preventDefault();
	$('.gallery ul li.active').removeClass('active').prev().addClass('active');
})

// $('.btn-tabs-next').on('click', function(e) {
// 	$('.tab.active').addClass('move-left');
// })
// $('.btn-tabs-prev').on('click', function(e) {
// 	$('.tab.active').removeClass('move-left').addClass('move-right');
// })

$(document).ready(function() { // Ждём загрузки страницы
						   
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
	$(".btn-tabs-next").click(function(){	// Событие клика на кнопку "следующий слайд"
		console.log(i, offset, width * i+width);
		if (offset < width * i) {	// Проверяем, дошли ли мы до конца
			offset += width; // Увеличиваем смещение до следующего слайда
			$(".tab.active").css({ 	// Смещаем блок со слайдами к следующему
				"-webkit-transform":"translate(-"+offset+"px, 0px)",
				"-webkit-transition":"all 1s ease-in-out"
				});
			i = i-2;
		}
	});

	$(".btn-tabs-prev").click(function(){	// Событие клика на кнопку "предыдущий слайд"
		console.log(offset, width*i-width);
		if (offset > 0) { // Проверяем, дошли ли мы до конца
			offset -= width; // Уменьшаем смещение до предыдущего слайда
			$(".tab.active").css("-webkit-transform","translate(-"+offset+
			"px, 0px)").css("-webkit-transition","all 1s ease-in-out"); // Смещаем блок со слайдами к предыдущему
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

		slides = $(".tab.active .article");
		width = $(".tab.active .article").width()+13;
		i = slides.length;
		offset = 0;
		console.log(i)

	})

});