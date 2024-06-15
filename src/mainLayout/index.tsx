import { memo } from "react";

import { DropDownSelect } from "../../components/dropdown-select";
import { ProductList } from "../../components/productList";
import { Spinner } from "../../components/spinner"
import { useProductList } from "./hooks";

const MainLayout = () => {
    const {
        products,
        searchedProduct,
        categorys,
        category,
        productsListLoading,
        sortProductList,
        headleCateagrySelect,
        handleProductDetail,
        addToCart
    } = useProductList();
    return (<>
        <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
            <div className="flex justify-between ">
                <button className='flex items-center p-4 bg-slate-200' onClick={sortProductList}>
                    <span className="material-symbols-outlined">
                        sort
                    </span>
                </button>
                <div className='flex'>
                    <DropDownSelect selected={category} options={categorys} handleSelect={headleCateagrySelect} />
                </div>
            </div>
            {!productsListLoading ? <ProductList
                products={searchedProduct.length === 0 ? products : searchedProduct}
                handleProductDetail={handleProductDetail}
                addToCart={addToCart}
            /> :
                <div className="h-screen w-full	flex items-center justify-center"><Spinner /></div>
            }
        </main>
    </>)
}


export default memo(MainLayout);
