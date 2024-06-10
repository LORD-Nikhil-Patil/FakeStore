import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector } from "../../store"
import { fetchProductList } from "./actions"
import { DropDownSelect } from "../../components/dropdown-select";
import { ProductList } from "../../components/productList";

const MainLayout = () => {
    
    const state = useAppSelector((state) => state.productList);
    const dispatch = useAppDispatch();

    useEffect(()=>{
     dispatch(fetchProductList())
    },[])
   console.log(state)
    return (<>
        <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
            <div className="flex justify-between ">
                <button className='flex items-center p-4 bg-slate-200'>
                    <span className="material-symbols-outlined">
                        sort
                    </span>
                </button>
                <div className='flex '>
                    <DropDownSelect />
                    <DropDownSelect />
                </div>
            </div>

            <ProductList />

        </main>
    </>)
}


export default MainLayout;
