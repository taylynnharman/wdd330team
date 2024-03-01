import { getLocalStorage } from "./utils.mjs";
import { addProductToCart } from "./addToCart.js";

export function renderCartContents() {
  const cartproducts = getLocalStorage("so-cart");

  if (!cartproducts || cartproducts.length === 0) {
    document.querySelector(".product-list").innerHTML =
      "<h3>Your cart is currently empty!</h3>";
    return;
  }

  const groupedProducts = groupProductsByQuantity(cartproducts);
  const htmlproducts = groupedProducts.map((group) =>
    cartproductTemplate(group.product, group.quantity)
  );
  document.querySelector(".product-list").innerHTML = htmlproducts.join("");
}

export function renderCartTotal() {
  console.log("renderCartTotal called successfully.");
}

function groupProductsByQuantity(products) {
  const groupedProducts = [];
  const productMap = new Map();

  products.forEach((product) => {
    const productId = product.Id;
    if (productMap.has(productId)) {
      productMap.set(productId, productMap.get(productId) + 1);
    } else {
      productMap.set(productId, 1);
    }
  });

  productMap.forEach((quantity, productId) => {
    const product = products.find((p) => p.Id === productId);
    groupedProducts.push({ product, quantity });
  });

  return groupedProducts;
}

function cartproductTemplate(product, quantity) {
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
  <div class="quantity-controls">
    <button class="quantity-button remove" data-id="${product.Id}">-</button>
    <p class="cart-card__quantity">${quantity}</p>
    <button class="quantity-button add" data-id="${product.Id} ">+</button>
  </div>
  <p class="cart-card__price">$${product.FinalPrice}</p>
  <button class="remove-button" data-id="${product.Id}">X</button>
</li>`;

  return newproduct;
}

document.addEventListener("click", (event) => {
  const productId = event.target.getAttribute("data-id");
  if (event.target.classList.contains("add")) {
    addProductToCart("category", productId);
  } else if (event.target.classList.contains("remove")) {
    removeProductFromCart(productId);
  }
});

renderCartContents();
