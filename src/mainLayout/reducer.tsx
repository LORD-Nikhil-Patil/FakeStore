import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

import {fetchProductListAction} from "./actions";
import { Item } from "./types";

  interface productsListState {
    status: true | false;
    data: Item[];
    searchData: Item[];
    error: string | null;
  }

  interface ProductState {
    productList: productsListState;
  }

const productsInitialState: ProductState = {
    productList: {
      status: true,
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
          status: false,
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
              status: true,
              data: [],
              searchData: [],
              error: null,
            };
          })
          .addCase(fetchProductListAction.fulfilled, (state, action: PayloadAction<Item[]>) => {
            state.productList = {
              status: false,
              data: action.payload,
              searchData: [],
              error: null,
            };
          })
          .addCase(fetchProductListAction.rejected, (state, action: PayloadAction<string | undefined>) => {
            state.productList = {
              status: false,
              data: [],
              searchData: [],
              error: action.payload || 'Unknown error',
            };
          });
      },
  });
  
  export default productSlice;


