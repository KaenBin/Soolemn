const admin = require("firebase-admin");
// const { getStorage, ref, uploadBytes } = require("firebase/storage");

const serviceAccount = require("./ServiceAccountKey");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount[1]),
});

const db = admin.firestore();
const auth = admin.auth();
// const storage = getStorage();

// const avatarRef = ref(storage, "../images/defaultAvatar.jpg");
// const bannerRef = ref(storage, "../images/defaultBanner.jpg");

// uploadBytes(avatarRef, file).then((snapshot) => {
//   console.log("Uploaded a blob or file!");
// });

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

module.exports = { registerUser, getUser, db, auth };
