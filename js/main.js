document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.support__swiper', {
    loop: false,
    speed: 300,
    slidesPerView: 4,
    spaceBetween: 24,
    autoHeight: false,
    navigation: {
      nextEl: '.support__swiper-button-next',
      prevEl: '.support__swiper-button-prev',
    },
    on: {
      slideChange: function () {
          if (swiper.activeIndex === 0) {
              document.querySelector('.support__swiper-button-prev').style.display = 'none'; // Скрываем кнопку, если на первом слайде
          } else {
              document.querySelector('.support__swiper-button-prev').style.display = 'block'; // Показываем кнопку, если не на первом слайде
          }
      },
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 1.5,
      },
      769: {
        slidesPerView: 2.5,
      },
      993: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      }
    }
  });

  if (swiper.activeIndex === 0) {
    document.querySelector('.support__swiper-button-prev').style.display = 'none';
  } else {
    document.querySelector('.support__swiper-button-prev').style.display = 'block';
  }

});
