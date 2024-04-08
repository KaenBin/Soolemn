const express = require("express");
const cors = require("cors");
const authMiddleware = require("./auth-middleware");
const { registerUser, signInUser, getUser } = require("./firebase");
const port = 4000;

const app = express();

// app.use("/", authMiddleware);

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

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

app.get("/user", async (req, res) => {
  try {
    const response = await getUser(req, res);
    res.send(response.data());
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}/`)
);
