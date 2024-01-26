import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export default function productDetails(productId){};

let productData;


  function renderProductDetails() {

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
      // add listener to Add to Cart button
  document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);


  }

  
