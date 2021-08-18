const Footer = () => {
  const view = `
  <footer>

      <div class="star">
        <div class="inline"></div>
        <div><img src="./images/favicon.ico"></div>
        <div class="inline"></div>
      </div>

      <div class="footer">
        <div class="footer-content">
          <div class="mainly">
            <div class="footer-wrap">

              <div class="footer-content-top">
                <div class="footer-menu-item">
                  <div class="footer-menu-title">
                    <a class="menu-link">О нас</a>
                    <a class="menu-link">Акции</a>
                    <a class="menu-link">Новое поступление</a>
                    <a class="menu-link">Наш адрес</a>
                  </div>


                  <div class="footer-menu-client">
                    <div class="footer-menu-title">
                      <a class="menu-link">Личный кабинет</a>
                      <a class="menu-link">Корзина</a>
                    </div>
                  </div>
                </div>

                <div class="footer-area-sidebar">

                  <div class="footer-area-social">
                    <div class="title">Мы в соц. сетях</div>
                    <div class="social-items">
                      <div class="social-img-item third"><span class="icon icon-paper-plane"></span></div>
                      <div class="social-img-item third"><span class="icon icon-vkontakte"></span></div>
                      <div class="social-img-item third"><span class="icon icon-twitter"></span></div>
                      <div class="social-img-item third"><span class="icon icon-skype"></span></div>
                      <div class="social-img-item third"><span class="icon icon-facebook-squared"></span></div>
                      <div class="social-img-item third"><span class="icon icon-instagram"></span></div>
                    </div>
                  </div>

            

                  <div class="footer-area-contacts">

                    <a class="header-phone-value" href="tel:+375295592071"><span
                        class="icon icon-phone third"></span>+375(29)55-92-071</a>
                  </div>

                </div>
              </div>

              <div class="footer-content-bottom"></div>
            </div>
          </div>
        </div>


        <div id="toTop" class="btn totop">
          <span class="icon icon-up-dir"></span>
        </div>
    </footer>
  
  `;
  return view;
}

export default Footer;