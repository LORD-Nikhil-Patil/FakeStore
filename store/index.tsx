import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import productSlice from "../src/mainLayout/reducer";
import productDetailSlice from "../src/productDetail/reducer";

const store = configureStore({
    reducer: {
        productList: productSlice.reducer,
        productDetailSlice: productDetailSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export default store;


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export type AppStore = typeof store;
