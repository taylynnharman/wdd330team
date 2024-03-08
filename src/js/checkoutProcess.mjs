import { getLocalStorage } from "./utils.mjs";
import { renderCartTotal } from "./total";

export function checkoutSummary() {
  const cartproducts = getLocalStorage("so-cart");
  const quantity = cartproducts.length;
  document.getElementById("num-items").innerHTML = quantity;
  const total = renderCartTotal();
  console.log("total", total);
  document.getElementById("cartTotal").innerHTML = "$" + total.toFixed(2);
  const tax = total * 0.06;
  document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
  const shipping = 10 + 2 * (cartproducts.length - 1);
  document.getElementById("shipping").innerHTML = "$" + shipping.toFixed(2);
  const orderTotal = total + shipping + tax;
  document.getElementById("orderTotal").innerHTML = "$" + orderTotal.toFixed(2);
}
