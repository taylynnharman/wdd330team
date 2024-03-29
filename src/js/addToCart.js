import { findProductById } from "./externalServices.mjs";

import {
  getLocalStorage,
  setLocalStorage,
  displayCartBubble,
} from "./utils.mjs";

function buttonAnimation() {
  // Get the Add to Cart button
  const addToCartButton = document.querySelector(".btn-add-to-cart");
  // Add CSS class for added animation
  addToCartButton.classList.add("cart-added");

  // Remove the "cart-added" class after 2.5 seconds
  setTimeout(() => {
    addToCartButton.classList.remove("cart-added");
  }, 1000);
}

// Add a product to the cart
export async function addProductToCart(category = "tents", productId) {
  const product = await findProductById(category, productId);
  product.category = category;
  // Get existing cart items
  const existingCart = getLocalStorage("so-cart") || [];
  if (window.location.pathname === "/product_pages/index.html") {
    buttonAnimation();
  }

  // Add the new product to the cart
  existingCart.push(product);

  // Update the local storage with the updated cart
  setLocalStorage("so-cart", existingCart);

  // Display the cart bubble
  displayCartBubble();
}
