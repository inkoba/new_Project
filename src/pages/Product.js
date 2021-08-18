import "../styles/scss/main.scss";
import { getProduct } from "../utils/getDataLocal";
import getHash from "../utils/getHash";
import regeneratorRuntime from "regenerator-runtime";
import { swiperThreeProduct } from "../components/swiperSetTimeout";


const Product = async () => {

  const id = getHash();
  const product = await getProduct(id);
  swiperThreeProduct();
  const view = `
    <div class="mainly">
        <div class="wrapper-products" id="generationProduct">
        <div class="product-name"><h1>${product.shortSummary}</h1></div>
          
        <div class="product-title">
          <div class="product-foto"><img src="${product.largeImg1}"></div> 
          
          <div class="product-info">
      
            <div class="product-discription"><div>${product.description}</div></div>
            <div class="product-model"><div>Модель: ${product.model}</div></div>
            <div class="product-size"><div>Размеры: ${product.size}</div></div>
            
            <div class="product-preview-title">
        
                <div class="product-preview-price">
                  <span class="product-preview-price-span">Цена: ${product.price} ${product.currency}</span>
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
              </div>

          <div class="brends">
  
            <div class="wrapper-special-products">
              <div class="special-products-head">
              <div class="h2 special-products-title">Новое поступление</div>
            </div>
    
        <div class="swiper-container mySwiper1">
          <div class="swiper-wrapper" id="generationSwiper"></div>
        </div>
        
    </div>
  `;
  return view;
};

export default Product;