import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  REHYDRATE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import contactsReducer from "./contact/contacts-reducer";
import authReducer from "./auth/auth-slice";
// import { number } from "prop-types";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, PAUSE, REHYDRATE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];
const authPersistConfig = {
  key: "auth",
  storage,

  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

// const persistor = persistStore(store);

// import storage from "redux-persist/lib/storage";

// const contactsPersistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ["filter"],
// };

// const store = configureStore({
//   reducer: { contacts: persistReducer(contactsPersistConfig, contactsReducer) },
//   middleware,
//   devTools: process.env.NODE_ENV === "development",
// });

// export default { store, persistor };

///////////////

// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   PAUSE,
//   REHYDRATE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";
// import contactsReducer from "./contact/contacts-reducer";
// import authReducer from "./auth/auth-slice";
// import { number } from "prop-types";

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, PAUSE, REHYDRATE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];
// const authPersistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token", " number"],
// };

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     auth: persistReducer(authPersistConfig, authReducer),
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === "development",
// });

// export const persistor = persistStore(store);
