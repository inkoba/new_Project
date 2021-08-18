import router from "../routes";
import closePreloader from "../components/preloader";
import regeneratorRuntime from "regenerator-runtime";
import { openCatalogBtn, closeCatalogBtn } from "../components/catalogBtn";
import { openSearchBox, displaySearchTasks, inputSearchTasks, closeSearchBox, } from "../components/searchBox";
import toTopBtn from "../components/toTopBtn";
import burgerMenu from "../components/burger";
import { writeAccountData, checkLogin } from "../components/logIn";

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

  // login
  if (document.querySelector('#signin')) {
    document.querySelector('#signin').addEventListener('submit', writeAccountData);
    //document.querySelector('#signin').addEventListener('submit', postUser);
  }

  if (document.querySelector('#login')) {
    document.querySelector('#login').addEventListener('submit', checkLogin);
  }

  window.addEventListener('unload', () => {
    localStorage.setItem('session-key', '');
  })

};

export { getContent };