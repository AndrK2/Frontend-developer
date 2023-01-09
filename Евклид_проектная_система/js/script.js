// slider
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// tabs
const tabsBtn = document.querySelectorAll('.tabs-list__btn');
const tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(el => {
  el.addEventListener('click', (e) => {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(el => el.classList.remove('tabs-list__btn--active'));
    e.currentTarget.classList.add('tabs-list__btn--active');

    tabsItem.forEach(el => el.classList.remove('tabs-item--active'));
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

// accordion
$(function() {
  $('.faq__list').accordion();
});

// burger
const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav__list');

burger.addEventListener('click', () => {
  if (!burger.classList.contains('burger--close')) {
    document.body.style.overflow = 'hidden';
    burger.classList.add('burger--close');
    menu.classList.add('nav__list--visible');
  } else {
    document.body.style.overflow = 'initial';
    burger.classList.remove('burger--close');
    menu.classList.remove('nav__list--visible');
  }
});
