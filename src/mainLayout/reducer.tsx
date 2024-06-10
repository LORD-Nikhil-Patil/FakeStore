import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

import {fetchProductList} from "./actions";
import { Item } from "./types";

  interface productsListState {
    status: 'idle' | 'loading';
    data: Item[];
    error: string | null;
  }

  interface ProductState {
    productList: productsListState;
  }

const productsInitialState: ProductState = {
    productList: {
      status: "idle",
      data: [],
      error: null,
    },
  }


  const productSlice = createSlice({
    name: "user",
    initialState: productsInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchProductList.pending, (state) => {
            state.productList = {
              status: 'loading',
              data: [],
              error: null,
            };
          })
          .addCase(fetchProductList.fulfilled, (state, action: PayloadAction<Item[]>) => {
            state.productList = {
              status: 'idle',
              data: action.payload,
              error: null,
            };
          })
          .addCase(fetchProductList.rejected, (state, action: PayloadAction<string | undefined>) => {
            state.productList = {
              status: 'idle',
              data: [],
              error: action.payload || 'Unknown error',
            };
          });
      },
  });
  
  export default productSlice;


