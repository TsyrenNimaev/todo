window.addEventListener('DOMContentLoaded', function () {
	$(document).ready(function () {
		$("#nav-link").on("click", "a",
			function (event) {
				event.preventDefault();
				var id =
					$(this).attr('href'),
					top = $(id).offset().top;
				$('body,html').animate({ scrollTop: top }, 1500);
			});
	});
	$(document).ready(function () {
		$("#hero-link-btn").on("click", "a",
			function (event) {
				event.preventDefault();
				var id =
					$(this).attr('href'),
					top = $(id).offset().top;
				$('body,html').animate({ scrollTop: top }, 1500);
			});
	});


	const dropdownBtn = document.querySelectorAll('.header-select-title');
	const dropdownContent = document.querySelectorAll('.header-select-content');
	const dropdownArrow = document.querySelectorAll('.header-dottom__arrow');

	dropdownBtn.forEach((el, index) => {
		el.addEventListener('click', (event) => {
			event.preventDefault();

			const dropdownContentClassList = dropdownContent[index].classList;
			if (dropdownContentClassList.contains('header-select__content-active')) {
				dropdownContentClassList.remove('header-select__content-active')
				dropdownArrow[index].classList.remove('header-dottom__arrow--active')

			} else {
				dropdownContent.forEach((el) => el.classList.remove('header-select__content-active'))
				dropdownContentClassList.add('header-select__content-active')
				dropdownArrow.forEach((el) => el.classList.remove('header-dottom__arrow--active'))
				dropdownArrow[index].classList.add('header-dottom__arrow--active')
			}
		});
	});

	window.onclick = function (event) {
		if (!event.target.matches('.header-select-title')) {
			let dropdowns = document.getElementsByClassName('header-select-content');
			let i;
			for (i = 0; i < dropdowns.length; i++) {
				let openDropdown = dropdowns[i];
				if (openDropdown.classList.contains('header-select__content-active')) {
					openDropdown.classList.remove('header-select__content-active');
				}
			}
		}

		if (!event.target.matches('.header-select-title')) {
			let dropArrows = document.getElementsByClassName('header-dottom__arrow');
			let i;
			for (i = 0; i < dropArrows.length; i++) {
				let openDropdown = dropArrows[i];
				if (openDropdown.classList.contains('header-dottom__arrow--active')) {
					openDropdown.classList.remove('header-dottom__arrow--active');
				}
			}
		}
	}

	/*gallery*/

	//choices
	const element = document.querySelector('.gallery__select');
	const choices = new Choices(element, {
		searchEnabled: false,
		itemSelectText: '',
	})

	//swiper
	const gallarySlider = document.querySelector('.gallery__swiper-container');

	var gallarySwiper = new Swiper(gallarySlider, {
		pagination: {
			el: '.gallery__swiper-pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		slidesPerView: 1,
		slidesPerGroup: 1,
		slidesPerColumn: 1,
		spaceBetween: 10,
		slidersPerColumnFill: 'row',
		breakpoints: {
			541: {
				spaceBetween: 30,
				slidesPerView: 2,
				slidesPerColumn: 2,
				slidesPerGroup: 2,
			},

			1201: {
				spaceBetween: 20,
				slidesPerView: 3,
				slidesPerColumn: 2,
				slidesPerGroup: 3,

			},

			1300: {
				spaceBetween: 30,
				slidesPerView: 3,
				slidesPerColumn: 2,
				slidesPerGroup: 3,
			},

			1500: {
				spaceBetween: 50,
				slidesPerView: 3,
				slidesPerColumn: 2,
				slidesPerGroup: 3,
			}
		}
	});

	/*popup*/

	const modal = new GraphModal();

	/*catalog*/

	//accordion

	$(document).ready(function () {

		$(".tabs-content__list").accordion({
			heightStyle: "content",
			refresh: true,
			collapsible: true,
			active: 0
		});

	});

	$(document).ready(function () {
		$(".tabs-painter__empty-container").on("click", "a",
			function (event) {
				event.preventDefault();
				var id =
					$(this).attr('href'),
					top = $(id).offset().top;
				$('body,html').animate({ scrollTop: top }, 1500);
			});
	});
	$(document).ready(function () {
		$(".tabs-content__painter").on("click", "a",
			function (event) {
				event.preventDefault();
				var id =
					$(this).attr('href'),
					top = $(id).offset().top;
				$('body,html').animate({ scrollTop: top }, 1500);
			});
	});


	document.querySelectorAll('.catalog-tabs__btn').forEach(function (tabsLang) {
		tabsLang.addEventListener('click', function (event) {
			const path = event.currentTarget.dataset.path
			document.querySelectorAll('.catalog-tabs__content').forEach(function (langContainer) {
				langContainer.classList.remove('catalog-tabs__content--active')
			});
			document.querySelector(`[data-target="${path}"]`).classList.add('catalog-tabs__content--active')
		});
	});

	document.querySelectorAll('.tabs-painter__btn').forEach(function (tabsBtn) {
		tabsBtn.addEventListener('click', function (event) {
			const path = event.currentTarget.dataset.path
			document.querySelectorAll('.tabs-content__painter').forEach(function (descriptionContainer) {
				descriptionContainer.classList.remove('tabs-content__painter--active')
			});
			document.querySelector(`[data-target="${path}"]`).classList.add('tabs-content__painter--active')
		});
	});

	$(".catalog-tabs__btn").click(function () {
		$('.catalog-tabs__btn').removeClass('catalog-tabs__btn--active');
		$(this).addClass('catalog-tabs__btn--active');
	});

	$(".tabs-painter__btn").click(function () {
		$('.tabs-painter__btn').removeClass('tabs-painter__btn--active');
		$(this).addClass('tabs-painter__btn--active');
	});

	$(".tabs-content__btn").click(function () {
		$('.tabs-content__btn').removeClass('tabs-content__btn--active');
		$(this).addClass('tabs-content__btn--active');
	});

	const windowWidth = window.matchMedia('(max-width: 960px)');
	let painters = document.querySelectorAll('button[name*="#"]');

	function f() {
		for (let painter of painters) {
			const blockID = painter.getAttribute('name').substr(1);

			document.getElementById(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	}

	if (windowWidth.matches) {
		for (let painter of painters) {
			painter.addEventListener('click', f);
		}
	}

	windowWidth.addEventListener('change', event => {
		if (event.matches) {
			for (let painter of painters) {
				painter.addEventListener('click', f);
			}
		} else {
			for (let painter of painters) {
				painter.removeEventListener('click', f, false);
			}
		}
	});

	/*event*/
	//все события
	const eventsItem = document.querySelectorAll('.events__item');
	const eventsBtn = document.querySelector('.events__btn');
	const eventTablet = document.querySelector('.events-tablet')

	eventsBtn.addEventListener('click', () => {
		eventsItem.forEach(el => {
			el.classList.remove('events__item-hidden')
		});

		eventsBtn.classList.add('events__item-hidden')
	});


	if (window.innerWidth <= 961) {
		eventTablet.classList.add('events__item-hidden')
	} else {
		eventTablet.classList.remove('events__item-hidden')
	}

	if (window.innerWidth <= 540) {
		eventsItem.forEach(el => {
			el.classList.remove('events__item-hidden')
		})
	}


	//swiper

	const eventsSlider = document.querySelector('.events__slider-container');

	let swiperEvent;

	const mobileEventsSlider = () => {
		if (window.innerWidth <= 540 && eventsSlider.dataset.mobile == 'false') {
			swiperEvent = new Swiper(eventsSlider, {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 10,
				slideClass: ('events__item'),
				
				pagination: {
					el: '.swiper-pagination',
					clickable: true,		
				},
			});

			eventsSlider.dataset.mobile = 'true';
		}

		if (window.innerWidth > 540) {
			eventsSlider.dataset.mobile = 'false';

			if (eventsSlider.classList.contains('swiper-container-initialized')) {
				swiperEvent.destroy();
			}
		}
	}

	mobileEventsSlider();

	window.addEventListener('resize', () => {
		mobileEventsSlider();
	});

	/*editions*/
	const editionsBtn = document.querySelector('.editions__categories-title');
	const editionsItem = document.querySelectorAll('.editions__categories-item');
	const editionsInput = document.querySelectorAll('.editions__categories-input');
	const editionsBtnArrow = document.querySelector('.editions__categories-arrow');

	const showActiveCheckbox = () => {
		editionsInput.forEach(el => {
			if (el.checked === true) {
				el.parentNode.classList.add('categories__items--active')
			}
		})
	};

	const editionsList = () => {
		editionsBtn.addEventListener('click', () => {
			editionsBtnArrow.classList.toggle('arrow-active');
			editionsItem.forEach(el => {
				el.classList.toggle('categories__items--active')
			})
			showActiveCheckbox();
		})
	};

	const editionsCheck = () => {
		for (let i = 0; i < editionsInput.length; i++) {
			const el = editionsInput[i];
			el.addEventListener('change', () => {
				if (!el.checked && !editionsBtnArrow.classList.contains('arrow-active')) {
					el.parentNode.classList.remove('categories__items--active');
				}
				showActiveCheckbox();
			})
		}
		showActiveCheckbox();
	}
	editionsList();
	editionsCheck();

	//swiper

	const editionsSlider = document.querySelector('.edition__swiper-container');

	let swiperEditions;
	const desctopSlider = () => {

		if (window.innerWidth >= 540 && editionsSlider.dataset.desktop == 'true') {
			swiperEditions = new Swiper(editionsSlider, {
				slideClass: ('editions__slide'),
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 10,
				pagination: {
					el: '.editions__swiper-pagination',
					type: 'fraction',
				},

				navigation: {
					nextEl: '.editions__swiper-button-next',
					prevEl: '.editions__swiper-button-prev',
				},

				breakpoints: {
					541: {
						spaceBetween: 10,
						slidesPerView: 2,
						slidesPerGroup: 2
					},
					751: {
						spaceBetween: -20,
						slidesPerView: 2,
						slidesPerGroup: 2
					},
					769: {
						spaceBetween: 30,
						slidesPerView: 2,
						slidesPerGroup: 2
					},
					959: {
						spaceBetween: 50,
						slidesPerView: 2,
						slidesPerGroup: 2
					},
					1201: {
						spaceBetween: 50,
						slidesPerView: 3,
						slidesPerGroup: 3
					}
				}
			})

			editionsSlider.dataset.desktop == 'false'
		}

		if (window.innerWidth <= 540) {
			editionsSlider.dataset.mobile = 'false';

			if (editionsSlider.classList.contains('swiper-container-initialized')) {
				swiperEditions.destroy();
			}
		}
	}

	desctopSlider();

	window.addEventListener('resize', () => {
		desctopSlider();
	})

	/*projects*/

	tippy('.tooltip1', {
		content: 'Пример современных тенденций - современная методология разработки',
		theme: 'tooltip-theme',
		delay: [0, 1500],
		animation: 'scale'
	});

	tippy('.tooltip2', {
		content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
		theme: 'tooltip-theme',
		delay: [0, 1500],
		animation: 'scale'
	});

	tippy('.tooltip3', {
		content: 'В стремлении повысить качество',
		theme: 'tooltip-theme',
		delay: [0, 1500],
		animation: 'scale'
	});


	//swiper

	const projectsSlider = document.querySelector('.projects__swiper-container');

	var projectsSwiper = new Swiper(projectsSlider, {
		slideClass: ('projects__swiper-slide'),
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 10,

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		breakpoints: {
			200: {
				slidesPerView: 1,
				slidesPerGroup: 1
			},

			541: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 32,
			},

			1000: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 50
			},

			1300: {
				spaceBetween: 30,
			},

			1600: {
				spaceBetween: 50,
				slidesPerView: 3,
				slidesPerGroup: 3,
			}
		}
	})

	/*contacts*/

	//validate
	$('body').on('input', '.input_name', function () {
		this.value = this.value.replace(/[^a-zа-яё\s]/gi, '');
	});

	var selector = document.querySelector("input[type='tel']");
	var im = new Inputmask("+7 (999)-999-99-99");
	im.mask(selector);

	new JustValidate('.contacts__form', {
		rules: {
			name: {
				required: true,
				minLength: 2,
				maxLenght: 30
			},
			tel: {
				required: true,
				function: (name, value) => {
					const phone = selector.inputmask.unmaskedvalue()
					return Number(phone) && phone.length === 10
				},
			},
		},
		messages: {
			name: {
				maxLength: 'Введите корректное имя',
				minLength: 'Имя должно содержать хотя бы 2 буквы',
				required: 'Как Вас зовут?'
			},
			tel: {
				function: 'Телефон должен содержать 10 цифр',
				required: 'Укажите Ваш телефон'
			}
		},
		tooltip: {
			fadeOutTime: 6000
		},
		submitHandler: function (form, values, ajax) {
 
			ajax({
			  url: 'mail.php',
			  method: 'POST',
			  data: values,
			  async: true,
			  callback: function()  {
				Fancybox.show([{
					src: "<p>Спасибо! Ваша заявка принята! Наш менеджер свяжется с Вами в ближайщее время. </p>",
					type: "html",
				  }, ], {
					mainClass: "popup-send",
				  });
			  },
			});
			form.reset();
		  },

	});
	//map

	ymaps.ready(init);
	function init() {
		var myMap = new ymaps.Map("map", {
			center: [55.75846306898368, 37.601079499999905],
			zoom: 15
		});

		var myPlacemark = new ymaps.Placemark([55.75846306898368, 37.601079499999905], {}, {
			iconLayout: 'default#image',
			iconImageHref: 'img/contacts/marker-map.svg',
			iconImageSize: [28, 40],
			iconImageOffset: [-3, -42]
		});

		myMap.geoObjects.add(myPlacemark);
	};
	//burger
	document.querySelector('.burger').addEventListener('click', function () {
		document.querySelector('.header-top__nav').classList.toggle('is_active')
	});
	document.querySelector('.burger').addEventListener('click', function () {
		document.querySelector('.burger').classList.toggle('burger-active')
	});
	document.querySelector('.burger').addEventListener('click', function () {
		document.querySelector('body').classList.toggle('lock')
	});
	var burger = document.querySelectorAll('.header-top__item');
	for (var i = 0; i < burger.length; i++) {
		burger[i].addEventListener('click', function () {
			document.querySelector('.burger').classList.remove('burger-active')
		})
	};
	var burger = document.querySelectorAll('.header-top__item');
	for (var i = 0; i < burger.length; i++) {
		burger[i].addEventListener('click', function () {
			document.querySelector('.burger').classList.remove('burger-active')
		})
	};
	var topNav = document.querySelectorAll('.header-top__item');
	for (var i = 0; i < topNav.length; i++) {
		topNav[i].addEventListener('click', function () {
			document.querySelector('.header-top__nav').classList.remove('is_active')
		})
	};
	var bodyLock = document.querySelectorAll('.header-top__item');
	for (var i = 0; i < bodyLock.length; i++) {
		bodyLock[i].addEventListener('click', function () {
			document.querySelector('body').classList.remove('lock')
		})
	};
	document.querySelector('.search-button').addEventListener('click', function () {
		document.querySelector('.search__mobile-input').classList.toggle('search__mobile-input--active')
	});
});