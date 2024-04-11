const { ref, set, onValue } = require("firebase/database");
const { db, auth } = require("./index");
const addData = require("./addData");

async function addProduct(
  { adminId, name, description, price, quantity, category, imageUrl },
  res
) {
  const productDoc = {
    productName: name,
    description: description,
    price: price,
    stock: quantity,
    category: category,
    // picture: imageUrl,
  };

  const productRef = await addData("products", "1", productDoc);
  if (productRef.error) console.log(productRef.error);
  else return productRef.result;
}

function getProduct(userId, name, email, imageUrl) {
  // const userId = auth.currentUser.uid;
  // return onValue(
  //   ref(db, "/users/" + userId),
  //   (snapshot) => {
  //     const username =
  //       (snapshot.val() && snapshot.val().username) || "Anonymous";
  //   },
  //   {
  //     onlyOnce: true,
  //   }
  // );
}

module.exports = { addProduct, getProduct };
