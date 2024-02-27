export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
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

export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = true
) {
  if (clear) {
    parentElement.innerHTML = "";
  }
  const htmlStrings = list.map(templateFn);
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}
export async function renderWithTemplate(
  templateFn,
  parentElement,
  data,
  callback,
  position = "afterbegin",
  clear = true
) {
  if (clear) {
    parentElement.innerHTML = "";
  }
  const htmlStrings = await templateFn(data);
  parentElement.insertAdjacentHTML(position, htmlStrings);

  if (callback) {
    callback(data);
  }
}

//Use Currying to allow renderWithTemplate to accept string instead of data
export async function loadTemplate(path) {
  return async function () {
    const response = await fetch(path);

    if (response.ok) {
      const html = await response.text();
      return html;
    } else {
      alert("HTTP-Error: " + response.status);
    }
    url.response.text;
  };
}

export function displayCartBubble() {
  const existingCart = getLocalStorage("so-cart");
  const cartLength = existingCart ? existingCart.length : 0;
  const bubble = document.getElementById("bubble");
  if (bubble) {
    if (cartLength > 0) {
      bubble.textContent = cartLength;
      bubble.classList.add("cart-bubble");
    } else {
      bubble.classList.remove("cart-bubble");
      document.getElementById("bubble").innerHTML = "";
    }
  }
}

export async function loadHeaderFooter() {
  const headerElement = document.querySelector("#home-header");
  const footerElement = document.querySelector("#home-footer");
  const headerTemplate = await loadTemplate("/partials/header.html");
  const footerTemplate = await loadTemplate("/partials/footer.html");
  renderWithTemplate(headerTemplate, headerElement);
  renderWithTemplate(footerTemplate, footerElement);
  setTimeout(() => {
    displayCartBubble();
  }, 50);
}
