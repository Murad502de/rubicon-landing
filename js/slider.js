const setSlide = (slide) => {
  console.debug(slide);

  document.querySelectorAll('.slider__label').forEach((item) => {
    if (Number(slide) === Number(item.getAttribute('id'))) {
      item.classList.add('slider__label_clicked');
    } else {
      item.classList.remove('slider__label_clicked');
    }
  });
};
const setSlideAutomatic = () => {
  let count = document.querySelectorAll('.slider__label').length;
  let active = document.querySelector('.slider__label_clicked');

  if (active && Number(active.getAttribute('id')) < count) {
    console.debug('have');

    document.querySelector(`label[for="slide-${Number(active.getAttribute('id')) + 1}"]`).click();
  } else {
    console.debug('dont have');
    document.querySelectorAll('.slider__label')[0].click();
  }
};