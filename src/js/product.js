import { getParam, loadHeaderFooter } from "./utils.mjs";
import productDetails from "./productDetails.mjs";
import { displayCartBubble } from "./cartBubble";
import { addProductToCart } from "./addToCart";

const productId = getParam("product");
const category = getParam("category");
productDetails(category, productId);

// Load Header and Footer
loadHeaderFooter();
setTimeout(() => {
  displayCartBubble();
}, 10);
// Get the Add to Cart button
const addToCartButton = document.querySelector(".btn-add-to-cart");

addToCartButton.addEventListener("click", () =>
  addProductToCart(category, productId)
);
