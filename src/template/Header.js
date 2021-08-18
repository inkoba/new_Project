
const Header = () => {
  const view = `
  <header>
    <div class="header">
      <div class="header-content">

        <div class="burger">
          <span></span>
        </div>
            
        <div class="menu header-area-menu">
          <ul class="header-menu-burger">
            <ul class="new-title-burger">
              <li>
                <div class="header-search-burger">
                  <form class="header-search-form" method="GET">
                    <input type="text" value="Поиск" class="header-search-field">
                    <button type="submit" class="btn header-btn-search">
                      <span class="icon icon-search-1"></span>
                    </button>
                  </form>
                </div>
              </li>
              
              <li><span class="icon icon-user icon-hover"></span></li>
              
              <li><span class="icon icon-compare icon-hover">
                <span class="header-cart-empty">0</span>
                </span>
              </li>
            </ul>
            <li class="header-menu-item"><a href="/#">Главная</a></li>
            <li class="header-menu-item" id="catalog1"><a href="/#/collection">Коллекции</a></li>
            <li class="header-menu-item"><a href="/#/contacts">Контакты</a></li>
            <li class="header-menu-item"><a href="/#/1">Товар</a></li>
            <li class="header-menu-item"><a href="/#feedback">Отзыв</a></li>
          </ul>
        </div>
            
        <div class="header-content-top">
          <div class="mainly"></div>
            
          <div class="header-content-top-inner">

              <div class="header-area-menu">
                <ul class="header-menu">
                  <li class="header-menu-item"><a href="/#">Главная</a></li>
                  <li class="header-menu-item" id="catalog"><a href="/#/collection">Коллекции</a></li>
                  <li class="header-menu-item"><a href="/#/contacts">Контакты</a></li>
                  <li class="header-menu-item"><a href="/#/1">Товар</a></li>
                  <li class="header-menu-item"><a href="/#feedback">Отзыв</a></li>
                </ul>
              </div>

              <div class="header-area-text">
                <div class="header-work-time">Врем работы с 10:00 - 15:00</div>
              </div>

              <div class="header-area-contacts">
                <div class="header-phone">
                  <a class="header-phone-value" href="tel:+375295592071">+375(29)55-92-071</a>
                </div>
              </div>

              <div class="header-area-language">
                <div class="header-area-language">
                  <a href="?lang=ru" class="header-language is-active">RU</a>
                  <a href="?lang=en" class="header-language ">EN</a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="header-content-bottom">
          <div class="mainly">
            <div class="header-content-bottom-inner">

              <div class="header-area-logo">
                <span header-logo>
                  <img class="logo-img" src="../images/logo/bigLogo.svg">
                </span>
              </div>

              <div class="header-area-catalog">
                <button type="button" class="btn header-btn-catalog">
                  <span class="icon icon-menu"></span>
                  Каталог
                </button>
              </div>

              <!--<div class="header-area-search">-->
                <div class="header-search">
                  <form class="header-search-form" method="GET">
                    <input type="text" value="Поиск" class="header-search-field">
                    <button type="submit" class="btn header-btn-search">
                      <span class="icon icon-search-1"></span>
                    </button>
                  </form>
                </div>
              <!--</div>-->

              <div class="header-area-controls">
              
                  <span class="icon icon-user icon-hover"></span>
               
               
                  <span class="icon icon-compare icon-hover">
                    <span class="header-cart-empty">0</span>
                  </span>
              
               
                  <a href="/#/basket">
                    <span class="icon icon-cart icon-hover id="basketBtn">
                      <span class="header-cart-empty">0</span>
                    </span></a>
                  <span class="fullprice-menu">0&nbsp; руб</span>
                
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Create Modal-->
    
      <div class="catalog hide">
        <div class="section-catalog">
          <div class="close-btn-menu">
            <span class="icon icon-cancel close-span-menu"></span>
          </div>      
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
          </div>
      </div>


      <!--Seach Modal-->
    
      <div id="search-box">
        <aside>
         
         <div class="search-container">
          <i class="material-icons current-close">close</i>
          <input type="search" id="search-tasks" placeholder="Поиск товара">
          <strong>Список товаров</strong>
          <div id="charactersList"></div>
         </div>
         
        </aside>
      </div>



      <!--Basket Modal-->
    
      <!--<div id="basket-box">
        <aside>
         
         <div class="basket-container">
          <i class="material-icons current-close">close</i>
          <strong>Список товаров</strong>
          
          <div id="basketList">
         
          </div>
         </div>
         
        </aside>
      </div>-->

    <div class="cart-wrapper">
      <div class="cart-content">
						<ul class="cart-content__list" data-simplebar>
							<!--<li class="cart-content__item">
								<article class="cart-content__product cart-product">
									<img src="../images/mini_image/m2.jpg" alt="" class="cart-product__img">
									<div class="cart-product__text">
										<h3 class="cart-product__title">Ноутбук Apple MacBook Pro 16 TB i7 2.6/16/512 SSD SG MVVJ2RU/A</h3>
										<span class="cart-product__price">190 789 ₽</span>
									</div>
									<button class="cart-product__delete" aria-label="Удалить товар"></button>
								</article>
							</li>-->
							
						</ul>
						<div class="cart-content__bottom">
							<div class="cart-content__fullprice">
								<span>Итого:</span>
								<span class="fullprice">568 789 ₽</span>
							</div>
							<div class="cart-content__btn btn">Перейти в корзину</div>
						</div>
			</div>
    </div>

  </header>
    `;
  return view;
}

export default Header;