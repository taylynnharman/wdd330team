import { loadHeaderFooter } from "./utils.mjs";
import { displayCartBubble } from "./cartBubble";

loadHeaderFooter();

setTimeout(() => {
  displayCartBubble();
}, 20);
