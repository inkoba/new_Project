const TASKS_LOCAL = 'http://localhost:3000/tasks';

import regeneratorRuntime from "regenerator-runtime";
const getResource = async (url) => {
  const res = await fetch(url);

  return res.json();
}

const getAllTasks = async () => {
  const res = await getResource(TASKS_LOCAL);
  return res;
}

const getProduct = async (id) => {
  const res = await getResource(`${TASKS_LOCAL}/${id}`);
  return res;
}


export { getAllTasks, getProduct };