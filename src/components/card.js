const cardOpen = () => {

  const productsBtn = document.querySelectorAll('.product-preview-btn');  //кнопки продуктов
  const cartProductsList = document.querySelector('.cart-content__list"'); //список куда код будет генерироваться
  const cart = document.querySelector('#basketbtn"'); //корзина
  const cartQuantity = document.querySelector('.header-cart-empty');// нолик сверху количество
  const fullPriceMenu = document.querySelector('.fullprice-menu'); // ноль сбоку сумма
  const fullPrice = document.querySelector('.fullprice'); // ноль в сгенерированом окне (цена)
  let price = 0;


  console.log(productsBtn)
  console.log(cartProductsList)
  console.log(cart)
  console.log(cartQuantity)
  console.log(fullPriceMenu)
  console.log(fullPrice)
  console.log(fullPrice)
  console.log()

  /*  const randomId = () => {
     return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
   }; */

  const priceWithoutSpaces = (str) => {
    return str.replace(/\s/g, '');
  };

  const normalPrice = (str) => {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  };

  const plusFullPrice = (currentPrice) => {
    return price += currentPrice;
  };

  const minusFullPrice = (currentPrice) => {
    return price -= currentPrice;
  };

  const printQuantity = () => {
    let productsListLength = cartProductsList.querySelector('.simplebar-content').children.length;
    cartQuantity.textContent = productsListLength;
    productsListLength > 0 ? cart.classList.add('active') : cart.classList.remove('active');
  };

  const printFullPrice = () => {
    fullPrice.textContent = `${normalPrice(price)} ₽`;
  };

  const generateCartProduct = (img, shortSummary, price, id) => {
    return `
        <li class="cart-content__item">
          <article class="cart-content__product cart-product" data-id="${id}">
            <img src="${img}" alt="" class="cart-product__img">
            <div class="cart-product__text">
              <h3 class="cart-product__title">${shortSummary}</h3>
              <span class="cart-product__price">${normalPrice(price)} ${currency}</span>
            </div>
            <button class="cart-product__delete" aria-label="Удалить товар"></button>
          </article>
        </li>
      `;
  };

  const deleteProducts = (productParent) => {
    let id = productParent.querySelector('.cart-product').dataset.id;
    document.querySelector(`.product[data-id="${id}"]`).querySelector('.product__btn').disabled = false;

    let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.cart-product__price').textContent));
    minusFullPrice(currentPrice);
    printFullPrice();
    productParent.remove();

    printQuantity();
  };

  productsBtn.forEach(el => {
    el.closest('.product').setAttribute('data-id', randomId());

    el.addEventListener('click', (e) => {
      let self = e.currentTarget;
      let parent = self.closest('.product');
      let id = parent.dataset.id;
      let img = parent.querySelector('.image-switch__img img').getAttribute('src');
      let title = parent.querySelector('.product__title').textContent;
      let priceString = priceWithoutSpaces(parent.querySelector('.product-price__current').textContent);
      let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.product-price__current').textContent));

      plusFullPrice(priceNumber);

      printFullPrice();

      cartProductsList.querySelector('.simplebar-content').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceString, id));
      printQuantity();


      self.disabled = true;
    });
  });

  cartProductsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('cart-product__delete')) {
      deleteProducts(e.target.closest('.cart-content__item'));
    }
  });


  const products = document.querySelectorAll('.product');

  if (products) {
    products.forEach(el => {
      let currentProduct = el;
      const imageSwitchItems = currentProduct.querySelectorAll('.image-switch__item');
      const imagePagination = currentProduct.querySelector('.image-pagination');
      if (imageSwitchItems.length > 1) {
        imageSwitchItems.forEach((el, index) => {
          el.setAttribute('data-index', index);
          imagePagination.innerHTML += `<li class="image-pagination__item ${index == 0 ? 'image-pagination__item--active' : ''}" data-index="${index}"></li>`;
          el.addEventListener('mouseenter', (e) => {
            currentProduct.querySelectorAll('.image-pagination__item').forEach(el => { el.classList.remove('image-pagination__item--active') });
            currentProduct.querySelector(`.image-pagination__item[data-index="${e.currentTarget.dataset.index}"]`).classList.add('image-pagination__item--active');
          });

          el.addEventListener('mouseleave', (e) => {
            currentProduct.querySelectorAll('.image-pagination__item').forEach(el => { el.classList.remove('image-pagination__item--active') });
            currentProduct.querySelector(`.image-pagination__item[data-index="0"]`).classList.add('image-pagination__item--active');
          });
        });
      }
    });
  }
}

export { cardOpen };