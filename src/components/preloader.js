const closePreloader = () => {
  const preloader = document.querySelector('#preloader');
  const mainContainer = document.querySelector('.content');

  console.log(preloader.style);

  preloader.style.opacity = 0;
  mainContainer.style.opacity = 1;
}



export default closePreloader; 