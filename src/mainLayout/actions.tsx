import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api";

import { Item } from "./types";

export const fetchProductList = createAsyncThunk<Item[], void, { rejectValue: string }>(
    'team/playerListLoading',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('products');
            return response.data;
        } catch (error) {
            return rejectWithValue('Failed to fetch product list');
        }
    }
);
