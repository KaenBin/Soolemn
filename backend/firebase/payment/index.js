const functions = require("firebase-functions");
const stripe = require("stripe")(
  "sk_test_51P4emDIcJNDJCIe2S5d5KZViJAHfWV45vjCZ4VloaX7jH6ektWN6UaG0lt6W5sNa0c22FqNjwtCch2z9yzmNB9Ko00DyF4CpuJ"
);

module.exports = { functions, stripe };
