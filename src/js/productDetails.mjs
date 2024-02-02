import { findProductById } from "./productData.mjs";
import { getLocalStorage, setLocalStorage } from "./utils.mjs";
let product = {};

export default async function productDetails(productId) {
    product = await findProductById(productId);
    renderProductDetails();

    // add listener to Add to Cart button
    document
        .getElementById("addToCart")
        .addEventListener("click", addToCartHandler);
};

let productData;

// Function to add a product to the cart
function addProductToCart(product) {
    // Get existing cart items
    const existingCart = getLocalStorage("so-cart") || [];

    // Add the new product to the cart
    existingCart.push(product);

    // Update the local storage with the updated cart
    setLocalStorage("so-cart", existingCart);
}

// add to cart button event handler
async function addToCartHandler(e) {
    const product = await findProductById(e.target.dataset.id);
    addProductToCart(product);
}

function renderProductDetails() {
    document.querySelector("#productName").innerHTML = product.Brand.Name;
    document.querySelector("#productNameWithoutBrand").innerText = product.NameWithoutBrand;
    document.querySelector("#productImage").src = product.Image;
    document.querySelector("#productImage").alt = product.Name;
    document.querySelector("#productFinalPrice").innerText = product.FinalPrice;
    document.querySelector("#productColorName").innerText = product.Colors[0].ColorName;
    document.querySelector("#productDescriptionHtmlSimple").innerHTML = product.DescriptionHtmlSimple;
    document.querySelector("#addToCart").dataset.id = product.Id;
}
