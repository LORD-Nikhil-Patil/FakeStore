import React from "react";

import { Item } from "../src/mainLayout/types"


interface ProductListProps {
    products: Item[];
    handleProductDetail: Function;
    addToCart: Function;
}


export const ProductList: React.FC<ProductListProps> = ({ products, handleProductDetail, addToCart }) => {

    return (<div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                    <a key={product.id} className="group">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" onClick={() => handleProductDetail(product.id)}>
                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700 max-h-10 min-h-10 overflow-hidden">{product.title}</h3>
                        <div className="flex justify-between pt-4">
                            <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                            <button className="bg-slate-300 text-black font-bold py-2 px-4 rounded-full text-right" onClick={()=> addToCart(product)}>
                                + Add To Cart
                            </button>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </div>)
}