import {
  getLocalStorage,
  setLocalStorage,
  displayCartBubble,
} from "./utils.mjs";
import { renderCartContents } from "./shoppingCart.mjs";

// Function to add a product to the cart
export function removeProductFromCart(productId) {
  // Get existing cart items
  const productList = getLocalStorage("so-cart") || [];

  const newProductList = productList.filter(
    (product) => product.Id !== productId
  );

  // Update the local storage with the updated cart
  setLocalStorage("so-cart", newProductList);

  renderCartContents();

  // Update cart
  displayCartBubble();
}
