const onCardClicked = (card) => {
  document.querySelector(`.card__${card}`).classList.add('card_clicked');

  setTimeout(() => {
    document.querySelector(`.card__${card}`).classList.remove('card_clicked');

    if (card === 'wildberries') {
      window.location = "https://www.wildberries.ru/seller/1205506"
    }
    if (card === 'ozon') {
      window.location = "https://www.ozon.ru/seller/rubicon-jeans-938884/products"
    }
  }, 200);
};