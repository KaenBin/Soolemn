const { doc, getDoc } = require("firebase/firestore");
const { db } = require("../configuration");

async function getData(collection, id) {
  let result = null;
  let error = null;
  try {
    result = await db
      .collection("" + collection)
      .doc("" + id)
      .get();
    return result.data();
  } catch (e) {
    error = e;
    throw e;
  }
}

async function getAllData(collection) {
  let result = [];
  let error = null;
  try {
    result = await db
      .collection("" + collection)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) =>
          result.push({ id: doc.id, ...doc.data() })
        );
        return result;
      });
    return result;
  } catch (e) {
    error = e;
    throw e;
  }
}

module.exports = { getData, getAllData };
