const { doc, setDoc } = require("firebase/firestore");
const { db } = require("./index");

async function addData(collection, id, data) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, collection, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}

module.exports = addData;
