import { getAllTasks } from "../utils/getDataLocal";


const generateImg = async (allTasks) => {
  allTasks = allTasks || await getAllTasks();
  const searchTasks = document.querySelector('#generationSwiper');
  searchTasks.innerHTML = '';
  allTasks.forEach((task) => {
    searchTasks.innerHTML += `
          <div class="wrapper-product swiper-slide">
            <div class="product-preview-img">
              <a href="/#/${task.id}">
                <img src="${task.largeImg1}">
              </a>
            </div>

            <div class="product-preview-title">
          
              <div class="product-preview-price">
                <span class="product-preview-price-span">${task.price} ${task.currency}</span>
              </div>
            
              <div class="product-preview-btn">
                <button data-id="${task.id}" type="button" class="product-preview-btn-title flex-btn">
                  В корзину
                  <span class="icon icon-cart margin-preview"></span>
                </button>
              </div>
            </div>
          </div>

          <div class="wrapper-product swiper-slide">
            <div class="product-preview-img">
              <a href="/#/${task.id}">
                <img src="${task.largeImg2}">
              </a>
            </div>

            <div class="product-preview-title">
          
              <div class="product-preview-price">
                <span class="product-preview-price-span">${task.price} ${task.currency}</span>
              </div>
            
              <div class="product-preview-btn">
                <button data-id="${task.id}" type="button" class="product-preview-btn-title flex-btn">
                  В корзину
                  <span class="icon icon-cart margin-preview"></span>
                </button>
              </div>
            </div>
          </div>
    `
  })
};


/* const generateImgProduct = async (allTasks) => {
  allTasks = allTasks || await getAllTasks();
  const searchTasks = document.querySelector('#generationSwiper');
  searchTasks.innerHTML = '';
  allTasks.forEach((task) => {
    searchTasks.innerHTML += `
          <div class="wrapper-product swiper-slide">
  })
}; */

export default generateImg;