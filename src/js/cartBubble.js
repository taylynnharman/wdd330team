import { getLocalStorage } from "./utils.mjs";

function displayCartBubble() {
  const existingCart = getLocalStorage("so-cart") || [];
  const cartLength = existingCart.length;
  const bubble = document.getElementById("bubble");
  if (cartLength > 0) {
    bubble.textContent = cartLength;
    bubble.classList.add("cart-bubble");
  } else {
    bubble.classList.remove("cart-bubble");
  }
}

export { displayCartBubble };
