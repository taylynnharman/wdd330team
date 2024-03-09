import productList from "./productList.mjs";
import { getParam, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const category = getParam("category");

// new ProductList({
//   target: document.querySelector(".products"),
//   props: { category: category },
// });

productList(".product-list", category);
