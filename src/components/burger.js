const burgerMenu = () => {

  document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.menu').classList.toggle("animate");
  });
};
export default burgerMenu;