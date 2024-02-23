function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export async function getData(category) {
  return fetch(`../json/${category}.json`)
    .then(convertToJson)
    .then((data) => {
      if (Array.isArray(data)) {
        return data;
        //Handle if the JSON file is not an array
      } else if (data.Result && Array.isArray(data.Result)) {
        return data.Result;
      } else {
        throw new Error("Invalid data format");
      }
    });
}

export async function findProductById(category, id) {
  const products = await getData(category);
  return products.find((item) => item.Id === id);
}
