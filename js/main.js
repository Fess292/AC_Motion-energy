
// $(".toform").click(function () { // ID откуда кливаем
// 	$('html, body').animate({
// 		scrollTop: $("#form").offset().top  // класс объекта к которому приезжаем
// 	}, 700); // Скорость прокрутки
// });

//------------------------------------------
// HEADER MENU
//------------------------------------------
// var headerMenu = '.header-menu';

// $(headerMenu + '-touch').on('click', function () {
// 	$(headerMenu).slideToggle();
// 	$(this).toggleClass('open');
// });

// $(window).on('resize', function () {
// 	if ($(headerMenu).is(':hidden')) {
// 		$(headerMenu).removeAttr('style');
// 	}
// });


//------------------------------------------
// HEADER MENU
//------------------------------------------
var headerMenu = '.header-menu';

$(headerMenu + '-touch').on('click', function () {
	$(headerMenu).slideToggle();
	$(this).toggleClass('open');
});

$(window).on('resize', function () {
	if ($(headerMenu).is(':hidden')) {
		$(headerMenu).removeAttr('style');
	}
});
//------------------------------------------
// SCROLL MENU
//------------------------------------------
function onScroll() {
	$(headerMenu + ' a').not('.notlink').each(function () {
		var anchor = $(this).attr('href');
		if ($(anchor).length) { // проверка на существование элемента
			var scrollTop = $(document).scrollTop();
			var positionTop = $(anchor).position().top;
			var outerHeight = $(anchor).outerHeight();

			if ((positionTop - window.innerHeight / 2 <= scrollTop) && (positionTop + outerHeight > scrollTop)) {
				$(headerMenu + ' a.active').removeClass('active');
				$(this).removeClass('active');
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		}
	});
}


$(document).on('scroll', onScroll);

$(headerMenu + ' a').on('click', function (e) {
	if ($(this).hasClass('notlink')) {
		// Если у ссылки есть класс 'notlink', пропускаем её обработку
		return;
	}

	// Если ссылка не имеет класса 'notlink', продолжаем исполнение
	e.preventDefault();
	$(document).off('scroll');

	$(headerMenu + ' a.active').removeClass('active');
	$(this).addClass('active');
	$(headerMenu).removeAttr('style');
	$(headerMenu + '-touch').removeClass('open');

	var anchor = $(this).attr('href');
	var target = $(anchor);

	if (target.length) {
		// Делаем прокрутку, только если целевой элемент существует
		$('html, body').stop().animate({
			scrollTop: target.offset().top
		}, 500, function () {
			window.location.hash = anchor;
			$(document).on('scroll', onScroll);
		});
	}
});


//слайдер

var catalogSlider = new Swiper('.users__slider', {
	effect: "coverflow",
	slidesPerView: 1,
	grabCursor: true,
	initialSlide: 1,
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: false,
	},
	breakpoints: {

		768: {
			spaceBetween: 100


		},
		1700: {
			spaceBetween: 200,
			coverflowEffect: {
				rotate: 20,
				stretch: 0,
				depth: 50,
				scale: 0.8,
				modifier: 1,
				slideShadows: true,
			},


		}
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});


// Radial progress bar
// var count = $(('#count'));
// $({ Counter: 0 }).animate({ Counter: count.text() }, {
// 	duration: 5000,
// 	easing: 'linear',
// 	step: function () {
// 		count.text(Math.ceil(this.Counter) + "%");
// 	}
// });

// var s = Snap('#animated');
// var progress = s.select('#progress');

// progress.attr({ strokeDasharray: '236.1,251.2' });
// Snap.animate(0, 251.2, function (value) {
// 	progress.attr({ 'stroke-dasharray': value + ',251.2' });
// }, 5000);
// function toform(id) {
// 	id.click(function () { // ID откуда кливаем
// 		$('html, body').animate({
// 			scrollTop: $("#final").offset().top // класс объекта к которому приезжаем
// 		}, 700); // Скорость прокрутки
// 	});
// }
// toform(".toform");

$(".toform").click(function () {
	event.preventDefault();
	  $('html, body').animate({
		  scrollTop: $("#final .form").offset().top
	  }, 700);
  });
	
