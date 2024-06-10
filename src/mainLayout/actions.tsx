import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api";

import { Item } from "./types";

export const fetchProductListAction = createAsyncThunk<Item[], void, { rejectValue: string }>(
    'product/productListLoading',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('products');
            return response.data;
        } catch (error) {
            return rejectWithValue('Failed to fetch product list');
        }
    }
);

export const sortProductListAction = createAsyncThunk<Item[], {sort: string}, { rejectValue: string }>(
    'product/productListLoading',
    async ({sort}, { rejectWithValue }) => {
        try {
            const response = await axios.get('products', {params: {sort}});
            return response.data;
        } catch (error) {
            return rejectWithValue('Failed to fetch product list');
        }
    }
);

export const searchByCategoryAction = createAsyncThunk<Item[], {category: string, sort: string}, { rejectValue: string }>(
    'product/productListLoading',
    async ({category, sort}, { rejectWithValue }) => {
        try {
            const response = await axios.get(`products/category/${category}`, {params: {sort}});
            return response.data;
        } catch (error) {
            return rejectWithValue('Failed to fetch product list');
        }
    }
);