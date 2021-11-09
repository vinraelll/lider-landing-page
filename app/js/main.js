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

// бургер меню

const burgerBtn  = document.querySelector('.burger__btn')
const burgerMenu = document.querySelector('.menu')
const body = document.body

burgerBtn.addEventListener('click', burgerMenuHandler) 

function burgerMenuHandler(e) {
  burgerBtn.classList.toggle('active')
  burgerMenu.classList.toggle('active')
  body.classList.toggle('scrollLock')
}

function closeBurgerMenu(e) {
  if (e.target !== burgerMenu) {
    burgerMenu.classList.remove('active')
  }
}

burgerMenu.addEventListener('click', e => {
  if (e.target.classList.contains('menu__link')) {
    burgerMenuHandler()
    
  }
})