import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loan from "./slice/loanSlice";

const loanPersistConfig = {
    key: "loan",
    storage,
};

const rootReducer = combineReducers({ loan: persistReducer(loanPersistConfig, loan) });
//const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
//export const store = configureStore({ reducer: rootReducer, middleware: [thunk] });
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
