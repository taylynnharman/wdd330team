import { getLocalStorage } from "./utils.mjs";

export function renderCartTotal() {
  const totalElement = document.querySelector("p.list-total");
  const cartProducts = getLocalStorage("so-cart");

  let total = 0;
  if (cartProducts && cartProducts.length > 0) {
    cartProducts.forEach((product) => {
      total += product.FinalPrice;
    });
    return total;
  }
}
