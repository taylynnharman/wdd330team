import { getLocalStorage } from "./utils.mjs";

// Create the "bubble" element
const bubble = document.createElement("div");
bubble.id = "bubble";

// Append the "bubble" element to the "cart" div
const cart = document.querySelector(".cart");
cart.appendChild(bubble);

// Dispatch a custom event after the "bubble" element is appended to the DOM
const bubbleCreatedEvent = new Event("bubbleCreated");
document.addEventListener("DOMContentLoaded", () => {
  document.dispatchEvent(bubbleCreatedEvent);
});

// Listen for the custom event to ensure that the "bubble" element is created
document.addEventListener("bubbleCreated", () => {
  displayCartBubble();
});

function displayCartBubble() {
  const existingCart = getLocalStorage("so-cart") || [];
  const cartLength = existingCart.length;
  console.log("cart length", cartLength);
  const bubble = document.getElementById("bubble");
  console.log("Element found");
  if (cartLength > 0) {
    console.log("Element greater than 0");
    console.log("bubble:", bubble);
    bubble.textContent = cartLength;
    console.log("cart length", cartLength);
    bubble.classList.add("cart-bubble");
  } else {
    bubble.classList.remove("cart-bubble");
  }
}

export { displayCartBubble };
