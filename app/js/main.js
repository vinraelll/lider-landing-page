// import Swiper from 'swiper'; 
// не работает импорт модуля //

const newsSlider = new Swiper('.news__swiper', {
  slidesPerView: 3,
  speed: 400,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
})

const offersSlider = new Swiper('.offers__swiper', {
  direction: 'vertical',
  slidesPerView: 3,
  speed: 400,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
})