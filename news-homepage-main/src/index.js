const menuOpenIcon = document.querySelector('.menu-open-icon');
const body = document.querySelector('body');
const menuCloseIcon = document.querySelector('.menu-close-icon');
const menu = document.querySelector('header .menu');
menuOpenIcon.addEventListener('click', () => {
  menu.style.display = 'flex';
  body.style.overflow = 'hidden';
});

menuCloseIcon.addEventListener('click', () => {
  menu.style.display = 'none';
  body.style.overflow = 'auto';
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 600) {
    menu.style.display = 'none';
    body.style.overflow = 'auto';
  }
});
