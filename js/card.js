const onCardClicked = (card) => {
  document.querySelector(`.card__${card}`).classList.add('card_clicked');

  setTimeout(() => {
    document.querySelector(`.card__${card}`).classList.remove('card_clicked');
  }, 1000);
};