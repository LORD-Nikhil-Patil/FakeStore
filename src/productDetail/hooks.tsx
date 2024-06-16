import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchProductDetailAction } from './action'
import { Item, cartProduct } from "./types"

import { useAppDispatch, useAppSelector, RootState } from "../../store"

export const useProductDetail = () => {

    const { id } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const product: Item | null = useAppSelector((state: RootState) => state.productDetailSlice.productDetail.data);
    const productLoading: boolean = useAppSelector((state: RootState) => state.productDetailSlice.productDetail.status);


    const [products] = useState<cartProduct[]>(() => {
        const storedProducts = localStorage.getItem('products');
        return storedProducts ? JSON.parse(storedProducts) : [];
    });

    const [quant, setQuant] = useState<number>(1);



    useEffect(() => {
        dispatch(fetchProductDetailAction({ id: Number(id) }));
    }, []);

    const addProduct = (): void => {
        setQuant(quant + 1)
    }

    const removeProduct = (): void => {
        if (quant > 1) {
            setQuant(quant - 1)
        }
    }

    const addToCart = () => {
        const existingProduct = products.find((p) => Number(p.id) === Number(id));
        const updatedProducts = [...products]
        if (existingProduct) {
            existingProduct.quantity += quant;
        } else {
            if (product) {
                const newProduct: cartProduct = {
                    ...product,
                    quantity: quant,
                }

                updatedProducts.push(newProduct)
            }

        }
        localStorage.setItem('products', JSON.stringify(updatedProducts));

        navigate('/cart')
    }

    return {
        product,
        productLoading,
        
        addToCart,
        addProduct,
        removeProduct,
        quant
    }
}