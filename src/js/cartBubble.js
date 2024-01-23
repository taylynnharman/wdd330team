import { getLocalStorage } from "./utils.mjs";

// Update the cart bubble on page load
document.addEventListener("DOMContentLoaded", () => {
  displayCartBubble();
});

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
