import { getLocalStorage } from "./utils.mjs";
import { renderCartTotal } from "./total";

const checkoutProcess = {
  key: "",
  outputSelector: "",
  list: [],
  itemTotal: 0,
  shipping: 0,
  tax: 0,
  orderTotal: 0,
  init: function (key, outputSelector) {
    this.key = key;
    this.outputSelector = outputSelector;
    this.list = getLocalStorage(key);
    this.calculateItemSummary();
  },
  calculateItemSummary: function () {
    // calculate and display the total amount of the items in the cart, and the number of items.
  },
  calculateOrderTotal: function () {
    this.list = getLocalStorage(this.key);
    const quantity = this.list.length;
    const total = renderCartTotal();
    const tax = total * 0.06;
    const shipping = 10 + 2 * (this.list.length - 1);
    const orderTotal = total + shipping + tax;
    this.itemTotal = total;
    this.shipping = shipping;
    this.tax = tax;
    this.orderTotal = orderTotal;
    this.displayOrderSummary();
  },
  displayOrderSummary: function () {
    document.getElementById("num-items").innerHTML = this.list.length;
    document.getElementById("cartTotal").innerHTML =
      "$" + this.itemTotal.toFixed(2);
    document.getElementById("tax").innerHTML = "$" + this.tax.toFixed(2);
    document.getElementById("shipping").innerHTML =
      "$" + this.shipping.toFixed(2);
    document.getElementById("orderTotal").innerHTML =
      "$" + this.orderTotal.toFixed(2);
  },
};

export default checkoutProcess;
