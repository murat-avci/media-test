/* eslint no-console: "error" */

'use strict';

const userAccount = document.querySelector('.main-nav__user-link');
const modal = document.querySelector('.modal');
const modalClose = modal.querySelector('.modal__close');
// const container = document.querySelector('.container');
const bodyShade = document.querySelector('.body-shade');

userAccount.addEventListener('click', function () {
  modal.classList.add('modal--show');
  if (bodyShade) {
    bodyShade.style.display = 'block';
  } else {
    bodyShade.style.display = 'none';
  }
});

modalClose.addEventListener('click', function () {
  modal.classList.remove('modal--show');
  bodyShade.style.display = 'none';
});
