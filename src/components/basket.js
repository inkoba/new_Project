/* const sendInBasket = (id) => {

} */


/* const changeCounter = (trigger) => {
  for (let elem of trigger) {
    elem.onclick = () => {
      let elemCurrent = document.querySelector(".header-cart-empty");
      elem.innerHTML += Number(elemCurrent) + 1;
    }
  }
}


export { /* sendInBasket */ /*changeCounter };
 */

import { getAllTasks } from "../utils/getDataLocal";

const openBasketBox = () => {
  const basketContainer = document.querySelector('#basket-box aside');
  basketContainer.classList.add('show-box');
}

const closeBasketBox = () => {
  const basketContainer = document.querySelector('#basket-box aside');
  basketContainer.classList.remove('show-box');
}

const displayBasketTasks = async (allTasks) => {
  allTasks = allTasks || await getAllTasks();
  const basketTasks = document.querySelector('#basketList');
  basketTasks.innerHTML = '';
  allTasks.forEach((task) => {
    basketTasks.innerHTML += `
    <div class="wrapper-product">
    <div class="product-preview-img">
      <img src="${task.img}">
    </div>

    <div class="product-preview-title">
  
      <div class="product-preview-price">
        <span class="product-preview-price-span">${task.price} ${task.currency}</span>
      </div>
    
      <div class="product-preview-btn">
        <button data-id="${task.id}" type="button" class="product-preview-btn-title flex-btn">
          Купить
          <span class="icon icon-cart margin-preview"></span>
        </button>
      </div>
    </div>
  </div>
          
    `
  })
}


export { openBasketBox, closeBasketBox, displayBasketTasks };