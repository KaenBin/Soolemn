import axios from "axios";
import { collection, doc, updateDoc, getDoc } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, db, storage } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

class API {
  createAccount = (form) => {
    console.log(form.email, form.password);
    createUserWithEmailAndPassword(auth, form.email, form.password).catch(
      (error) => console.log(error)
    );

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios
      .post("http://localhost:4000/signup", form, config)
      .catch((e) => console.log(e));
  };

  signIn = (form) => {
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((res) => localStorage.setItem("user", res.user.accessToken))
      .catch((error) => {
        console.log(error);
      });
  };

  // signInWithGoogle = () =>
  //   this.auth.signInWithPopup(new app.auth.GoogleAuthProvider());

  // signInWithFacebook = () =>
  //   this.auth.signInWithPopup(new app.auth.FacebookAuthProvider());

  // signInWithGithub = () =>
  //   this.auth.signInWithPopup(new app.auth.GithubAuthProvider());

  signOut = () => auth.signOut();

  // passwordReset = (email) => this.auth.sendPasswordResetEmail(email);

  // addUser = (id, user) => this.db.collection("users").doc(id).set(user);

  getUser = async (id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    return await axios
      .get("http://localhost:4000/user", { params: { email: id } })
      .then((res) => {
        return res.data;
      })
      .catch((e) => console.log(e));
  };

  getCurrentUser = () => auth.currentUser;

  updateUserData = async (wallet, id = auth.currentUser.email) => {
    const userRef = doc(db, "users", id);
    await updateDoc(userRef, {
      wallet,
    });
  };
  // updateMyProfile = (id, updates) => {
  //   updateProfile(auth.currentUser, updates)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // passwordUpdate = (password) => this.auth.currentUser.updatePassword(password);

  // changePassword = (currentPassword, newPassword) =>
  //   new Promise((resolve, reject) => {
  //     this.reauthenticate(currentPassword)
  //       .then(() => {
  //         const user = this.auth.currentUser;
  //         user
  //           .updatePassword(newPassword)
  //           .then(() => {
  //             resolve("Password updated successfully!");
  //           })
  //           .catch((error) => reject(error));
  //       })
  //       .catch((error) => reject(error));
  //   });

  // reauthenticate = (currentPassword) => {
  //   const user = this.auth.currentUser;
  //   const cred = app.auth.EmailAuthProvider.credential(
  //     user.email,
  //     currentPassword
  //   );

  //   return user.reauthenticateWithCredential(cred);
  // };

  // updateEmail = (currentPassword, newEmail) =>
  //   new Promise((resolve, reject) => {
  //     this.reauthenticate(currentPassword)
  //       .then(() => {
  //         const user = this.auth.currentUser;
  //         user
  //           .updateEmail(newEmail)
  //           .then(() => {
  //             resolve("Email Successfully updated");
  //           })
  //           .catch((error) => reject(error));
  //       })
  //       .catch((error) => reject(error));
  //   });

  // updateProfile = (id, updates) =>
  //   this.db.collection("users").doc(id).update(updates);

  // onAuthStateChanged = () =>
  //   new Promise((resolve, reject) => {
  //     this.auth.onAuthStateChanged((user) => {
  //       if (user) {
  //         resolve(user);
  //       } else {
  //         reject(new Error("Auth State Changed failed"));
  //       }
  //     });
  //   });

  // saveBasketItems = (items, userId) =>
  //   this.db.collection("users").doc(userId).update({ basket: items });

  // setAuthPersistence = () =>
  //   this.auth.setPersistence(app.auth.Auth.Persistence.LOCAL);

  // // // PRODUCT ACTIONS --------------

  // uploadImage = async (file, quantity) => {
  //   if (quantity === "single") {
  //     const dateTime = Date.now();
  //     const fileName = `images/${dateTime}`;
  //     const storageRef = ref(storage, fileName);
  //     const metadata = {
  //       contentType: file.type,
  //     };
  //     await uploadBytesResumable(storageRef, file.buffer, metadata);
  //     return fileName;
  //   }

  //   if (quantity === "multiple") {
  //     for (let i = 0; i < file.images.length; i++) {
  //       const dateTime = Date.now();
  //       const fileName = `images/${dateTime}`;
  //       const storageRef = ref(storage, fileName);
  //       const metadata = {
  //         contentType: file.images[i].mimetype,
  //       };

  //       const saveImage = await Image.create({ imageUrl: fileName });
  //       file.item.imageId.push({ _id: saveImage._id });
  //       await file.item.save();

  //       await uploadBytesResumable(storageRef, file.images[i].buffer, metadata);
  //     }
  //   }
  // };

  loadImage = async (url) => {
    return getDownloadURL(ref(storage, url))
      .then((url) => {
        return url;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getProduct = async (id) => {
    const productRef = doc(db, "products", id);
    const productSnap = await getDoc(productRef);

    if (productSnap.exists()) {
      return productSnap.data();
    } else {
      console.log("No such document!");
    }
  };

  getProducts = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    return await axios
      .get("http://localhost:4000/get-product", config)
      .then((res) => {
        return res.data;
      })
      .catch((e) => console.log(e));
  };
  // getProducts = (lastRefKey) => {
  //   let didTimeout = false;

  //   return new Promise((resolve, reject) => {
  //     (async () => {
  //       if (lastRefKey) {
  //         try {
  //           const query = this.db
  //             .collection("products")
  //             .orderBy(app.firestore.FieldPath.documentId())
  //             .startAfter(lastRefKey)
  //             .limit(12);

  //           const snapshot = await query.get();
  //           const products = [];
  //           snapshot.forEach((doc) =>
  //             products.push({ id: doc.id, ...doc.data() })
  //           );
  //           const lastKey = snapshot.docs[snapshot.docs.length - 1];

  //           resolve({ products, lastKey });
  //         } catch (e) {
  //           reject(e?.message || ":( Failed to fetch products.");
  //         }
  //       } else {
  //         const timeout = setTimeout(() => {
  //           didTimeout = true;
  //           reject(new Error("Request timeout, please try again"));
  //         }, 15000);

  //         try {
  //           const totalQuery = await this.db.collection("products").get();
  //           const total = totalQuery.docs.length;
  //           const query = this.db
  //             .collection("products")
  //             .orderBy(app.firestore.FieldPath.documentId())
  //             .limit(12);
  //           const snapshot = await query.get();

  //           clearTimeout(timeout);
  //           if (!didTimeout) {
  //             const products = [];
  //             snapshot.forEach((doc) =>
  //               products.push({ id: doc.id, ...doc.data() })
  //             );
  //             const lastKey = snapshot.docs[snapshot.docs.length - 1];

  //             resolve({ products, lastKey, total });
  //           }
  //         } catch (e) {
  //           if (didTimeout) return;
  //           reject(e?.message || ":( Failed to fetch products.");
  //         }
  //       }
  //     })();
  //   });
  // };

  // searchProducts = (searchKey) => {
  //   let didTimeout = false;

  //   return new Promise((resolve, reject) => {
  //     (async () => {
  //       const productsRef = this.db.collection("products");

  //       const timeout = setTimeout(() => {
  //         didTimeout = true;
  //         reject(new Error("Request timeout, please try again"));
  //       }, 15000);

  //       try {
  //         const searchedNameRef = productsRef
  //           .orderBy("name_lower")
  //           .where("name_lower", ">=", searchKey)
  //           .where("name_lower", "<=", `${searchKey}\uf8ff`)
  //           .limit(12);
  //         const searchedKeywordsRef = productsRef
  //           .orderBy("dateAdded", "desc")
  //           .where("keywords", "array-contains-any", searchKey.split(" "))
  //           .limit(12);

  //         // const totalResult = await totalQueryRef.get();
  //         const nameSnaps = await searchedNameRef.get();
  //         const keywordsSnaps = await searchedKeywordsRef.get();
  //         // const total = totalResult.docs.length;

  //         clearTimeout(timeout);
  //         if (!didTimeout) {
  //           const searchedNameProducts = [];
  //           const searchedKeywordsProducts = [];
  //           let lastKey = null;

  //           if (!nameSnaps.empty) {
  //             nameSnaps.forEach((doc) => {
  //               searchedNameProducts.push({ id: doc.id, ...doc.data() });
  //             });
  //             lastKey = nameSnaps.docs[nameSnaps.docs.length - 1];
  //           }

  //           if (!keywordsSnaps.empty) {
  //             keywordsSnaps.forEach((doc) => {
  //               searchedKeywordsProducts.push({ id: doc.id, ...doc.data() });
  //             });
  //           }

  //           // MERGE PRODUCTS
  //           const mergedProducts = [
  //             ...searchedNameProducts,
  //             ...searchedKeywordsProducts,
  //           ];
  //           const hash = {};

  //           mergedProducts.forEach((product) => {
  //             hash[product.id] = product;
  //           });

  //           resolve({ products: Object.values(hash), lastKey });
  //         }
  //       } catch (e) {
  //         if (didTimeout) return;
  //         reject(e);
  //       }
  //     })();
  //   });
  // };

  // getFeaturedProducts = (itemsCount = 12) =>
  //   this.db
  //     .collection("products")
  //     .where("isFeatured", "==", true)
  //     .limit(itemsCount)
  //     .get();

  // getRecommendedProducts = (itemsCount = 12) =>
  //   this.db
  //     .collection("products")
  //     .where("isRecommended", "==", true)
  //     .limit(itemsCount)
  //     .get();

  // addProduct = (id, product) =>
  //   this.db.collection("products").doc(id).set(product);

  // generateKey = () => this.db.collection("products").doc().id;

  // storeImage = async (id, folder, imageFile) => {
  //   const snapshot = await this.storage.ref(folder).child(id).put(imageFile);
  //   const downloadURL = await snapshot.ref.getDownloadURL();

  //   return downloadURL;
  // };

  // deleteImage = (id) => this.storage.ref("products").child(id).delete();

  // editProduct = (id, updates) =>
  //   this.db.collection("products").doc(id).update(updates);

  // removeProduct = (id) => this.db.collection("products").doc(id).delete();
}

const apiInstance = new API();
export const products = await apiInstance.getProducts();
export default apiInstance;
