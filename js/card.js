const onCardClicked = (card) => {
  document.querySelector(`.card__${card}`).classList.add('card_clicked');

  setTimeout(() => {
    document.querySelector(`.card__${card}`).classList.remove('card_clicked');

    if (card === 'wildberries') {
      window.open('https://www.wildberries.ru/seller/1205506', '_blank').focus();
    }
    if (card === 'ozon') {
      window.open('https://www.ozon.ru/seller/rubicon-jeans-938884/products', '_blank').focus();
    }
  }, 200);
};