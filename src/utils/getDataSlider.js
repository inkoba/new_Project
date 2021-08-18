const TASKS_LOCAL_SL = 'http://localhost:3000/slider';


const getResource = async (url) => {
  const res = await fetch(url);

  return res.json();
}

const getAllImg = async () => {
  const res = await getResource(TASKS_LOCAL_SL);
  return res;
}


export { getAllImg };