import { findProductById } from "./productData.mjs";
import { displayCartBubble } from "./cartBubble.js";
import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export async function getInfo(productId) {
  console.log("Product ID", productId);
  const product = await findProductById(productId); // Await the result
  addProductToCart(product);
}

function buttonAnimation() {
  // Get the Add to Cart button
  const addToCartButton = document.querySelector(".btn-add-to-cart");
  // Add CSS class for added animation
  addToCartButton.classList.add("cart-added");

  // Remove the "cart-added" class after 2.5 seconds
  setTimeout(() => {
    addToCartButton.classList.remove("cart-added");
  }, 2500);
}

// Add a product to the cart
export function addProductToCart(product) {
  // Get existing cart items
  const existingCart = getLocalStorage("so-cart") || [];

  buttonAnimation();
  // Add the new product to the cart
  existingCart.push(product);
  console.log("Product", product);

  // Update the local storage with the updated cart
  setLocalStorage("so-cart", existingCart);

  // Display the cart bubble
  displayCartBubble();
}
