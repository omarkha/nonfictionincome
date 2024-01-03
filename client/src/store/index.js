import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import businessReducer from "./reducers/businessReducer"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, businessReducer)


let store = createStore(persistedReducer)
let persistor = persistStore(store)
