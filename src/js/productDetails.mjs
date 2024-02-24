import { findProductById } from "./productData.mjs";

let product = {};

export default async function productDetails(category, productId) {
  console.log("Category", category);
  console.log("Product Id from ProductDetails", productId);
  product = await findProductById(category, productId);

  renderProductDetails();
}

function renderProductDetails() {
  document.querySelector("#productName").innerText = product.Brand.Name;

  document.querySelector("#productNameWithoutBrand").innerText =
    product.NameWithoutBrand;
  document.querySelector("#productImage").src = product.Image;
  document.querySelector("#productImage").alt = product.Name;
  document.querySelector("#productFinalPrice").innerText = product.FinalPrice;
  document.querySelector("#productColorName").innerText =
    product.Colors[0].ColorName;
  document.querySelector("#productDescriptionHtmlSimple").innerHTML =
    product.DescriptionHtmlSimple;
  document.querySelector(".state-default").dataset.id = product.Id;
}
