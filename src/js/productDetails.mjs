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
// discount flag showing dollar amount of discount taken off (ie: $20 off)
// UNDER CONSTRUCTION, and still deciding where to put it, next to name or over picture, etc.
let biggerPrice = product.SuggesteRetailPrice;
let smallerPrice = product.ListPrice;
let dollarsDiff = biggerPrice-smallerPrice;
const dollarsLess = document.createElement("p");
dollarsLess.innerText = `${biggerPrice}`;
// dollarsLess.innerHTML = "40 dollars off!";

document.querySelector("#productNameWithoutBrand").appendChild(dollarsLess);

  document.querySelector("#productImage").src = product.Image;
  document.querySelector("#productImage").alt = product.Name;
  document.querySelector("#productFinalPrice").innerText = product.FinalPrice;
  document.querySelector("#productColorName").innerText =
    product.Colors[0].ColorName;
  document.querySelector("#productDescriptionHtmlSimple").innerHTML =
    product.DescriptionHtmlSimple;
  document.querySelector(".state-default").dataset.id = product.Id;
}
