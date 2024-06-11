import { memo } from "react";

import { DropDownSelect } from "../../components/dropdown-select";
import { ProductList } from "../../components/productList";

import {useProductList} from "./hooks";

const MainLayout = () => {

    const {
        products,
        searchedProduct,
        categorys,
        category,
        sortProductList,
        headleCateagrySelect,
        handleProductDetail
    } = useProductList();
    return (<>
        <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
            <div className="flex justify-between ">
                <button className='flex items-center p-4 bg-slate-200' onClick={sortProductList}>
                    <span className="material-symbols-outlined">
                        sort
                    </span>
                </button>
                <div className='flex '>
                    <DropDownSelect selected={category} options={categorys} handleSelect={headleCateagrySelect}/>
                </div>
            </div>
           {searchedProduct.length === 0 ? <ProductList products={products} handleProductDetail={handleProductDetail}/> : <ProductList products={searchedProduct} handleProductDetail={handleProductDetail} />}
        </main>
    </>)
}


export default memo(MainLayout);
