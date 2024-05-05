const { functions, db, stripe } = require("../configuration");
const { addData, updateData } = require("../firebase/addData");
const { getData } = require("../firebase/getData");

async function createStripeCheckout(data, type) {
  if (type === "single") {
    const user = await getData("customers", data.userId);

    const product = await stripe.products.retrieve(data.productId);
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: product.default_price,
          quantity: data.quantity,
        },
      ],
      mode: "payment",
      customer: user.stripeId,
      billing_address_collection: "required",
      success_url: data.base_url + `/payment/checkout/success`,
      cancel_url: data.base_url + `/payment/checkout/cancel`,
    });

    // const order = {
    //   checkoutSessionId: session.id,
    //   createdDate: session.created,
    //   payment_status: session.payment_status,
    //   shippingInfo: session.shipping,
    //   amountTotal: session.amount_total,
    // };

    // const userOrder = await getData("users", data.userId);
    // await updateData("users", data.userId, {
    //   orders: [...userOrder.orders, order],
    // }).catch((e) => {
    //   throw new Error(e);
    // });

    return { url: session.url };
  }
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
