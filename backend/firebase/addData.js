const { db } = require("./index");

async function addData(collection, id, data) {
  let result = null;
  let error = null;
  try {
    result = await db
      .collection(collection)
      .doc("" + id)
      .set(data);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

module.exports = addData;
