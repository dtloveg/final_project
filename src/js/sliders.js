import Swiper from 'swiper/bundle'
window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper

    breakpoint = window.matchMedia(breakpoint)

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings)
    }

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings)
      } else {
        if (swiper !== undefined) swiper.destroy(true, true)
        return
      }
    }

    breakpoint.addEventListener('change', checker)
    checker()
  }

  resizableSwiper('(max-width: 768px)', '.equipment-list__swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    centeredSlides: false,
    loop: false,
    freeMode: false,
    grabCursor: true,

    pagination: {
      el: '.equipment-list__swiper-pagination',
      clickable: true
    }
  })
  resizableSwiper('(max-width: 768px)', '.brand-list__swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    centeredSlides: false,
    loop: false,
    freeMode: false,
    grabCursor: true,

    pagination: {
      el: '.brand-list__swiper-pagination',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 768px)', '.price-list__swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    centeredSlides: false,
    loop: false,
    freeMode: false,
    grabCursor: true,

    pagination: {
      el: '.price-list__swiper-pagination',
      clickable: true
    }
  })
})

let equipments = document.querySelector('.equipment-list__swiper-wrapper')
let showMoreEL = document.querySelector('.equipment-list__button-show-more')

let isShow = false
showMoreEL.addEventListener('click', function () {
  if (!isShow) {
    equipments.classList.add('equipment-list__swiper-wrapper--hidden')
    showMoreEL.classList.add('equipment-list__button-show-more--clicked')
    showMoreEL.textContent = 'Скрыть'

    isShow = true
  } else {
    equipments.classList.remove('equipment-list__swiper-wrapper--hidden')
    showMoreEL.classList.remove('equipment-list__button-show-more--clicked')
    isShow = false
    showMoreEL.textContent = 'Показать все'
  }
})

let brands = document.querySelector('.brand-list__swiper-wrapper')
let showMoreBL = document.querySelector('.brand-list__button-show-more')

let isShowBL = false
showMoreBL.addEventListener('click', function () {
  if (!isShowBL) {
    brands.classList.add('brand-list__swiper-wrapper--hidden')
    showMoreBL.classList.add('brand-list__button-show-more--clicked')
    showMoreBL.textContent = 'Скрыть'

    isShowBL = true
  } else {
    brands.classList.remove('brand-list__swiper-wrapper--hidden')
    showMoreBL.classList.remove('brand-list__button-show-more--clicked')
    isShowBL = false
    showMoreBL.textContent = 'Показать все'
  }
})

function handleMouseClick(event) {
  console.log('Вы нажали на элемент:', event.target)
}

window.addEventListener('click', handleMouseClick)
window.addEventListener('click', handleMouseClick, true)
window.addEventListener('click', handleMouseClick, false)
window.addEventListener('click', handleMouseClick, {
  passive: true,
  capture: false
})
