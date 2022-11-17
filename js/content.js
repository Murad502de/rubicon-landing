const scrollContent = debounce((e) => {
  let content = document.querySelectorAll('.container__content-wrapper')[0];
  const scrollHeight = Number(content.scrollHeight);
  const scrollTop = Number(content.scrollTop);
  const offsetHeight = Number(content.offsetHeight)
  const scrolled = scrollTop + offsetHeight;
  const deltaY = Number(e.deltaY);

  if (deltaY) {
    console.debug('scrollContent', deltaY, scrollTop, offsetHeight, `${scrolled} : ${scrollHeight}`); //DELETE

    if (deltaY > 0) {

      if ((scrolled >= scrollHeight || !scrollTop)) {
        console.debug('PREV'); //DELETE
        setNextSlide();
      }
    } else {
      if ((scrolled >= scrollHeight || !scrollTop)) {
        console.debug('NEXT'); //DELETE
        setPrevtSlide();
      }
    }
  }
}, 400);