import "../styles/scss/main.scss";
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
                    <a  class="menu-link" href="/#">Главная</a>
                    <a class="menu-link" href="/#/collection">Коллекции</a></li>
                    <a class="menu-link" href="/#/1">Акции</a>
                    <a class="menu-link" href="/#/contacts">Контакты</a>
                    <a class="menu-link" href="/#feedback">Отзыв</a>
                  </div>


                  <div class="footer-menu-client">
                    <div class="footer-menu-title">
                      <a class="menu-link">Личный кабинет</a>
                      <a class="menu-link" href="/#/basket">Корзина</a>
                    </div>
                  </div>
                </div>

                <div class="footer-area-sidebar">

                  <div class="footer-area-social">
                    <div class="title">Мы в соц. сетях</div>
                    <div class="social-items">
                      <a class="social-img-item third" href="https://t.me" target="_blank" alt="Телеграм"
                      title="Телеграм"><span class="icon icon-paper-plane"></span></a>
                      <a class="social-img-item third" href="https://vk.com" target="_blank" alt="Вконтакте"
                      title="Вконтакте"><span class="icon icon-vkontakte"></span></a>
                      <a class="social-img-item third" href="https://twitter.com" target="_blank" alt="Twitter"
                      title="Twitter"><span class="icon icon-twitter"></span></a>
                      <a class="social-img-item third" href="https://www.skype.com" target="_blank" alt="Skype"
                      title="Skype"><span class="icon icon-skype"></span></a>
                      <a class="social-img-item third" href="https://www.facebook.com" target="_blank" alt="Facebook"
                      title="Facebook"><span class="icon icon-facebook-squared"></span></a>
                      <a class="social-img-item third" href="https://www.instagram.com" target="_blank" alt="Instagram"
                      title="Instagram"><span class="icon icon-instagram"></span></a>
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