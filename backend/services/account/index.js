const { getAuth } = require("firebase-admin/auth");
const { getData } = require("../firebase/getData");
const { addData } = require("../firebase/addData");

const { db } = "../configuration";

async function registerUser(req, res) {
  const userRef = await getAuth()
    .getUserByEmail(req.body.email)
    .then((userRecord) => {
      return userRecord;
    })
    .catch((error) => {
      console.log("Error fetching user data:", error);
    });

  const user = {
    id: req.body.userId,
    username: req.body.username,
    fullname: req.body.fullname,
    // avatar: defaultAvatar,
    // banner: defaultBanner,
    email: req.body.email,
    address: "",
    cart: [],
    orders: [],
    wallet: 0,
    role: req.body.role || "USER",
    dateJoined: userRef.metadata.creationTime || new Date().getTime(),
  };

  return addData("users", req.body.userId, user);
}

async function getUser(userId) {
  return await getData("users", userId);
}

async function updateUser(req, res) {
  const id = req.body.email;
  return db.collection("users").doc(id).update(req.body);
}

module.exports = { registerUser, getUser, updateUser };
