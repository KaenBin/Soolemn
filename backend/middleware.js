const firebase = require("./firebase/index");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const multipleImagesMiddleware = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).array("image", 12);

const imagesMiddleware = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 1000000 },
  fileFilter: async function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("image");

function checkFileType(file, cb) {
  const fileTypes = /jpeg|jpg|png|gif/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    return cb(null, true);
  } else {
    cb("Error: Images Only !!!");
  }
}

function authMiddleware(request, response, next) {
  const headerToken = request.headers.authorization;
  if (!headerToken) {
    return response.send({ message: "No token provided" }).status(401);
  }

  if (headerToken && headerToken.split(" ")[0] !== "Bearer") {
    response.send({ message: "Invalid token" }).status(401);
  }

  const token = headerToken.split(" ")[1];
  firebase
    .auth()
    .verifyIdToken(token)
    .then(() => next())
    .catch(() => response.send({ message: "Could not authorize" }).status(403));
}

module.exports = {
  multipleImagesMiddleware,
  imagesMiddleware,
  checkFileType,
  authMiddleware,
};
