import "../styles/scss/collection.scss";
import regeneratorRuntime from "regenerator-runtime";
import { swiperThreeProduct } from "../components/swiperSetTimeout";

const Collection = () => {
    swiperThreeProduct();
    const view = `
        <div>
            <h1>Collection</h1>
        </div>

        <div class="mainly">
 
            <div class="content-catalog">
                <ul class="collection-menu">
                    <li class="collection-menu-title">
                        <a class="collection-menu-foto">
                         <img src="../images/mini_image/m1.jpg">
                        </a>

                        <div class="collection-menu-submenu">КЛАССИЧЕСКАЯ КОЛЛЕКЦИЯ</div>

                        <ul class="collection-submenu">
                            <li class="collection-submenu-title">
                                <a class="active" href="#">Бюстгалтеры</a>
                                <a href="#">Трусы</a>
                                <a href="#">Комплекты</a>
                                <a href="#">Аксессуары</a>
                            </li>
                        </ul>
                    </li>
                </ul>
        

                    <ul class="collection-menu">
                    <li class="collection-menu-title">
                        <a class="collection-menu-foto">
                        <img src="../images/mini_image/m2.jpg">
                        </a>

                        <div class="collection-menu-submenu">МОДНАЯ КОЛЛЕКЦИЯ</div>

                        <ul class="collection-submenu">
                        <li class="collection-submenu-title">
                            <a class="active" href="#">Бюстгалтеры</a>
                            <a href="#">Трусы</a>
                            <a href="#">Комплекты</a>
                            <a href="#">Аксессуары</a>
                        </li>
                        </ul>
                    </li>
                    </ul>

                <ul class="collection-menu">
                    <li class="collection-menu-title">
                    <a class="collection-menu-foto">
                    <img src="../images/mini_image/m3.jpg">
                    </a>

                    <div class="collection-menu-submenu">ACCENT</div>

                    <ul class="collection-submenu">
                        <li class="collection-submenu-title">
                        <a class="active" href="#">Бюстгалтеры</a>
                        <a href="#">Трусы</a>
                        <a href="#">Комплекты</a>
                        <a href="#">Аксессуары</a>
                        </li>
                    </ul>
                    </li>
                </ul>


                <ul class="collection-menu">
                    <li class="collection-menu-title">
                        <a class="collection-menu-foto">
                        <img src="../images/mini_image/m8.jpg">
                        </a>

                        <div class="collection-menu-submenu">КУПАЛЬНИКИ</div>

                        <ul class="collection-submenu">
                        <li class="collection-submenu-title">
                            <a class="active" href="#">Бюстгалтеры</a>
                            <a href="#">Трусы</a>
                            <a href="#">Комплекты</a>
                            <a href="#">Аксессуары</a>
                        </li>
                        </ul>
                    </li>
                    </ul>


                    <ul class="collection-menu">
                    <li class="collection-menu-title">
                        <a class="collection-menu-foto">
                        <img src="../images/mini_image/m6.jpg">
                        </a>

                        <div class="collection-menu-submenu">ТРИКОТАЖНАЯ КОЛЛЕКЦИЯ</div>

                        <ul class="collection-submenu">
                        <li class="collection-submenu-title">
                            <a class="active" href="#">Бюстгалтеры</a>
                            <a href="#">Трусы</a>
                            <a href="#">Комплекты</a>
                            <a href="#">Аксессуары</a>
                        </li>
                        </ul>
                    </li>
                    </ul>


                    <ul class="collection-menu">
                    <li class="collection-menu-title">
                        <a class="collection-menu-foto">
                        <img src="../images/mini_image/m4.jpg">
                        </a>

                        <div class="collection-menu-submenu">BODY ART INNOVATION</div>

                        <ul class="collection-submenu">
                        <li class="collection-submenu-title">
                            <a class="active" href="#">Бюстгалтеры</a>
                            <a href="#">Трусы</a>
                            <a href="#">Комплекты</a>
                            <a href="#">Аксессуары</a>
                        </li>
                        </ul>
                    </li>
                    </ul>

            </div>
  


    
  
            <div class="wrapper-special-products">
              <div class="special-products-head">
              <div class="h2 special-products-title">Новое поступление</div>
            </div>
    
            <div class="swiper-container mySwiper1">
                <div class="swiper-wrapper" id="generationSwiper"></div>
            </div>
  
        
        </div>
    </div>
`;
    return view;
};

export default Collection;