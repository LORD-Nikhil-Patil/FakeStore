import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import {fetchProductDetailAction} from './action'
import { Item } from "./types"

import { useAppDispatch, useAppSelector, RootState } from "../../store"

export const useProductDetail = () =>{
     
    const { id } = useParams();
    const dispatch = useAppDispatch();

    const product: Item | null = useAppSelector((state: RootState) => state.productDetailSlice.productDetail.data);

    useEffect(()=>{
     dispatch(fetchProductDetailAction({id: Number(id)}))
    },[])

    return {
        product
    }
}