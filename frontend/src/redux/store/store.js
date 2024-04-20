import { applyMiddleware, compose } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const authPersistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "profile", "basket", "checkout"],
  // whitelist: ["auth"],
};

export default () => {
  const persistedReducer = persistReducer(authPersistConfig, rootReducer);
  const store = configureStore(
    {
      reducer: persistedReducer,

      middleware: (getDefaultMiddleware) => [sagaMiddleware],
      // getDefaultMiddleware({
      //   serializableCheck: {
      //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      //   },
      // }),
    }
    // applyMiddleware(sagaMiddleware)
  );
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};
