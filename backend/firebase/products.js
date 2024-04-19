const { ref, set, onValue } = require("firebase/database");
const { getDownloadURL } = require("firebase/storage");
const { db, auth, storage } = require("./index");
const addData = require("./addData");
const getData = require("./getData");

async function addProduct(
  { adminId, name, description, price, color, quantity, category, images = [] },
  res
) {
  const productID = Date.now();
  const productDoc = {
    adminId,
    name,
    description,
    price,
    color,
    stock: quantity,
    category,
    images,
    addedDate: new Date().toUTCString(),
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

async function getImageDownloadUrl(filePath) {
  try {
    // Create a reference to the file
    const fileRef = storage.bucket().file(filePath);

    // Get the download URL
    const downloadUrl = await getDownloadURL(fileRef);
    console.log(downloadUrl);
    // return downloadUrl;
  } catch (error) {
    console.error("Error getting download URL:", error);
    throw error;
  }
}

module.exports = { addProduct, getProducts, getImageDownloadUrl };
