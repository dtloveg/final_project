let mobile = document.querySelector('.mobile-navigation')
let mobileBlur = document.querySelector('.mobile-navigation__blur')
let burger = document.querySelector('.action-button--burger')
let closing = document.querySelector('.mobile-navigation__header-button--close')

burger.addEventListener('click', function () {
  mobile.classList.add('mobile-navigation--opened')
  mobileBlur.classList.add('mobile-navigation__blur--open')
})
closing.addEventListener('click', function () {
  mobile.classList.remove('mobile-navigation--opened')
  mobileBlur.classList.remove('mobile-navigation__blur--open')
})

let call = document.querySelector('.modal-call')
let feedback = document.querySelector('.modal-feedback')
let openCall = document.querySelector('.mobile-navigation__button--call')
let openFeedback = document.querySelector('.mobile-navigation__button--chat')
let callBlur = document.querySelector('.modal-call__blur')
let feedbackBlur = document.querySelector('.modal-feedback__blur')

let closeCall = document.querySelector('.modal-call__button-close')
let closeFeedback = document.querySelector('.modal-feedback__button-close')

openCall.addEventListener('click', function () {
  call.classList.add('modal-call--opened')
  callBlur.classList.add('modal-call__blur--open')
})
openFeedback.addEventListener('click', function () {
  feedback.classList.add('modal-feedback--opened')
  feedbackBlur.classList.add('modal-feedback__blur--open')
})
closeCall.addEventListener('click', function () {
  call.classList.remove('modal-call--opened')
  callBlur.classList.remove('modal-call__blur--open')
})

closeFeedback.addEventListener('click', function () {
  feedback.classList.remove('modal-feedback--opened')
  feedbackBlur.classList.remove('modal-feedback__blur--open')
})
