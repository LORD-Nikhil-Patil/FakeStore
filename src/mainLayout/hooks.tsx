import { useEffect, useState, useCallback } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

import { fetchProductListAction, sortProductListAction, searchByCategoryAction } from "./actions"
import { useAppDispatch, useAppSelector, RootState } from "../../store"
import { Item, cartProduct } from "./types"

export const useProductList = () => {

    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const products: Item[] = useAppSelector((state: RootState) => state.productList.productList.data);
    const productsListLoading: boolean = useAppSelector((state: RootState) => state.productList.productList.status);

    const searchedProduct: Item[] = useAppSelector((state: RootState) => state.productList.productList.searchData);
    const [sort, setSort] = useState<string>("desc");
    const [category, setCategory] = useState("select");


    const categorys = [
        "select",
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
    ];

    useEffect(() => {
        dispatch(fetchProductListAction())
    }, [dispatch]);

    const sortProductList =  useCallback((): void => {
        if (sort === "desc") {
            const params = {
                sort: "",
            };
            dispatch(sortProductListAction(params))
            setSort("")
        } else {
            const params = {
                sort: "desc",
            };
            dispatch(sortProductListAction(params));
            setSort("desc")
        }
    }, [dispatch, sort, products]);

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
    },  [dispatch, sort, products]);

    const handleProductDetail = useCallback((id: Number) => {
        navigate(`product/${id}`)
    }, [navigate]);

    const addToCart = useCallback((product: cartProduct) => {
        let products: cartProduct[] = JSON.parse(localStorage.getItem('products') || '[]');
        let existingProduct = products.find(p => p.id === product.id);
        
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            const cartProduct = {...product};
            cartProduct.quantity = 1;
            products.push(cartProduct);
        }

        localStorage.setItem('products', JSON.stringify(products));
        navigate("cart")
    },[navigate])
   
    const handlePagination = () =>{
        toast.error("Pagination API not available", {
            position: "top-center"
          });
    }
    return {
        products,
        searchedProduct,
        categorys,
        category,
        productsListLoading,

        sortProductList,
        headleCateagrySelect,
        handleProductDetail,
        addToCart,
        handlePagination
    }
}

