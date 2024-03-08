import { loadHeaderFooter } from "./utils.mjs";
import { removeProductFromCart } from "./removeCart";
import { renderCartContents, renderCartTotal } from "./shoppingCart.mjs";

loadHeaderFooter();

renderCartContents();

const total = renderCartTotal();

document.querySelector(".list-total").innerHTML = `Total: $${total.toFixed(2)}`;

document.querySelector(".product-list").addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-button")) {
    const productId = event.target.dataset.id.toString();
    removeProductFromCart(productId);
  }
});
