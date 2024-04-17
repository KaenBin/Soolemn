const express = require("express");
const cors = require("cors");
const { authMiddleware, imagesMiddleware } = require("./middleware");
const { registerUser, signInUser, getUser } = require("./firebase");
const { addProduct, getProducts } = require("./firebase/products");
const { uploadImage } = require("./firebase/images");

const port = 4000;

const app = express();

// app.use("/", authMiddleware);

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

// auth
app.post("/signup", async (req, res) => {
  try {
    const response = await registerUser(req, res);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

app.post("/signin", async (req, res) => {
  try {
    const response = await signInUser(req, res);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

// user
app.get("/user", async (req, res) => {
  try {
    const response = await getUser(req, res);
    res.send(response.data());
  } catch (error) {
    res.send(error);
  }
});

// product
app.post("/add-product", async (req, res) => {
  try {
    const response = await addProduct(req.body, res);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

app.get("/get-product", async (req, res) => {
  try {
    const response = await getProducts(req, res);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

app.post("/test-upload", imagesMiddleware, async (req, res) => {
  const file = {
    type: req.file.mimetype,
    buffer: req.file.buffer,
  };

  try {
    const buildImage = await uploadImage(req.file, "single");
    res.send({
      status: "SUCCESS",
      imageName: buildImage,
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}/`)
);
