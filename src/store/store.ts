import {configureStore} from '@reduxjs/toolkit'
import {rootApi} from "../api/rootApi.ts";


export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [rootApi.reducerPath]: rootApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rootApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
//setupListeners(store.dispatch)