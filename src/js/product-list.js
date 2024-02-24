import productList from "./productList.mjs";
import { getParam, loadHeaderFooter, displayCartBubble } from "./utils.mjs";

loadHeaderFooter();

const category = getParam("category");
productList(".product-list", category);
