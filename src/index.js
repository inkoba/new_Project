import router from './routes';
import { getContent } from './actions';
import regeneratorRuntime from "regenerator-runtime";

window.addEventListener('load', () => {
    router();
    getContent();
});


window.addEventListener('hashchange', () => {
    router();
    getContent();
});
