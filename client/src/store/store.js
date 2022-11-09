import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { dataApi } from './dataApi'
import dataReducer from './dataReducer';


export const store = configureStore({
    reducer: {
        [dataApi.reducerPath]: dataApi.reducer,
        dataCart: dataReducer,

    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(dataApi.middleware),
        

});

setupListeners(store.dispatch)