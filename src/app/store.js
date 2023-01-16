import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { cryptoApi } from "../services/cryptoApi";
import { pokemonApi } from "../services/pokemonApi";

export const store =  configureStore({
    reducer: {
        [pokemonApi.reducerPath] : pokemonApi.reducer,
        [cryptoApi.reducerPath] : cryptoApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
});

setupListeners(store.dispatch)