const { ref, set, onValue } = require("firebase/database");
const { db, auth } = require("./index");
const addData = require("./addData");
const getData = require("./getData");

async function addProduct(
  { adminId, name, description, price, quantity, category, images },
  res
) {
  const productID = Date.now();
  const productDoc = {
    adminId,
    name,
    description,
    price,
    stock: quantity,
    category,
    images,
    addedDate: userRef.metadata.creationTime || new Date().getTime(),
  };

  const productRef = await addData("products", productID, productDoc);
  if (productRef.error) console.log(productRef.error);
  else return { productID };
}

async function getProducts(req, res) {
  return await getData
    .getAllData("products")
    .then((data) => {
      return data;
    })
    .catch((e) => console.log(e));
}

module.exports = { addProduct, getProducts };
