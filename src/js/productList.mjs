import { getData } from "./productData.mjs";
import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  return `<li class="product-card">
    <a href="product_pages/index.html?product=${product.id}">
    <img
      src="${product.Image}"
      alt="Image of ${product.Name}"
    />
    <h3 class="card__brand">${product.Brand}</h3>
    <h2 class="card__name">${product.Name}</h2>
    <p class="product-card__price">$${product.Price}</p></a>
    </li>`;
}

export default async function renderList(selector, category) {
  const element = document.querySelector(selector);
  const productList = await getData(category);
  renderListWithTemplate(productCardTemplate, element, productList);
}
