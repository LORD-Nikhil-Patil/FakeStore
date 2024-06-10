import React, { useEffect, useState, useCallback } from "react";
import { fetchProductListAction, sortProductListAction, searchByCategoryAction } from "./actions"
import { useAppDispatch, useAppSelector, RootState } from "../../store"
import { Item } from "./types"

export const useProductList = () => {

    const dispatch = useAppDispatch();
    const products: Item[] = useAppSelector((state: RootState) => state.productList.productList.data);
    const searchedProduct: Item[] = useAppSelector((state: RootState) => state.productList.productList.searchData);
    const [sort, setSort] = useState<string>("desc");
    const [category, setCategory] = useState("select")

    const categorys = [
        "select",
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
    ];

    useEffect(() => {
        dispatch(fetchProductListAction())
    }, []);

    useEffect(() => {

        if (category === "select") {
            const params = {
                sort: sort,
            };
            dispatch(sortProductListAction(params))
        } else {
            const params = {
                category: category,
                sort: sort
            }
            dispatch(searchByCategoryAction(params))
        }

    }, [sort]);

    const sortProductList = (): void => {
        //if the category is selected on sort same category should be call 
        // on sort product page should be same
        if (sort === "desc") {
            setSort("")
        } else {
            setSort("desc")
        }
    }

    const headleCateagrySelect = useCallback((option: string): void => {
        setCategory(option)
        const params = {
            category: option,
            sort: sort
        }
        if (option === "select") {
            const params = {
                sort: sort,
            };
            dispatch(sortProductListAction(params))
            return
        }
        dispatch(searchByCategoryAction(params))
    }, [])
    return {
        products,
        searchedProduct,
        categorys,
        category,
        sortProductList,
        headleCateagrySelect
    }
}

