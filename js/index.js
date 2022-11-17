window.onload = (event) => {
  setSliderInterval();
  document.addEventListener('wheel', scrollContent);
  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchend', handleTouchEnd, false);
  document.addEventListener('touchmove', handleTouchMove, false);
};