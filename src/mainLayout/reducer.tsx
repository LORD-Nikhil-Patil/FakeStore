import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

import {fetchProductListAction} from "./actions";
import { Item } from "./types";

  interface productsListState {
    status: 'idle' | 'loading';
    data: Item[];
    searchData: Item[];
    error: string | null;
  }

  interface ProductState {
    productList: productsListState;
  }

const productsInitialState: ProductState = {
    productList: {
      status: "idle",
      data: [],
      searchData: [],
      error: null,
    },
  }


  const productSlice = createSlice({
    name: "ProductList",
    initialState: productsInitialState,
    reducers: {
      filterData(state, action: PayloadAction<Item[]>){
        state.productList = {
          status: 'idle',
          data: state.productList.data,
          searchData: action.payload,
          error: null,
        };
      }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchProductListAction.pending, (state) => {
            state.productList = {
              status: 'loading',
              data: [],
              searchData: [],
              error: null,
            };
          })
          .addCase(fetchProductListAction.fulfilled, (state, action: PayloadAction<Item[]>) => {
            state.productList = {
              status: 'idle',
              data: action.payload,
              searchData: [],
              error: null,
            };
          })
          .addCase(fetchProductListAction.rejected, (state, action: PayloadAction<string | undefined>) => {
            state.productList = {
              status: 'idle',
              data: [],
              searchData: [],
              error: action.payload || 'Unknown error',
            };
          });
      },
  });
  
  export default productSlice;


