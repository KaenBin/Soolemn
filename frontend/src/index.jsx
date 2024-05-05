import React from "react";
import ReactDOM from "react-dom/client";
// import { render } from "react-dom";
import configureStore from "@/redux/store/store";
import { auth } from "./services/firebase";
import "./index.css";
import {
  onAuthStateFail,
  onAuthStateSuccess,
} from "@/redux/actions/authActions";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const { store, persistor } = configureStore();
// const root = document.getElementById('app');
const root = ReactDOM.createRoot(document.getElementById("app"));

auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(onAuthStateSuccess(user));
  } else {
    store.dispatch(onAuthStateFail("Failed to authenticate"));
  }

  // render(<App store={store} persistor={persistor} />, root);
  root.render(<App store={store} persistor={persistor} />);
});

reportWebVitals();
