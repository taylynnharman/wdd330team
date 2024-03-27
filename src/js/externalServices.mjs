const baseURL = import.meta.env.VITE_SERVER_URL;

async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw { name: "servicesError", message: data };
  }
}

export async function getProductsByCategory(category) {
  const response = await fetch(baseURL + `products/search/${category}`);
  const data = await convertToJson(response);
  return data.Result;
}

export async function findProductById(category, id) {
  const products = await getProductsByCategory(category);
  return products.find((item) => item.Id === id);
}

export async function loginRequest(creds) {
  return new Promise((resolve, reject) => {
    const loginData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(creds)
    };
  
    fetch(`${baseURL}login`, loginData)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to authenticate');
        }
        return response.json();
      })
      .then(data => {
        const token = data.accessToken;
        if (token) {
          resolve(token);
        } else {
          reject(new Error('Token not found in response'));
        }
      })
      .catch(error => {
        reject(error);
      });
  })
}