import { getProductsByCategory } from "./externalServices.mjs";
import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product, category) {
  return `<li class="product-card">
    <a href="../product_pages/index.html?category=${category}&product=${
    product.Id
  }">
    <img
      src="${product.Images.PrimaryLarge}"
      alt="Image of ${product.Name}"
    />
    <h3 class="card__brand">${product.Brand ? product.Brand.Name : ""}</h3>
    <h2 class="card__name">${product.Name}</h2>
    <p class="product-card__price">$${product.FinalPrice}</p></a>
    </li>`;
}
export default async function renderList(selector, category) {
  const element = document.querySelector(selector);
  const productList = await getProductsByCategory(category);

  renderListWithTemplate(
    (product) => productCardTemplate(product, category),
    element,
    productList
  );
}
