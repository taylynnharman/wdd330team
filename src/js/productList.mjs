import { getData } from "./productData.js";

function productCardTemplate(product) {
  return `<li class="product-card">
    <a href="product_pages/index.html?product=${product.id}">
    <img
      src="${product.image}"
      alt="Image of ${product.name}"
    />
    <h3 class="card__brand">${product.brand}</h3>
    <h2 class="card__name">${product.name}</h2>
    <p class="product-card__price">$${product.price}</p></a>
    </li>`;
}

export default function renderList(selector, category) {
  const element = document.querySelector(selector);
  const productList = getData(category);
}
