import Home from "../pages/Home";
import Header from "../template/Header";
import Footer from "../template/Footer";
import Contacts from "../pages/Contacts";
import getHash from "../utils/getHash";
import getResolveRoutes from "../utils/getResolveRoutes";
import ErrorNotFound from "../pages/ErrorNotFound";
import Collection from "../pages/Collection";
import swiperFunction from "../components/swiperSetTimeout";

import regeneratorRuntime from "regenerator-runtime";
import Basket from "../pages/Basket";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import { redirect } from "../components/logIn";
import Product from "../pages/Product";

const routes = {
    "/": Home,
    "/login": LogIn, //http://localhost:8080/#/login
    "/signup": SignUp, // http://localhost:8080/#/signin
    "/collection": Collection,  // http://localhost:8080/#/collection
    "/contacts": Contacts, // http://localhost:8080/#/contacts
    "/basket": Basket,  //http://localhost:8080/#/basket
    "/:id": Product //http://localhost:8080/#/1
}

const router = async () => {
    const header = null || document.getElementById("header");
    const content = null || document.getElementById("content");
    const footer = null || document.getElementById("footer");
    header.innerHTML = Header();
    footer.innerHTML = Footer();
    let hash = getHash();
    let route = await getResolveRoutes(hash);
    let isRedirect = await redirect();
    let render = routes[route] ? routes[route] : ErrorNotFound;
    isRedirect ? render = LogIn : routes[route];
    content.innerHTML = await render();
    if (render === ErrorNotFound) {
        header.innerHTML = "";
        footer.innerHTML = "";
    }

}

export default router;