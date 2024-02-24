import { getParam, loadHeaderFooter } from "./utils.mjs";
import productDetails from "./productDetails.mjs";
import { addProductToCart } from "./addToCart";

const productId = getParam("product");
const category = getParam("category");
productDetails(category, productId);

loadHeaderFooter();

const addToCartButton = document.querySelector(".btn-add-to-cart");

addToCartButton.addEventListener("click", () =>
  addProductToCart(category, productId)
);
