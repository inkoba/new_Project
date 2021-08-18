import "../styles/scss/main.scss";
import { swiperThreeProduct } from "../components/swiperSetTimeout";

const Basket = () => {
  swiperThreeProduct();
  const view = `
  <div>
    <h1>Ваша корзина пуста</h1>
    <div class="mainly">
    
    <div class="empty-cart">
        <img src="./images/empty-cart.jpg">
    </div>

    <div class="brends">
    
      <div class="wrapper-special-products">
        <div class="special-products-head">
        <div class="h2 special-products-title">Новое поступление</div>
      </div>
    </div>
  <div class="swiper-container mySwiper1">
    <div class="swiper-wrapper" id="generationSwiper"></div>
  </div>

  </div>
`;
  return view;
};

export default Basket;