import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  PAUSE,
  REHYDRATE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import logger from "redux-logger";
import contactsReducer from "./contact/contacts-reducer";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, PAUSE, REHYDRATE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: { contacts: contactsReducer },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export default store;

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
