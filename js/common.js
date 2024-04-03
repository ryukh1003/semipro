const allA = document.querySelectorAll('a');

allA.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
  });
});

let Swiper4 = new Swiper('.Swiper4', {
  slidesPerView: 1,
  loop: true,

  breakpoints: {
    1400: {
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 30,
      loop: true,
    },
  },
});

const Swiper5 = new Swiper('.Swiper5, .Swiper6', {
  slidesPerView: 1,
  loop: true,

  breakpoints: {
    1400: { slidesPerView: 6 },
    1200: { slidesPerView: 5 },
    1000: { slidesPerView: 4 },
    800: { slidesPerView: 3 },
    500: { slidesPerView: 2 },
  },
});

const header = document.querySelector('header');
const logoImg = document.querySelector('.logoImg');
const maxW = window.matchMedia('(max-width: 1100px)');

window.addEventListener('scroll', function () {
  if (window.innerWidth <= 600) {
    header.classList.add('on');
    logoImg.classList.add('on');
  } else {
    if (window.scrollY > 0) {
      header.classList.add('on');
      logoImg.classList.add('on');
    } else {
      header.classList.remove('on');
      logoImg.classList.remove('on');
    }
  }
});

window.addEventListener('resize', function () {
  if (maxW.matches) {
    header.classList.add('on');
    logoImg.classList.add('on');
  } else {
    header.classList.remove('on');
    logoImg.classList.remove('on');
  }
});

const sec8 = document.querySelector('.sec8');
const tb8 = document.querySelector('.textBox8');

window.addEventListener('scroll', function () {
  let sec8Rect = sec8.getBoundingClientRect();
  let sec8Top = sec8Rect.top;
  let sec8Height = sec8Rect.height;
  let windowHeight = window.innerHeight;

  if (
    sec8Top + sec8Height / 2 >= 0 &&
    sec8Top + sec8Height / 2 <= windowHeight
  ) {
    tb8.classList.add('on');
  }
});

const modalBtn = document.querySelector('.modalBtn');
const modal = document.querySelector('.searchModal');
const closeBtn = document.querySelector('.closeBtn');

modalBtn.addEventListener('click', function () {
  modal.classList.toggle('on');
});

closeBtn.addEventListener('click', function () {
  modal.classList.toggle('on');
});

const hamBtn = document.querySelector('.hamBtn');
const modalBack = document.querySelector('.modalBack');
const hamModal = document.querySelector('.hamModal');
const closeHam = document.querySelector('.closeHam');

hamBtn.addEventListener('click', function () {
  modalBack.classList.add('on');
  hamModal.classList.add('on');
});

closeHam.addEventListener('click', function () {
  modalBack.classList.toggle('on');
  hamModal.classList.toggle('on');
});

modalBack.addEventListener('click', function (event) {
  if (event.target === modalBack) {
    modalBack.classList.remove('on');
    hamModal.classList.remove('on');
  }
});
