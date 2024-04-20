const { functions } = require("./index");
const { db } = require("../index");

exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
  const stripe = require("stripe")(functions.config().stripe.secret_key);
  const line_items = data.line_items;
  const success_url = data.success_url;
  const cancel_url = data.cancel_url;
  const customer = data.customer;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: data.success_url,
    cancel_url: data.cancel_url,
    // shipping_address_collection: {
    //   allowed_countries: ["VN"],
    // },
    line_items: data.line_items,
  });

  return {
    id: session.id,
  };
});

exports.stripeWebhook = functions.https.onRequest(async (req, res) => {
  const stripe = require("stripe")(functions.config().stripe.token);
  let event;

  try {
    const whSec = functions.config().stripe.payments_webhook_secret;

    event = stripe.webhooks.constructEvent(
      req.rawBody,
      req.headers["stripe-signature"],
      whSec
    );
  } catch (err) {
    console.error("⚠️ Webhook signature verification failed.");
    return res.sendStatus(400);
  }

  const dataObject = event.data.object;

  await db.collection("orders").doc().set({
    checkoutSessionId: dataObject.id,
    paymentStatus: dataObject.payment_status,
    shippingInfo: dataObject.shipping,
    amountTotal: dataObject.amount_total,
  });

  return res.sendStatus(200);
});
