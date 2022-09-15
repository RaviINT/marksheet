import { legacy_createStore as createStore } from "redux";
import { persistedReducer } from "../reducers/index";
import { persistStore } from "redux-persist";
const store = createStore(persistedReducer);
let persistor = persistStore(store);
console.log("store-->", store);

export { store, persistor };
