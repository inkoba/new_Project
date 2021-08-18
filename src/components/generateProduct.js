import { getAllTasks } from "../utils/getDataLocal";



const generateProduct = async (allTasks) => {
  allTasks = allTasks || await getAllTasks();
  const searchTasks = document.querySelector('#generationProduct');
  searchTasks.innerHTML = '';
  allTasks.forEach((task) => {
    searchTasks.innerHTML += `
          <div class="product-name"><h1>${task.shortSummary}</h1></div>
          
          <div class="product-title">
            <div class="product-foto"><img src="${task.large - img}"></div>
            <div class="product-info">
              
              <div class="product-discription"><div>${task.description}</div></div>
              <div class="product-model"><div>Модель: ${task.model}</div></div>
              <div class="product-size"><div>Размеры: ${task.size}</div></div>
              
              <div class="product-preview-title">
          
                  <div class="product-preview-price">
                    <span class="product-preview-price-span">Цена: ${task.price} ${task.currency}</span>
                  </div>
                
                  <div class="product-preview-btn">
                    <button data-id="" type="button" class="product-preview-btn-title flex-btn" style="width: 150px;">
                      В корзину
                      <span class="icon icon-cart margin-preview"></span>
                    </button>
                  </div>
              </div>
            </div>
          </div>
  
    `
  })
};

export default generateProduct;