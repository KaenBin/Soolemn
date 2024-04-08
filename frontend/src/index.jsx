import React from "react";
import ReactDOM from "react-dom/client";
import configureStore from "@/redux/store/store";
import { auth } from "./services/firebase";
import "./index.css";
import {
  onAuthStateFail,
  onAuthStateSuccess,
  signOut,
} from "@/redux/actions/authActions";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const { store, persistor } = configureStore();
const root = ReactDOM.createRoot(document.getElementById("app"));

auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(onAuthStateSuccess(user));
  } else {
    store.dispatch(onAuthStateFail("Failed to authenticate"));
  }

  root.render(<App store={store} persistor={persistor} />);
});

reportWebVitals();
