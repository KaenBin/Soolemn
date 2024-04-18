const admin = require("firebase-admin");

const serviceAccount = require("./ServiceAccountKey");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount[1]),
  storageBucket: "gs://soolemn-cc5b9.appspot.com",
});

const db = admin.firestore();
const auth = admin.auth();
const storage = admin.storage();

async function registerUser(req, res) {
  const id = req.body.email;
  const userRef = await admin.auth().createUser({
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password,
    emailVerified: false,
    disabled: false,
  });
  const user = {
    fullname: req.body.fullname,
    // avatar: defaultAvatar,
    // banner: defaultBanner,
    email: req.body.email,
    address: "",
    basket: [],
    mobile: { data: {} },
    role: "USER",
    dateJoined: userRef.metadata.creationTime || new Date().getTime(),
  };
  return db.collection("users").doc(id).set(user);
}

async function getUser(req, res) {
  const id = req.query.email;
  return db.collection("users").doc(id).get();
}

async function updateUser(req, res) {
  const id = req.body.email;
  return db.collection("users").doc(id).update(req.body);
}

module.exports = { registerUser, getUser, db, auth, storage };
