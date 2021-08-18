const toTopBtn = () => {
  const goTopBtn = document.querySelector('.totop');

  const trackScroll = () => {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('totop-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('totop-show');
    }
  }

  const backToTop = () => {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 20);
    }
  }

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
};

export default toTopBtn;