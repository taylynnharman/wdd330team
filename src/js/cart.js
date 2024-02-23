import { loadHeaderFooter } from "./utils.mjs";
import { displayCartBubble } from "./cartBubble";
import { removeProductFromCart } from "./removeCart";
import { renderCartContents } from "./shoppingCart.mjs";

loadHeaderFooter();

setTimeout(() => {
  displayCartBubble();
}, 20);

renderCartContents();

document.querySelector(".product-list").addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-button")) {
    const productId = event.target.dataset.id.toString();
    removeProductFromCart(productId);
  }
});
