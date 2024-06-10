import React, { useEffect, useState } from "react";
import { fetchProductListAction, sortProductListAction } from "./actions"
import { useAppDispatch, useAppSelector, RootState } from "../../store"
import {Item} from "./types"

export const useProductList = () => {

    const dispatch = useAppDispatch();
    const products: Item[] = useAppSelector((state: RootState) => state.productList.productList.data);
    const [sort, setSort] = useState<string>("desc");

    useEffect(() => {
        dispatch(fetchProductListAction())
    }, []);

    useEffect(() => {
        const params = {
            sort: sort,
        };
        dispatch(sortProductListAction(params))

    },[sort]);

    const sortProductList = (): void => {
        if(sort === "desc"){
            setSort("")
        }else{
            setSort("desc")
        }
    }

    return{
        products,


        sortProductList
    }
}

