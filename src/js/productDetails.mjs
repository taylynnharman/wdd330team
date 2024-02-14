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
  
  // discount visual indicator
  let sp = product.SuggestedRetailPrice;
  let fp = product.FinalPrice;
  let discount = ((sp-fp)/sp).toFixed(2);
  const indicator = document.createElement("span");
  indicator.innerHTML = ` -${discount}% was $${sp.toFixed(2)}`;
  document.querySelector("#productFinalPrice").appendChild(indicator);

  document.querySelector("#productColorName").innerText =
    product.Colors[0].ColorName;
  document.querySelector("#productDescriptionHtmlSimple").innerHTML =
    product.DescriptionHtmlSimple;
  document.querySelector(".state-default").dataset.id = product.Id;
}
