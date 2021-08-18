import regeneratorRuntime from "regenerator-runtime";
import generateImg from "../components/generateImg";

import 'swiper/swiper-bundle.css';
import Swiper, { Navigation, Autoplay } from 'swiper';
Swiper.use(Navigation, Autoplay);

const swiperFunction = async () => {
  await generateImg();

  setTimeout(() => {
    const swiper = new Swiper('.mySwiper', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });

  setTimeout(() => {
    const swiper1 = new Swiper(".mySwiper1", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });


  setTimeout(() => {
    const swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });


};


const swiperThreeProduct = async () => {
  await generateImg();
  setTimeout(() => {
    const swiper3 = new Swiper(".mySwiper1", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });
};
export { swiperFunction, swiperThreeProduct };