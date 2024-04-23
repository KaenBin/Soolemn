const { functions } = require("./index");
const { db } = require("../index");
const { stripe } = require("./index");

async function createStripeCheckout(data) {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: data.priceId,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: data.success_url,
    cancel_url: data.cancel_url,
  });
  return { url: session.url };
}

// exports.stripeWebhook = functions.https.onRequest(async (req, res) => {
//   const stripe = require("stripe")(functions.config().stripe.token);
//   let event;

//   try {
//     const whSec = functions.config().stripe.payments_webhook_secret;

//     event = stripe.webhooks.constructEvent(
//       req.rawBody,
//       req.headers["stripe-signature"],
//       whSec
//     );
//   } catch (err) {
//     console.error("⚠️ Webhook signature verification failed.");
//     return res.sendStatus(400);
//   }

//   const dataObject = event.data.object;

//   await db.collection("orders").doc().set({
//     checkoutSessionId: dataObject.id,
//     paymentStatus: dataObject.payment_status,
//     shippingInfo: dataObject.shipping,
//     amountTotal: dataObject.amount_total,
//   });

//   return res.sendStatus(200);
// });

module.exports = { createStripeCheckout };
