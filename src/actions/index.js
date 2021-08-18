import router from "../routes";
import closePreloader from "../components/preloader";
import regeneratorRuntime from "regenerator-runtime";
import { openCatalogBtn, closeCatalogBtn } from "../components/catalogBtn";
import { openSearchBox, displaySearchTasks, inputSearchTasks, closeSearchBox, } from "../components/searchBox";
import toTopBtn from "../components/toTopBtn";
import generateImg from "../components/generateImg";
/* import { sendInBasket, changeCounter } from "../components/basket"; */
/* import { openBasketBox, closeBasketBox, displayBasketTasks } from "../components/basket"; */
import cardOpen from "../components/card";
import burgerMenu from "../components/burger";
import collectionBtn from "../components/collection";
import generateProduct from "../components/generateProduct";

const getContent = async () => {
  // load page
  await router();

  // close preloader
  if (document.querySelector(".content")) {
    setTimeout(closePreloader, 1000);
  }


  //burger
  burgerMenu();

  // open, close catalogBtn
  document.querySelector('.header-btn-catalog').addEventListener('click', openCatalogBtn);

  document.querySelector('.close-btn-menu').addEventListener('click', closeCatalogBtn);



  // open search bar 
  if (document.querySelector(".header-search")) {
    document.querySelector(".header-search").addEventListener("click", (event) => {
      event.preventDefault();
      openSearchBox();
      displaySearchTasks();
    });
  }

  if (document.querySelector(".header-search-burger")) {
    document.querySelector(".header-search-burger").addEventListener("click", (event) => {
      event.preventDefault();
      openSearchBox();
      displaySearchTasks();
    });
  }

  // close search bar
  if (document.querySelector(".search-container .current-close")) {
    document
      .querySelector(".search-container .current-close")
      .addEventListener("click", () => {
        closeSearchBox();
      });
  }

  // input search
  if (document.querySelector("#search-tasks")) {
    document
      .querySelector("#search-tasks")
      .addEventListener("keyup", inputSearchTasks);
  }

  //scroll button
  toTopBtn();

  // send in basket
  //sendInBasket();
  /* document.addEventListener('click', (event) => {
    const prod = document.querySelector('.product-preview-btn');
    if (event.target.closest('.product-preview-btn')) {
      console.log("hhhh"); */
  /* sendInBasket(event.target.dataset.id); */
  /*     changeCounter(prod);
    }
  }) */


  //
  // open basket bar
  /*   if (document.querySelector("#basketBtn")) {
      document.querySelector("#basketBtn").addEventListener("click", (event) => {
        event.preventDefault();
        openBasketBox();
        displayBasketTasks();
      });
    } */

  // close basket bar
  /*   if (document.querySelector(".basket-container .current-close")) {
      document
        .querySelector(".basket-container .current-close")
        .addEventListener("click", (event) => {
          event.preventDefault();
          closeBasketBox();
        });
    } */



  // card
  /* cardOpen(); */

  //collection
  /* collectionBtn(); */


  // product
  /*  window.onload = () => {
 
     console.log("11111111111111111111111")
     document.querySelector('.search-item').addEventListener('click', (event) => {
       event.preventDefault();
       generateProduct();
     });
   } */

  /*  document.addEventListener('DOMContentLoaded', function () {
     document.querySelector('.search-item-text').addEventListener('click', function () {
       console.log("1111111111111")
     });
   }); */



  // login
  if (document.querySelector("#signin")) {  //проверка есть такой элемент на странице
    document.querySelector("#signin").addEventListener("submit", writeAccountData);
  }

  if (document.querySelector("#login")) {  //проверка есть такой элемент на странице
    //document.querySelector("#login").addEventListener("submit", checkLogin);
    document.querySelector("#login").addEventListener("submit", postUser); // а это проверяет на сервере
  }

  // реагирует на действия если пользватель уходит со страницы
  window.addEventListener("unload", () => {
    localStorage.setItem('session-key', generatePassword())
  })
}

export { getContent };