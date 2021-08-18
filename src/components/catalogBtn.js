const openCatalogBtn = (event) => {
  const catalogBtn = document.querySelector('.catalog');
  if (event.target.closest(".header-btn-catalog")) {
    catalogBtn.classList.remove('hide');
  };
};

const closeCatalogBtn = (event) => {
  const catalogBtn = document.querySelector('.catalog');
  catalogBtn.classList.add('hide');
};

export { openCatalogBtn, closeCatalogBtn };