import { combineReducers } from "redux";
import CardReducer from "./card.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  CardReducer,
});

export const persistedReducer = persistReducer(persistConfig, reducers);
