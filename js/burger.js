const onBurgerClicked = () => {
  document.querySelector('div[id="nav-icon1"]').classList.toggle('open');

  if (document.querySelector('div[id="nav-icon1"]').classList.contains('open')) {
    openMenu();
  } else {
    closeMenu();
  }
};