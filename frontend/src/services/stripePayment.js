import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";

import { auth, db } from "./firebase";

export const getCheckoutUrl = async (app, priceId) => {
  // pay subcription
  const userId = auth.currentUser?.uid;
  if (!userId) throw new Error("User is not authenticated");

  const checkoutSessionRef = collection(
    db,
    "customers",
    userId,
    "checkout_sessions"
  );

  const docRef = await addDoc(checkoutSessionRef, {
    mode: "payment",
    price: "price_1P7YYQIcJNDJCIe2ZVb3P06d",
    success_url: window.location.origin,
    cancel_url: window.location.origin,
  });

  return new Promise((resolve, reject) => {
    const unsubscribe = onSnapshot(docRef, (snap) => {
      const { error, url } = snap.data();
      if (error) {
        unsubscribe();
        reject(new Error(`An error occurred: ${error.message}`));
      }
      if (url) {
        console.log("Stripe Checkout URL:", url);
        unsubscribe();
        resolve(url);
      }
    });
  });
};

export const getPortalUrl = async (app) => {
  const user = auth.currentUser;

  let dataWithUrl;
  try {
    const functions = getFunctions(app, "asia-southeast2");
    const functionRef = httpsCallable(
      functions,
      "ext-firestore-stripe-payments-createPortalLink"
    );
    const { data } = await functionRef({
      customerId: user?.uid,
      returnUrl: window.location.origin,
    });

    dataWithUrl = data;
    console.log("Reroute to Stripe portal: ", dataWithUrl.url);
  } catch (error) {
    console.error(error);
  }

  return new Promise((resolve, reject) => {
    if (dataWithUrl.url) {
      resolve(dataWithUrl.url);
    } else {
      reject(new Error("No url returned"));
    }
  });
};
