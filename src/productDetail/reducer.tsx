import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import {fetchProductDetailAction} from "./action";

import { Item } from "./types";

interface productsDetailState {
    status: 'idle' | 'loading';
    data: Item | null;
    error: string | null;
  }

  interface ProductState {
    productDetail: productsDetailState;
  }

const productsInitialState: ProductState = {
    productDetail: {
      status: "idle",
      data: null,
      error: null,
    },
  }


  
  const productDetailSlice = createSlice({
    name: "ProductDetail",
    initialState: productsInitialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchProductDetailAction.pending, (state) => {
            state.productDetail = {
              status: 'loading',
              data: null,
              error: null,
            };
          })
          .addCase(fetchProductDetailAction.fulfilled, (state, action: PayloadAction<Item>) => {
            state.productDetail = {
              status: 'idle',
              data: action.payload,
              error: null,
            };
          })
          .addCase(fetchProductDetailAction.rejected, (state, action: PayloadAction<string | undefined>) => {
            state.productDetail = {
              status: 'idle',
              data: null,
              error: action.payload as string || 'Unknown error',
            };
          });
      },
  });
  
  export default productDetailSlice;

