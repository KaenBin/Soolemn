const functions = require("firebase-functions");
const stripe = require("stripe")(
  "sk_test_51P4emDIcJNDJCIe2S5d5KZViJAHfWV45vjCZ4VloaX7jH6ektWN6UaG0lt6W5sNa0c22FqNjwtCch2z9yzmNB9Ko00DyF4CpuJ"
);
const admin = require("firebase-admin");

const serviceAccount = require("./ServiceAccountKey");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount[1]),
  storageBucket: "gs://soolemn-cc5b9.appspot.com",
});

const db = admin.firestore();
const auth = admin.auth();
const storage = admin.storage();
db.settings({ ignoreUndefinedProperties: true });

module.exports = {
  db,
  auth,
  storage,
  functions,
  stripe,
};
