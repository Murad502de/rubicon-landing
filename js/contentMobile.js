const MOB_NEXT = 'next';
const MOB_PREV = 'prev';

let xDown = null;
let yDown = null;

function getTouches(evt) {
  return evt.touches;
}
function getMobileChangeDirection(scrollTop, scrolled, scrollHeight) {
  if (!scrollTop) {
    return MOB_PREV;
  }

  if (scrolled >= scrollHeight) {
    return MOB_NEXT;
  }

  return null;
}
function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];

  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
};
function handleTouchEnd(evt) {
  const content = document.querySelectorAll('.container__content-wrapper')[0];
  const scrollHeight = Number(content.scrollHeight);
  const scrollTop = Number(content.scrollTop);
  const offsetHeight = Number(content.offsetHeight)
  const scrolled = scrollTop + offsetHeight;

  if (scrolled >= scrollHeight || !scrollTop) {
    switch (getMobileChangeDirection(scrollTop, scrolled, scrollHeight)) {
      case MOB_NEXT:
        setNextSlide();
        break;

      case MOB_PREV:
        setPrevtSlide();
        break;

      default:
        break;
    }
  }
};
function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  let xUp = evt.touches[0].clientX;
  let yUp = evt.touches[0].clientY;
  let xDiff = xDown - xUp;
  let yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
    } else {
    }
  } else {
    if (yDiff > 0) {
    } else {
    }
  }

  xDown = null;
  yDown = null;
};