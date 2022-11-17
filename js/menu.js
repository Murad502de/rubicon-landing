const openMenu = () => {
  document.querySelector('.menu').classList.add('menu_open-over');
  document.querySelector('.menu').classList.add('menu_open');
  // document.querySelector('.navbar--menu__icon').classList.add('navbar--menu__icon_open');
}
const closeMenu = () => {
  document.querySelector('.menu').classList.remove('menu_open');
  // document.querySelector('.navbar--menu__icon').classList.remove('navbar--menu__icon_open');

  setTimeout(() => {
    document.querySelector('.menu').classList.remove('menu_open-over');
  }, 500);
}