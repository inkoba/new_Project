
import "../styles/scss/main.scss";
/* import regeneratorRuntime from "regenerator-runtime";
import generateAllTasks from "../components/projectTasks"; */
import s1 from "../images/mini_slider/s1.jpg";


const Home = () => {
  const view = `
  <div id="preloader" aria-busy="true" aria-label="Loading, please wait." role="progressbar"></div>


    <main>
      <div class="main">
        <div class="main-content">


          <div class="promo-slider">
            <div class="mainly">
              <div class="wrapper-promo-slider">
                <div class="picture">
                  <div class="slider-picture">

                    <div>
                      <a>
                        <img src="./images/img/y5naGUm2DrA.jpg">
                      </a>
                    </div>

                    <div class="promo-slider-text">Новое поступление!</div>
                  </div>
                </div>

                <div class="arrow-slider">
                  <div class="wrapper-arrow">
                    <button id="arrow-slider-right" type="button" class="btn-arrow-slider">
                      <span class="splide-arrow-icon icon-angle-right"></span>
                    </button>

                    <button id="arrow-slider-left" type="button" class="btn-arrow-slider">
                      <span class="splide-arrow-icon icon-angle-left"></span>
                    </button>
                  </div>
                </div>

                <div></div>
              </div>
            </div>
          </div>

          <div class="special-products">
            <div class="mainly">
              <div class="wrapper-special-products">
                <div class="special-products-head">
                  <div class="h2 special-products-title">Новое поступление</div>
                  <div class="special-products-slider">
                    <div class="special-products-slider-arrow-icon">
                      <span class="icon-left-dir"></span>
                    </div>
                    <div class="special-products-slider-arrow-icon">
                      <span class="icon-right-dir"></span>
                    </div>
                  </div>
                </div>
                <div class="special-products-slider">
                  <div></div>

                  <div class="slider-track">
                    <div class="slider-list">

                      <div class="slider-slide">
                        <div class="product-preview-content">
                          <div class="product-preview-img">
                            <a>
                              <img src="${s1}">
                            </a>
                          </div>
                          <div class="product-preview-title">
                            <div class="product-preview-price">
                              <span class="product-preview-price-span">103 руб</span>
                            </div>
                            <div class="product-preview-btn">
                              <button type="button" class="product-preview-btn-title border-radius">
                                В корзину
                                <span class="icon icon-cart margin-preview"></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="slider-slide">
                        <div class="product-preview-content">
                          <div class="product-preview-img">
                            <a>
                              <img src="./images/mini_slider/s2.jpg">
                            </a>
                          </div>
                          <div class="product-preview-title">
                            <div class="product-preview-price">
                              <span class="product-preview-price-span">103 руб</span>
                            </div>
                            <div class="product-preview-btn">
                              <button type="button" class="product-preview-btn-title border-radius">
                                В корзину
                                <span class="icon icon-cart margin-preview"></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="slider-slide">
                        <div class="product-preview-content">
                          <div class="product-preview-img">
                            <a>
                              <img src="./images/mini_slider/s3.jpg">
                            </a>
                          </div>
                          <div class="product-preview-title">
                            <div class="product-preview-price">
                              <span class="product-preview-price-span">103 руб</span>
                            </div>
                            <div class="product-preview-btn">
                              <button type="button" class="product-preview-btn-title border-radius">
                                В корзину
                                <span class="icon icon-cart margin-preview"></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="slider-slide">
                        <div class="product-preview-content">
                          <div class="product-preview-img">
                            <a>
                              <img src="./images/mini_slider/s4.jpg">
                            </a>
                          </div>
                          <div class="product-preview-title">
                            <div class="product-preview-price">
                              <span class="product-preview-price-span">103 руб</span>
                            </div>
                            <div class="product-preview-btn">
                              <button type="button" class="product-preview-btn-title border-radius">
                                В корзину
                                <span class="icon icon-cart margin-preview"></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- <div class="slider-slide">
                        <div class="product-preview-content">
                          <div class="product-preview-img">
                            <a>
                              <img src="./images/mini_slider/s5.jpg">
                            </a>
                          </div>
                          <div class="product-preview-title">
                            <div class="product-preview-price">
                              <span class="product-preview-price-span">103 руб</span>
                            </div>
                            <div class="product-preview-btn">
                              <button type="button" class="product-preview-btn-title border-radius">
                                В корзину
                                <span class="icon icon-cart margin-preview"></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="slider-slide">
                        <div class="product-preview-content">
                          <div class="product-preview-img">
                            <a>
                              <img src="./images/mini_slider/s6.jpg">
                            </a>
                          </div>
                          <div class="product-preview-title">
                            <div class="product-preview-price">
                              <span class="product-preview-price-span">103 руб</span>
                            </div>
                            <div class="product-preview-btn">
                              <button type="button" class="product-preview-btn-title border-radius">
                                В корзину
                                <span class="icon icon-cart margin-preview"></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="slider-slide">
                        <div class="product-preview-content">
                          <div class="product-preview-img">
                            <a>
                              <img src="./images/mini_slider/s7.jpg">
                            </a>
                          </div>
                          <div class="product-preview-title">
                            <div class="product-preview-price">
                              <span class="product-preview-price-span">103 руб</span>
                            </div>
                            <div class="product-preview-btn">
                              <button type="button" class="product-preview-btn-title border-radius">
                                В корзину
                                <span class="icon icon-cart margin-preview"></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="slider-slide">
                        <div class="product-preview-content">
                          <div class="product-preview-img">
                            <a>
                              <img src="./images/mini_slider/s8.jpg">
                            </a>
                          </div>
                          <div class="product-preview-title">
                            <div class="product-preview-price">
                              <span class="product-preview-price-span">103 руб</span>
                            </div>
                            <div class="product-preview-btn">
                              <button type="button" class="product-preview-btn-title border-radius">
                                В корзину
                                <span class="icon icon-cart margin-preview"></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div> -->


                    </div>
                  </div>

                  <div></div>

                </div>
              </div>
            </div>
          </div>

          <div class="baner">
            <div class="mainly">
              <div class="banner-list">

                <a class="banner-list-item banner-photo-1">
                  <div class="banner-list-item-photo">

                    <img class="banner-img" src="./images/img/images/2.jpg">

                  </div>
                  <div class="banner-list-item-text">Classica Milavitsa</div>
                </a>

                <a class="banner-list-item baner-grid banner-photo-2">
                  <div class="banner-list-item-photo">
                    <div class="img-ratio ">
                      <img class="banner-img" src="./images/img/images/4.jpg">
                    </div>
                  </div>
                  <div class="banner-list-item-text">Classica Milavitsa</div>
                </a>

                <a class="banner-list-item baner-grid-2 banner-photo-3">
                  <div class="banner-list-item-photo">
                    <div class="img-ratio ">
                      <img class="banner-img" src="./images/img/im5.jpg">
                    </div>
                  </div>
                  <div class="banner-list-item-text">Classica Milavitsa</div>
                </a>

                <a class="banner-list-item baner-grid-2 banner-photo-4">
                  <div class="banner-list-item-photo">
                    <div class="img-ratio ">
                      <img class="banner-img" src="./images/img/im6.jpg">
                    </div>
                  </div>
                  <div class="banner-list-item-text">Classica Milavitsa</div>
                </a>

                <a class="banner-list-item banner-photo-5">
                  <div class="banner-list-item-photo">
                    <div class="img-ratio ">
                      <img class="banner-img" src="./images/img/im2.jpg">
                    </div>
                  </div>
                  <div class="banner-list-item-text">Classica Milavitsa</div>
                </a>

                <a class="banner-list-item banner-photo-6">
                  <div class="banner-list-item-photo">
                    <div>
                      <img class="banner-img" src="./images/img/im3.jpg">
                    </div>
                  </div>
                  <div class="banner-list-item-text">Classica Milavitsa</div>
                </a>

              </div>
            </div>
          </div>



          <div class="brends">
            <div class="mainly">
              <div class="wrapper-special-products">
                <div class="special-products-head">
                  <div class="h2 special-products-title">Бренд</div>
                  <div class="special-products-slider">
                    <div class="special-products-slider-arrow-icon">
                      <span class="icon-left-dir"></span>
                    </div>
                    <div class="special-products-slider-arrow-icon">
                      <span class="icon-right-dir"></span>
                    </div>
                  </div>
                </div>
                <div class="special-products-slider">
                  <div></div>

                  <div class="slider-track">
                    <div class="slider-list">

                      <div class="slider-slide">
                        <div class="product-preview-content">
                          <div class="product-preview-img">
                            <a>
                              <img src="images/img/logo/alisee_white_.png">
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="slider-slide">
                        <div class="product-preview-content">
                          <div class="product-preview-img">
                            <a>
                              <img src="images/img/logo/aveline_.png">
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="slider-slide">
                        <div class="product-preview-content">
                          <div class="product-preview-img">
                            <a>
                              <img src="images/img/logo/hidalgo.jpg">
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="slider-slide">
                        <div class="product-preview-content">
                          <div class="product-preview-img">
                            <a>
                              <img src="images/img/logo/milavitsa_logo_milavitsa (1).png">
                            </a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>


                  <div class="feedback">
                    <div class="mainly">
                      <div class="feedback-header h2"> Обратная связь</div>

                      <form class="feedback-form">
                        <div class="feedback-mуssage">Сообщение отправлено успешно!</div>
                        <div class="feedback-fields">

                          <div>
                            <div class="feedback-fields-div">
                              <div class="feedback-fields-div-input">
                                <input class="feedback-form-control border-radius" type="text" value="Имя*">
                                <div class="feedback-fields-error"></div>
                              </div>

                              <div class="feedback-fields-div-input">
                                <input class="feedback-form-control border-radius" type="text" value="Ваша почта*">
                                <div class="feedback-fields-error"></div>
                              </div>
                            </div>

                            <div>
                              <textarea class="feedback-form-control feedback-textarea border-radius"
                                placeholder="Ваш вопрос, отзыв, пожелание*"></textarea>
                            </div>

                            <div></div>

                            <div class="feedback-submit">
                              <button class="feedback-submit-btn border-radius">Отправить</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>




                </div>
              </div>
            </div>
    </main>


    <div class="star">
      <div class="inline"></div>
      <div><img src="./images/img/favicon.ico"></div>
      <div class="inline"></div>
    </div>


    <footer>
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
                      <div class="social-img-item"><span class="icon icon-paper-plane"></span></div>
                      <div class="social-img-item"><span class="icon icon-vkontakte"></span></div>
                      <div class="social-img-item"><span class="icon icon-twitter"></span></div>
                      <div class="social-img-item"><span class="icon icon-skype"></span></div>
                      <div class="social-img-item"><span class="icon icon-facebook-squared"></span></div>
                      <div class="social-img-item"><span class="icon icon-instagram"></span></div>
                    </div>
                  </div>

                  <div class="footer-area-contacts">

                    <a class="header-phone-value" href="tel:+375295592071"><span
                        class="icon icon-phone"></span>+375(29)55-92-071</a>
                  </div>

                </div>
              </div>

              <div class="footer-content-bottom"></div>
            </div>
          </div>
        </div>


    </footer>
  
    `;

  return view;
}

export default Home;