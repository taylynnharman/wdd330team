export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get("product");
  return product;
}

// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

/**
 * 
 * @param {CallableFunction} templateFn function to be run on the list items
 * @param {Element} parentElement the element the list items will be added to.
 * @param {Array} list An array of objects
 * @param {String} position 
 * @param {Boolean} clear a boolean indicating whether or not the element provided
 *                        should be cleared. True by default.
 */
export function renderListWithTemplate(templateFn, parentElement, list, position="afterbegin", clear=true) {
  // don't know if this was the intended solution, but here you go
  function filterItems(items) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].includes("880RT") || items[i].includes("989CG")) {
        items.splice(i, 1);
      }
    }
  }

  if (clear) {
    parentElement.innerHTML = "";
  }
  const htmlStrings = list.map(templateFn);
  filterItems(htmlStrings)
  parentElement.insertAdjacentHTML(position, htmlStrings.join(''));
}

export function renderWithTemplate(templateFn, parentElement, callback, position="afterbegin", clear=true) {
  // call to a function to get header and footer
  const template = `<p>test</p>`;

  if (clear) {
    parentElement.innerHTML = "";
  }

  parentElement.insertAdjacentHTML(position, template);
  if(callback) {
    callback(data);
  }
}


export function loadTemplate(path) {

  return async function () {
      const res = await fetch(path);
      if (res.ok) {
      const html = await res.text();
      return html;
      }
  };
} 