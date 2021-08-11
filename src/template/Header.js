import LogoImg from "../images/logo/bigLogo.svg";


const Header = () => {
  const view = `
  <header>
    <div class="header">
      <div class="header-content">
        <div class="header-content-top">
          <div class="mainly">
            <div class="header-content-top-inner">

              <div class="header-area-menu">
                <ul class="header-menu">
                  <li class="header-menu-item">Каталог</li>
                  <li class="header-menu-item">О компании</li>
                  <li class="header-menu-item">Контакты</li>
                  <li class="header-menu-item">Доставка</li>
                  <li class="header-menu-item">Отзыв</li>
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
                  <img class="logo-img" src="${LogoImg}">
                </span>
              </div>

              <div class="header-area-catalog">
                <button type="button" class="header-btn-catalog">
                  <span class="icon icon-menu"></span>
                  Каталог
                </button>
              </div>

              <div class="header-area-search">
                <div class="header-search">
                  <form class="header-search-form" method="GET">
                    <input type="text" value="Поиск" class="header-search-field">
                    <button type="submit" class="header-btn-search">
                      <span class="icon icon-search-1"></span>
                    </button>
                  </form>
                </div>
              </div>

              <div class="header-area-controls">
                <a href="" class="">
                  <span class="icon icon-user"></span>
                </a>
                <a href="" class="">
                  <span class="icon icon-compare">
                    <span class="header-cart-empty">0</span>
                  </span>
                </a>
                <a href="" class="">
                  <span class="icon icon-cart">
                    <span class="header-cart-empty">0</span>
                  </span>
                  <span>0&nbsp; руб</span>
                </a>
              </div>

              <div class="header-collections"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
    `;
  return view;
}

export default Header;