import { getLocalStorage } from "./utils.mjs";

export function renderCartContents() {
  const cartproducts = getLocalStorage("so-cart");
  const groupProducts = groupProductsByQuantity(cartproducts);
  const htmlproducts = cartproducts.map((product) =>
    cartproductTemplate(product)
  );
  document.querySelector(".product-list").innerHTML = htmlproducts.join("");
}
function groupProductsByQuantity(product) {
  const groupProducts = [];

  return groupProducts;
}

function cartproductTemplate(product) {
  const newproduct = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${product.Image}"
      alt="${product.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${product.Name}</h2>
  </a>
  <p class="cart-card__color">${product.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${product.FinalPrice}</p>
  <button class="remove-button" data-id="${product.Id}">X</button>
</li>`;

  return newproduct;
}

renderCartContents();
