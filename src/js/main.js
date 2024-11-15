//открытие-закрытие mobile-navigation
let mobile = document.querySelector('.mobile-navigation__container')
let mobileBlur = document.querySelector('.mobile-navigation__blur')
let burger = document.querySelector('.action-button--burger')
let closing = document.querySelector('.mobile-navigation__header-button--close')

burger.addEventListener('click', function () {
  mobile.classList.add('mobile-navigation__container--opened')
  mobileBlur.classList.add('mobile-navigation__blur--open')
})
closing.addEventListener('click', function () {
  mobile.classList.remove('mobile-navigation__container--opened')
  mobileBlur.classList.remove('mobile-navigation__blur--open')
})

mobileBlur.addEventListener('click', function () {
  mobile.classList.remove('mobile-navigation__container--opened')
  mobileBlur.classList.remove('mobile-navigation__blur--open')
})

//открытие-закрытие модалок "заказать звонок", "обратная связь"
let call = document.querySelector('.modal-call__container')
let feedback = document.querySelector('.modal-feedback__container')
let openCall = document.querySelectorAll('.action-button--call')
let openFeedback = document.querySelectorAll('.action-button--chat')
let callBlur = document.querySelector('.modal-call__blur')
let feedbackBlur = document.querySelector('.modal-feedback__blur')

let closeCall = document.querySelector('.modal-call__button-close')
let closeFeedback = document.querySelector('.modal-feedback__button-close')

openCall.forEach(function (btn) {
  btn.addEventListener('click', function () {
    call.classList.add('modal-call__container--opened')
    callBlur.classList.add('modal-call__blur--open')
  })
})

openFeedback.forEach(function (btn) {
  btn.addEventListener('click', function () {
    feedback.classList.add('modal-feedback__container--opened')
    feedbackBlur.classList.add('modal-feedback__blur--open')
  })
})

closeCall.addEventListener('click', function () {
  call.classList.remove('modal-call__container--opened')
  callBlur.classList.remove('modal-call__blur--open')
})

closeFeedback.addEventListener('click', function () {
  feedback.classList.remove('modal-feedback__container--opened')
  feedbackBlur.classList.remove('modal-feedback__blur--open')
})

callBlur.addEventListener('click', function () {
  call.classList.remove('modal-call__container--opened')
  callBlur.classList.remove('modal-call__blur--open')
})

feedbackBlur.addEventListener('click', function () {
  feedback.classList.remove('modal-feedback__container--opened')
  feedbackBlur.classList.remove('modal-feedback__blur--open')
})
