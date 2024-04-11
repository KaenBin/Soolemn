const { doc, getDoc } = require("firebase/firestore");
const { db } = require("./index");

async function getDocument(collection, id) {
  const docRef = doc(db, collection, id);
  let result = null;
  let error = null;

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

module.exports = getDocument;
