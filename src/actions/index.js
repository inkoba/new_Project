import router from "../routes";
import closePreloader from "../components/preloader";
import regeneratorRuntime from "regenerator-runtime";

const getContent = async () => {
  // load page
  await router();

  // close preloader
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    setTimeout(closePreloader, 1000);
  }


}

export { getContent };