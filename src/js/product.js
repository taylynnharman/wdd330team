import { getParam } from "./utils.mjs";
import { findProductById } from "./productData.mjs";

import productDetails from "./productDetails.mjs";

const productId = getParam("product");
productDetails(productId);
//console.log("productId", findProductById(productId));
