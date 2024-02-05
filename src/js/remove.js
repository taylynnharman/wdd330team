import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";
import { displayCartBubble } from "../js/cartBubble";

// Function to add a product to the cart
function removeProductFromCart(product) {
  // Get existing cart items
  const existingCart = getLocalStorage("so-cart") || [];

  // Add the new product to the cart
  existingCart.remove(product);

  // Update the local storage with the updated cart
  setLocalStorage("so-cart", existingCart);

  // Update cart
  displayCartBubble();
}

// remove from cart button event handler
async function removeFromCartHandler(e) {
  console.log("Remove Button Pushed");
  const product = await findProductById(e.target.dataset.id);
  removeProductFromCart(product);
}

//Event listener for remove from cart button
document
  .querySelector(".remove-button")
  .addEventListener("click", removeFromCartHandler);
