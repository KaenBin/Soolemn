const { db } = require("./index");

async function addToCart(email, newItem) {
  const userRef = db.collection("users").doc(email);
  const userDoc = await userRef.get();

  if (!userDoc.exists) {
    throw new Error("User not found.");
  }

  const userData = userDoc.data();

  if (!userData.cart) {
    userData.cart = [];
  }

  userData.cart.push(newItem);

  await userRef.update({ cart: userData.cart });

  return { message: "Item added to cart successfully." };
}

async function deleteFromCart(email, productId) {
  const userRef = db.collection("users").doc(email);
  const userDoc = await userRef.get();

  if (!userDoc.exists) {
    throw new Error("User not found.");
  }

  const userData = userDoc.data();

  if (!userData.cart) {
    return { message: "Cart is empty." };
  }

  userData.cart = userData.cart.filter(
    (product) => product.product_id !== productId
  );

  await userRef.update({ cart: userData.cart });

  return { message: "Product deleted from cart successfully." };
}

module.exports = { addToCart, deleteFromCart };