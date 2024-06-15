import { useEffect, useState } from 'react';
import { Item, cartProduct } from "./types"

export const useCartHook = () => {

    const [products, setProducts] = useState<cartProduct[]>(() => {
        const storedProducts = localStorage.getItem('products');
        return storedProducts ? JSON.parse(storedProducts) : [];
    });
    const [subtotal, setSubTotal] = useState<Number>();

    useEffect(()=> {
        handleSubtotal()
    },[products])


    const removeProduct = (product: Item): void => {
        const updatedProducts = products.filter(p => p.id !== product.id);

        localStorage.setItem('products', JSON.stringify(updatedProducts));
        setProducts(updatedProducts);
    }

    const addToCart = (action: string, product: Item): void => {
            const existingProduct = products.find(p => p.id === product.id);
            let updatedProducts = [...products];

            if (existingProduct) {
                if (action === "add") {
                    existingProduct.quantity += 1;
                } else if (action === "remove") {
                    if (existingProduct.quantity > 0) {
                        existingProduct.quantity -= 1;
                    }
                    if (existingProduct.quantity <= 0) {
                        updatedProducts = updatedProducts.filter(p => p.id !== product.id);
                    }

                }
            }

            localStorage.setItem('products', JSON.stringify(updatedProducts));
            setProducts(updatedProducts);
    }

    const handleSubtotal = () => {
        const total = products.reduce((subtotal, product) => subtotal + (product.price * product.quantity), 0);
        setSubTotal(total)
    }

    return{
        products,
        subtotal, 

        addToCart,
        removeProduct,
        handleSubtotal
    }
}


