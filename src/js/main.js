import productList from "./productList.mjs";
import {loadTemplate, renderWithTemplate} from "./utils.mjs";
import { renderWithTemplate } from "./utils.mjs";

productList(".product-list", "tents");

//render out included header and footer with js
const header = document.getElementById('header');
const footer = document.getElementById('footer');

const headerCallback = loadTemplate(path);
const footerCallback = loadTemplate(path);

renderWithTemplate(headerCallback, header);
renderWithTemplate(footerCallback, footer);