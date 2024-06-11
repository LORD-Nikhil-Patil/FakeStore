import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api";

import {Item} from "./types";

export const fetchProductDetailAction = createAsyncThunk<Item, {id: number}, { rejectValue: string }>(
    'product/productDetailLoading',
    async ({id}, { rejectWithValue }) => {
        console.log("id", id)
        try {
            const response = await axios.get(`products/${id}`);
            return response.data;
        } catch (error) {
            return rejectWithValue('Failed to fetch product list');
        }
    }
);