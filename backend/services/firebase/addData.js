const { db } = require("../configuration");

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

async function createData(collection, id, data) {
  let result = null;
  let error = null;
  try {
    result = await db
      .collection(collection)
      .doc("" + id)
      .onSnapshot(data);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

async function updateData(collection, id, data) {
  let result = null;
  let error = null;
  try {
    result = await db
      .collection(collection)
      .doc("" + id)
      .update(data);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

module.exports = { addData, createData, updateData };
