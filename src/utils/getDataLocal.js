const TASKS_LOCAL = 'http://localhost:3000/tasks';


const getResource = async (url) => {
  const res = await fetch(url);

  return res.json();
}

const getAllTasks = async () => {
  const res = await getResource(TASKS_LOCAL);
  return res;
}


export { getAllTasks };