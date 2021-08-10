import Home from "../pages/Home";
import Header from "../template/Header";
import getHash from "../utils/getHash";
import getResolveRoutes from "../utils/getResolveRoutes";
import ErrorNotFound from "../pages/ErrorNotFound";
import Collection from "../pages/Collection";

import regeneratorRuntime from "regenerator-runtime";
/* import SignIn from "../pages/SignIn";
import Contact from "../pages/Contact";
import Task from "../pages/Task"; */


const routes = {
    "/": Home,
    "/collection": Collection,  // http://localhost:8080/#/collection

}

const router = async () => {
    const header = null || document.getElementById("header");
    const content = null || document.getElementById("content");
    header.innerHTML = Header();
    let hash = getHash();
    let route = await getResolveRoutes(hash);
    let render = routes[route] ? routes[route] : ErrorNotFound;
    content.innerHTML = await render();
}

export default router;