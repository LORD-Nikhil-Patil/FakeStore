import { memo } from "react";
import { ToastContainer } from 'react-toastify';
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
        addToCart,
        handlePagination
    } = useProductList();

    return (<>
        <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
            <div className="flex justify-between ">
                <button className='flex items-center p-4 bg-slate-200' onClick={sortProductList} role="sort">
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
            <div className="flex items-center justify-center"> 
                <nav aria-label="Page navigation example" >
                    <ul className="inline-flex -space-x-px text-sm"  onClick={handlePagination} role="pagination">
                        <li >
                            <a className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                        </li>
                        <li>
                            <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                            <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                            <a aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                            <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                        </li>
                        <li>
                            <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                        </li>
                        <li>
                            <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <ToastContainer />
        </main>
    </>)
}


export default memo(MainLayout);
