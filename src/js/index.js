window.addEventListener("DOMContentLoaded", function () {
  //menu

  const menu = document.querySelector('.menu');
  
  menu.addEventListener('click', function () {
    menu.classList.toggle('active');  // кнопка меню
		document.querySelector('.sidebar-nav__container').classList.toggle('active'); // открыть меню
    document.querySelector('.sidebar').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock'); // залочить body при открытом меню
    document.querySelector('.sidebar-search').classList.toggle('active');
    document.querySelector('.header-submit').classList.toggle('active');
	});


  //sidebar
  //при клике на списки меню в сайдбаре открываем соотвествующий контент
  const pathTarget = document.querySelectorAll('.path-target');
  const content = document.querySelectorAll('.content-container');

  pathTarget.forEach(function(el) {
    el.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      content.forEach(function(container) {
        container.classList.remove('active');
        document.querySelector('.menu').classList.remove('active');    //закрываем меню при клике на список
        document.querySelector('.sidebar').classList.remove('active');     
        document.querySelector('.sidebar-nav__container').classList.remove('active');
      });
      const dataTarget = document.querySelector(`[data-target="${path}"]`);
      dataTarget.classList.add('active');
    });
  });


  //добавляем к элементам сайдбара стили при клике
  pathTarget.forEach((el, index) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();

      const item = pathTarget[index].classList;
      if (item.contains('active')) {
        item.remove('active');
      } else {
        pathTarget.forEach((el) => el.classList.remove('active'));
        item.add('active');
      };
    });
  });

  //search
  //открыть поле для ввода
  const search = document.querySelector('.sidebar-search__btn');

  search.addEventListener('click', function() {
    document.querySelector('.sidebar-search__input').classList.toggle('active')
  });


  //services
  //навигация в секции services
  const servicesItem = document.querySelectorAll('.services-nav__item');

  servicesItem.forEach((el, index) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();

      const spanClassList = servicesItem[index].classList;
      if (spanClassList.contains('active')) {
        spanClassList.remove('active');
      } else {
        servicesItem.forEach((el) =>
          el.classList.remove('active')
        );
        spanClassList.add('active');
      }
    });
  });

  //модальное окно
  const modalLinks = document.querySelectorAll('.modal-link');
  const body = document.querySelector('body');

  let unlock = true;     //флаг, чтобы исключить двойное нажатие

  //делаем проверку и добавляем в новую переменную
  if (modalLinks.length > 0) {
    for (let index = 0; index < modalLinks.length; index++) {
      const modalLink = modalLinks[index];
      modalLink.addEventListener('click', function(el) {
        const modalName = modalLink.getAttribute('href').replace('#', '');
        const curentModal = document.getElementById(modalName);
        modalOpen(curentModal);
        el.preventDefault();
      });
    };
  };

  //закрываем окно по кнопке
  const closeIcon = document.querySelectorAll('.close');

  if (closeIcon.length > 0) {
    for (let index = 0; index < closeIcon.length; index++) {
      const el = closeIcon[index];
      el.addEventListener('click', function(e) {
        modalClose(el.closest('.modal'));
        e.preventDefault();
      });
    };
  };

  //фукция для открытия окна
  function modalOpen(curentModal) {
    if (curentModal && unlock) {       //проверяем открыто или нет
      const modalActive = document.querySelector('.open');
      if (modalActive) {
        modalClose(modalActive, false);
      } else {
        body.classList.add('lock'); //залочить body
      }
      curentModal.classList.add('open');
      curentModal.addEventListener('click', function(el) {
        if (!el.target.closest('.modal__container')) {  //закрываем окно при клике на заблюренную область
          modalClose(el.target.closest('.modal'));
        }
      });
    };
  };

  //функция для закрытия окна
  function modalClose(modalActive, doUnlock=true) {
    if (unlock) {
      modalActive.classList.remove('open');
      body.classList.remove('lock');  //разлочить body
    };
  };

  //закрываем модалку по клавише esc
  document.addEventListener('keydown', function(el) {
    if (el.which === 27) {
      const modalActive = document.querySelector('.open');
      modalClose(modalActive);
    }
  });
  
  //show all
  //читать далее и скрыть

  const showBtn = document.querySelectorAll('.show-container');
  const showContent = document.querySelectorAll('.hidden-container');
  const showAll = document.querySelectorAll('.show-all');
  const showMinimize = document.querySelectorAll('.show-minimize');
  const hiddenBtn = document.querySelectorAll('.show-hidden');

  showBtn.forEach((el, index) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();

      const show = showContent[index].classList;
      if (show.contains('active')) {
        show.remove('active');
        showAll[index].classList.remove('active');
        showMinimize[index].classList.remove('active');
      } else {
        showContent.forEach((el) => el.classList.remove('active'));
        show.add('active');
        showAll.forEach((el) => el.classList.remove('active'));
        showMinimize.forEach((el) => el.classList.remove('active'));
        showAll[index].classList.add('active');
        showMinimize[index].classList.add('active');
      };
    });
  });

  //в модильной версии скрывает 'показать все'
  function numWin() {
    if (window.innerWidth <= 540) {
      hiddenBtn.forEach((el) => {
        el.classList.add('show-hidden1');
      });
    } else {
      hiddenBtn.forEach((el) => {
        el.classList.remove('show-hidden1');
      });
    }
  }

  numWin();
  window.addEventListener('resize', () => {
    numWin();
  });



  //свайпер

  const serviceSwiper = document.querySelector('.services-nav');
  const brandSwiper = document.querySelector('.brands-swiper');
  const typeSwiper = document.querySelector('.types-swiper');
  const priceSwiper = document.querySelector('.price-swiper');

  const servicesSwiper = () => {
    if(window.innerWidth <= 768) {
     let newSlade = new Swiper(serviceSwiper, {
    direction: 'horizontal',
    freeMode: true
      });
    }
  };

  const brandsSwiper = () => {
    if(window.innerWidth <= 540) {
      let newSlade = new Swiper(brandSwiper, {
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination',
        },
        // breakpoints: {
        //   540: {
        //   slidesPerView: 2,
        //   slidesPerGroup: 2,
        //   spaceBetween: 32,
        //   }
        // }
      });
    }
  };

  const typesSwiper = () => {
    if(window.innerWidth <= 540) {
      let newSlade = new Swiper(typeSwiper, {
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination',
        },
      //   breakpoints: {
      //     540: {
      //     slidesPerView: 2,
      //     slidesPerGroup: 2,
      //     spaceBetween: 32,
      //   }
      // }

      });
    }
  }

  const pricesSwiper = () => {
    if(window.innerWidth <= 320) {
      let newSlade = new Swiper(priceSwiper, {
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination',
        },
        // breakpoints: {
        //   540: {
        //   slidesPerView: 2,
        //   slidesPerGroup: 2,
        //   spaceBetween: 32,
        // }
      // }

      });
    }
  }


  servicesSwiper();
  brandsSwiper();
  typesSwiper();
  pricesSwiper();

  window.addEventListener('resize', () => {
    servicesSwiper();
    brandsSwiper();
    typesSwiper();
    pricesSwiper();

  });
});





  //dropdown

  // let dropdownBtn = document.querySelectorAll(".arrow-dropdown");
  // let dropdownContainer = document.querySelectorAll(".dropdown");

  // dropdownBtn.forEach((el, index) => {
  //   el.addEventListener("click", (event) => {
  //     event.preventDefault();

  //     let dropdownClassList = dropdownContainer[index].classList;
  //     if (dropdownClassList.contains("brands-dropdown__container--active")) {
  //       dropdownClassList.remove("brands-dropdown__container--active");
  //       dropdownBtn[index].classList.remove("arrow-dropdown--active");
  //     } else {
  //       dropdownContainer.forEach((el) =>
  //         el.classList.remove("brands-dropdown__container--active")
  //       );
  //       dropdownClassList.add("brands-dropdown__container--active");
  //       dropdownBtn.forEach((el) =>
  //         el.classList.remove("arrow-dropdown--active")
  //       );
  //       dropdownBtn[index].classList.add("arrow-dropdown--active");
  //     }
  //   });
  // });
