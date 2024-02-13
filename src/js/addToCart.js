import { findProductById } from "./productData.mjs";
import { displayCartBubble } from "./cartBubble.js";
import { getLocalStorage, setLocalStorage } from "./utils.mjs";

// Get the Add to Cart button
const addToCartButton = document.querySelector(".btn-add-to-cart");

// Add click event listener to Add to Cart button
addToCartButton.addEventListener(
  "click",
  async function () {
    // Get the product ID from the dataset
    const productId = this.dataset.id;

    // Find the product by ID
    const product = await findProductById(productId);

    // Add the product to the cart
    addProductToCart(product);

    // Add CSS class for added animation
    this.classList.add("cart-added");

    // Remove the "cart-added" class after 2.5 seconds
    setTimeout(() => {
      this.classList.remove("cart-added");
    }, 2500);
  },
  2500
);

// Add a product to the cart
function addProductToCart(product) {
  // Get existing cart items
  const existingCart = getLocalStorage("so-cart") || [];

  // Add the new product to the cart
  existingCart.push(product);

  // Update the local storage with the updated cart
  setLocalStorage("so-cart", existingCart);

  // Display the cart bubble
  displayCartBubble();
}
