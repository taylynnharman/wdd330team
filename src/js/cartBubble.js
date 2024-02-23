import { getLocalStorage } from "./utils.mjs";

function displayCartBubble() {
  const existingCart = getLocalStorage("so-cart");
  const cartLength = existingCart ? existingCart.length : 0;
  const bubble = document.getElementById("bubble");
  if (bubble) {
    if (cartLength > 0) {
      bubble.textContent = cartLength;
      bubble.classList.add("cart-bubble");
    } else {
      bubble.classList.remove("cart-bubble");
      document.getElementById("bubble").innerHTML = "";
    }
  }
}

export { displayCartBubble };
