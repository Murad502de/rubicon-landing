const openMenu = () => {
  document.querySelector('.menu').classList.add('menu_open-over');
  document.querySelector('.menu').classList.add('menu_open');
}
const closeMenu = () => {
  document.querySelector('.menu').classList.remove('menu_open');

  setTimeout(() => {
    document.querySelector('.menu').classList.remove('menu_open-over');
  }, 500);
}