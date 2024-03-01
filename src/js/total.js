// import { getLocalStorage } from "./utils.mjs";

// const products = getLocalStorage();

//from instructor solution -ma
function calculateListTotal(list) {
  const amounts = list.map((item) => item.FinalPrice);
  const total = amounts.reduce((sum, item) => sum + item, 0);
  return total;
}
