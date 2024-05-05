const express = require("express");
const cors = require("cors");
const { authMiddleware, imagesMiddleware } = require("./middleware");
const { registerUser, getUser } = require("./services/account");
const {
  addProduct,
  getProducts,
  getImageDownloadUrl,
  uploadImage,
  getProduct,
} = require("./services/product");
const {
  addToCart,
  deleteFromCart,
  deleteAllFromCart,
} = require("./services/user");
const { createStripeCheckout } = require("./services/payment");
const { getOrderByCustomer } = require("./services/order");

const port = 4000;

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://soolemn-ui-2.onrender.com",
    "https://soolemn-fe.onrender.com",
  ],
};

// app.use("/", authMiddleware);

app.use(express.json());

app.use(cors(corsOptions));

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

// app.post("/signin", async (req, res) => {
//   try {
//     const response = await signInUser(req, res);
//     res.send(response);
//   } catch (error) {
//     res.send(error);
//   }
// });

// USERS
app.get("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const response = await getUser(userId);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

// PRODUCTS
app.post("/product/add", async (req, res) => {
  try {
    const response = await addProduct(req.body);
    res.send(response);
  } catch (error) {
    throw new Error(JSON.stringify({ status: 400, error: error.message }));
  }
});

app.get("/get-product", async (req, res) => {
  try {
    const response = await getProduct(req.body.id);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

app.get("/get-products", async (req, res) => {
  try {
    const response = await getProducts(req, res);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

// IMAGES
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

app.get("/get-image-download-url", async (req, res) => {
  getImageDownloadUrl(req.body.filePath)
    .then((downloadUrl) => {
      console.log("Download URL:", downloadUrl);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

// CART
app.post("/add_to_cart", async (req, res) => {
  try {
    const { email, product_id, name, quantity, price, image, color } = req.body;
    const newItem = { product_id, name, quantity, price, image, color };
    const response = await addToCart(email, newItem);
    res.send(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/delete_from_cart/:productId", async (req, res) => {
  try {
    const { email } = req.body;
    const { productId } = req.params;
    const response = await deleteFromCart(email, productId);
    res.send(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/delete_all_cart/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const response = await deleteAllFromCart(email);
    res.send(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PAYMENT
app.post("/payment/checkout/:userId/:productId?", async (req, res) => {
  try {
    const { userId, productId } = req.params || null;
    const response = await createStripeCheckout(
      { ...req.body, userId, productId },
      productId ? "single" : "multiple"
    );
    res.send(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// app.put("/payment/checkout/:userId/:productId?/success", async (req, res) => {
//   try {
//     const { customerId } = req.params;
//     const response = await handleStripeCheckoutSuccess(customerId);
//     res.send(response);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// ORDER
app.get("/order/get-orders/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const response = await getOrderByCustomer(userId);
    res.send(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}/`)
);
