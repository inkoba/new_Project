import router from './routes';
import { getContent } from './actions';
import regeneratorRuntime from "regenerator-runtime";

import './styles/font/css/fontello.css'

window.addEventListener('load', () => {
    router();
    getContent();
});


window.addEventListener('hashchange', () => {
    router();
    getContent();
});
