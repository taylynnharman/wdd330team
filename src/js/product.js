import { getParam, loadHeaderFooter } from "./utils.mjs";
import productDetails from "./productDetails.mjs";
import { displayCartBubble } from "./cartBubble";
import { getInfo } from "./addToCart";

const productId = getParam("product");
productDetails(productId);

// Load Header and Footer
loadHeaderFooter();
setTimeout(() => {
  displayCartBubble();
}, 10);

// Get the Add to Cart button
const addToCartButton = document.querySelector(".btn-add-to-cart");

addToCartButton.addEventListener("click", () => getInfo(productId));
