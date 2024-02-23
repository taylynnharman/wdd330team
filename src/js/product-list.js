import productList from "./productList.mjs";
import { getParam, loadHeaderFooter } from "./utils.mjs";
import { displayCartBubble } from "./cartBubble";

loadHeaderFooter();
setTimeout(() => {
  displayCartBubble();
}, 20);

const category = getParam("category");
productList(".product-list", category);
