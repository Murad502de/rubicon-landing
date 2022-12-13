let sliderInterval = null;

const setSlide = (slide) => {
  resetSliderInterval();

  document.querySelectorAll('.slider__label').forEach((item) => {
    if (Number(slide) === Number(item.getAttribute('id'))) {
      item.classList.add('slider__label_clicked');
    } else {
      item.classList.remove('slider__label_clicked');
    }
  });

  setSliderInterval();
};
const setSlideAutomatic = () => {
  let count = document.querySelectorAll('.slider__label').length;
  let active = document.querySelector('.slider__label_clicked');

  if (active && Number(active.getAttribute('id')) < count) {
    document.querySelector(`label[for="slide-${Number(active.getAttribute('id')) + 1}"]`).click();
  } else {
    document.querySelectorAll('.slider__label')[0].click();
  }
};
const setSliderInterval = () => {
  sliderInterval = setInterval(setSlideAutomatic, 5000);
};
const resetSliderInterval = () => {
  clearInterval(sliderInterval);
};
const setNextSlide = () => {
  resetSliderInterval();

  let count = document.querySelectorAll('.slider__label').length;
  let active = document.querySelector('.slider__label_clicked');

  if (active && Number(active.getAttribute('id')) < count) {
    document.querySelector(`label[for="slide-${Number(active.getAttribute('id')) + 1}"]`).click();
  } else {
    document.querySelectorAll('.slider__label')[0].click();
  }

  setSliderInterval();
};
const setPrevtSlide = () => {
  resetSliderInterval();

  let count = document.querySelectorAll('.slider__label').length;
  let active = document.querySelector('.slider__label_clicked');

  if (active && Number(active.getAttribute('id')) > 1) {
    document.querySelector(`label[for="slide-${Number(active.getAttribute('id')) - 1}"]`).click();
  } else {
    document.querySelector(`label[for="slide-${count}"]`).click();
  }

  setSliderInterval();
};