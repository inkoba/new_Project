import { getAllTasks } from "../utils/getDataLocal";
//import getHash from "../utils/getHash";
//import swiperFunction from "../components/swiperSetTimeout";


const openSearchBox = () => {
  const searchContainer = document.querySelector('#search-box aside');
  searchContainer.classList.add('show-box');
}

const closeSearchBox = () => {
  const searchContainer = document.querySelector('#search-box aside');
  searchContainer.classList.remove('show-box');
}

const displaySearchTasks = async (allTasks) => {
  /* const id = getHash();
  const product = await getProduct(id); */

  allTasks = allTasks || await getAllTasks();
  const searchTasks = document.querySelector('#charactersList');
  searchTasks.innerHTML = '';
  allTasks.forEach((task) => {
    searchTasks.innerHTML += `
          <div class="search-item">
            <i class="material-icons current-state">done</i>
            <a href="/#/${task.id}"> 
              <div class="search-item-text">
                <h4>${task.shortSummary}</h4>
                <p>${task.description}</p>
                <img src="${task.img}">
                <hr>
                </div>
                <br>
              </div>
            </a>
    `
  })
}
const inputSearchTasks = async (event) => {
  const searchValue = event.target.value.toLowerCase();
  const allTasks = await getAllTasks();

  const filterTasks = allTasks.filter((task) => {
    return (
      task.shortSummary.toLowerCase().includes(searchValue)
      || task.description.toLowerCase().includes(searchValue)
    )
  })

  displaySearchTasks(filterTasks);
}

export { openSearchBox, displaySearchTasks, inputSearchTasks, closeSearchBox };