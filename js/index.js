$(document).ready(function () {

  // ----------------------------- SCROLL -------------------------------- //

  $(".header__nav-list, .header__btn-box, .footer__top-list, .footer__bottom-inner, .logo").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });

  // ----------------------------- BURGER MENU -------------------------------- //

  const menuBtn = $('.burger');
  const menu = $('.header__top');
  const overlay = $('.overlay');
  const navLink = $('.header__nav-link, footer__top-link, logo, header__top-button')

  setInterval(() => {
    if ($(window).scrollTop() > 0 && !menu.hasClass('header__top--open')) {
      menuBtn.addClass('burger--follow');
    } else {
      menuBtn.removeClass('burger--follow');
    };
  }, 0)

  menuBtn.on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('lock');
    menuBtn.toggleClass('burger--trans')
    menu.toggleClass('header__top--open');
    overlay.toggleClass('overlay--show');
  });

  overlay.on('click', function () {
    $('body').toggleClass('lock');
    menu.toggleClass('header__top--open');
    menuBtn.toggleClass('burger--trans')
    overlay.toggleClass('overlay--show');
  });

  navLink.on('click', function () {
    $('body').removeClass('lock');
    menu.removeClass('header__top--open');
    menuBtn.removeClass('burger--trans')
    overlay.removeClass('overlay--show');
  });

  // ------------------------- DIRECTIONS FILTER ----------------------------- //

  const mixer = mixitup('.directions__list');
  const filterBtn = $('.directions__filter-btn');
  const filterBtnAct = 'directions__filter-btn--active';

  filterBtn.on('click', function () {
    filterBtn.removeClass(filterBtnAct);
    $(this).addClass(filterBtnAct);
  })

  // ---------------------------- TEAM SLIDER -------------------------------- //

  const teamSlider = $('.team__slider');
  const teamPrev = $('.team__slider-arrow--prev');
  const teamNext = $('.team__slider-arrow--next');

  $(teamSlider).slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    autoplay: true,
    draggable: false,
    waitForAnimate: true,
    responsive: [
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 850,
        settings: {
          centerMode: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          draggable: true,
          centerMode: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          draggable: true,
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ]
  });

  teamPrev.on('click', function (e) {
    e.preventDefault();
    teamSlider.slick('slickPrev');
  });

  teamNext.on('click', function (e) {
    e.preventDefault();
    teamSlider.slick('slickNext');
  });


  // ---------------------------- TESTIMONIAL SLIDER -------------------------------- //

  const testimonialsSlider = $('.testimonials__slider');
  const testimonialsPrev = $('.testimonials__arrow--prev');
  const testimonialsNext = $('.testimonials__arrow--next');

  $(testimonialsSlider).slick({
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    // autoplay: true,
    dots: true,
    waitForAnimate: true,
    appendDots: '.testimonials__dots',
    responsive: [
      {
        breakpoint: 700,
        settings: {
        },
      },
    ]
  });

  testimonialsPrev.on('click', function (e) {
    e.preventDefault();
    testimonialsSlider.slick('slickPrev');
  });

  testimonialsNext.on('click', function (e) {
    e.preventDefault();
    testimonialsSlider.slick('slickNext');
  });

  // ---------------------------- COURSE ACC -------------------------------- //

  const accBody = $('.programm__acc-link');

  accBody.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('programm__acc-link--active');
    $(this).children('.programm__acc-text').slideToggle();
  })

  // ---------------------------- FOOTER ACC -------------------------------- //

  $('.footer__top-col--acc h3').on('click', function () {
    $(this).next().slideToggle()
  });

})