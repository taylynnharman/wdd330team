import { findProductById } from "./productData.mjs";

let product = {};

export default async function productDetails(productId) {
  product = await findProductById(productId);
  renderProductDetails();
}

function renderProductDetails() {
  document.querySelector("#productName").innerText = product.Brand.Name;

  document.querySelector("#productNameWithoutBrand").innerText =
    product.NameWithoutBrand;
  document.querySelector("#productImage").src = product.Image;
  document.querySelector("#productImage").alt = product.Name;
  document.querySelector("#productFinalPrice").innerText = `$${product.FinalPrice}`;

// [][][][][] start of visual discount indicator block [][][][][][]
  // calculates and displays percent discount in contrasting fontstyle
  let srPrice = product.SuggestedRetailPrice;
  let fPrice = product.FinalPrice;
  let discount = ((srPrice-fPrice)/srPrice).toFixed(2);

  const discountPercent = document.createElement("span");
  discountPercent.id = "discountSpan";
  discountPercent.style.color = "orange";
  discountPercent.style.fontSize = "80%";
  discountPercent.innerHTML = ` -${discount}% `;

  // displays suggested retail price in in contrasting fontstyle
  const priceWas = document.createElement("del");
  priceWas.innerHTML = ` $${srPrice.toFixed(2)}`;
  priceWas.style.fontSize = "80%";
  priceWas.style.color = "gray";
  
  document.querySelector("#productFinalPrice").appendChild(discountPercent);
  document.querySelector("#productFinalPrice").appendChild(priceWas);

// [][][][][][] end of discount indicator block [][][][][][]


  document.querySelector("#productColorName").innerText =
    product.Colors[0].ColorName;
  document.querySelector("#productDescriptionHtmlSimple").innerHTML =
    product.DescriptionHtmlSimple;
  document.querySelector(".state-default").dataset.id = product.Id;
}
