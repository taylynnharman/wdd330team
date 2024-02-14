import productList from "./productList.mjs";
import { loadHeaderFooter } from "./utils.mjs";
import { displayCartBubble } from "./cartBubble";

loadHeaderFooter();

productList(".product-list", "tents");

setTimeout(() => {
  displayCartBubble();
}, 10);
