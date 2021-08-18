
import "../styles/scss/main.scss";
import { swiperFunction } from "../components/swiperSetTimeout";


const Home = () => {

  swiperFunction();
  const view = `
  <div id="preloader" aria-busy="true" aria-label="Loading, please wait." role="progressbar"></div>


    <main>
      <div class="main">
        <div class="main-content">
        
          <div class="swiper-container mySwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../images/Slider/Sl1.1.jpg"></div>
                <div class="swiper-slide"><img src="../images/Slider/Sl2.1.jpg"></div>
                <div class="swiper-slide"><img src="../images/Slider/Sl3.1.jpg"></div>
                <div class="swiper-slide"><img src="../images/Slider/Sl4.1.jpg"></div>
                <div class="swiper-slide"><img src="../images/Slider/Sl5.1.jpg"></div>
                <div class="swiper-slide"><img src="../images/Slider/Sl6.1.jpg"></div>
                <div class="swiper-slide"><img src="../images/Slider/Sl7.1.jpg"></div>
                <div class="swiper-slide"><img src="../images/Slider/Sl8.1.jpg"></div>
                <div class="swiper-slide"><img src="../images/Slider/Sl9.1.jpg"></div>
              </div>
          
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
          </div>

      
          <div class="brends">
          <div class="mainly">
            <div class="wrapper-special-products">
              <div class="special-products-head">
              <div class="h2 special-products-title">Новое поступление</div>
            </div>
          </div>
       
          
        <div class="swiper-container mySwiper1">
          <div class="swiper-wrapper" id="generationSwiper">
            <!--<div  class="swiper-slide"></div>
            
            </div>-->
              <!--<div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
            </div>-->
          
          </div>
        </div>




          <div class="banner">
            
              <div class="banner-list">

                <a class="banner-list-item banner-photo-1">
                  <div class="banner-list-item-photo">
                    <img class="banner-img" src="./images/baner/im1.jpg">
                    <div class="banner-hover-text">
                      <h2>Collection Classic</h2>
                      Push-Up
                    </div>
                  </div>
                  <div class="banner-list-item-text">Classica Milavitsa</div>
                </a>

                <a class="banner-list-item baner-grid banner-photo-2">
                  <div class="banner-list-item-photo">
                      <img class="banner-img" src="./images/baner/im4.jpg">
                      <div class="banner-hover-text">
                        <h2>Collection Moda</h2>
                        ПРОВАНСКИЙ ШАРМ
                    </div>
                  </div>
                  <div class="banner-list-item-text">Classica Milavitsa</div>
                </a>

                <a class="banner-list-item baner-grid-2 banner-photo-3">
                  <div class="banner-list-item-photo">
                      <img class="banner-img" src="./images/baner/im5.jpg">
                      <div class="banner-hover-text">
                        <h2>Трикотажная коллекция</h2>
                        HIDALGO
                      </div>
                  </div>
                  <div class="banner-list-item-text">Classica Milavitsa</div>
                </a>

                <a class="banner-list-item baner-grid-2 banner-photo-4">
                  <div class="banner-list-item-photo">
                      <img class="banner-img" src="./images/baner/im6.jpg">
                      <div class="banner-hover-text">
                        <h2>Collection ACCEN</h2>
                        РИВЬЕРА
                      </div>
                  </div>
                  <div class="banner-list-item-text">Classica Milavitsa</div>
                </a>

                <a class="banner-list-item banner-photo-5">
                  <div class="banner-list-item-photo">
                      <img class="banner-img" src="./images/baner/im2.jpg">
                      <div class="banner-hover-text">
                        <h2>Трикотажная коллекция</h2>
                        ОРЕО
                      </div>
                  </div>
                  <div class="banner-list-item-text">Classica Milavitsa</div>
                </a>

                <a class="banner-list-item banner-photo-6">
                  <div class="banner-list-item-photo">
                      <img class="banner-img" src="./images/baner/im3.jpg">
                      <div class="banner-hover-text">
                        <h2>Купальники</h2>
                        МОРСКОЕ ПУТЕШЕСТВИЕ
                      </div>
                  </div>
                  <div class="banner-list-item-text">Classica Milavitsa</div>
                </a>

              </div>
        
          </div>



          <div class="brends">
            
                <div class="h2 special-products-title">Бренд</div>
     
          </div>
                  
              
                <div class="swiper-container mySwiper2">
                  <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img src="./images/logo/aveline_.png">
                      </div>
                      <div class="swiper-slide">
                        <img src="./images/logo/hidalgo.jpg">
                      </div>
                      <div class="swiper-slide">
                        <img src="./images/logo/alisee_white_.png">
                      </div>
                      <div class="swiper-slide">
                        <img src="./images/logo/milavitsa_logo.png">
                      </div>
                      <div class="swiper-slide">
                        <img src="./images/logo/aveline_.png">
                      </div>
                      <div class="swiper-slide">
                        <img src="./images/logo/hidalgo.jpg">
                      </div>
                      <div class="swiper-slide">
                        <img src="./images/logo/alisee_white_.png">
                      </div>
                      <div class="swiper-slide">
                        <img src="./images/logo/milavitsa_logo.png">
                      </div>
                      <div class="swiper-slide">
                        <img src="./images/logo/aveline_.png">
                      </div>
                  </div>

                  
                  <div class="swiper-pagination"></div>
                </div>

                  
            


                  <div class="feedback" id="feedback">
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
                              <button class="btn feedback-submit-btn">Отправить</button>
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

    `;

  return view;
}

export default Home;