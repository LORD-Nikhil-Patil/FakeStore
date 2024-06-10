import React, {useEffect} from "react";
import Header from "../header";
import { DropDownSelect } from "../../components/dropdown-select";
import { ProductList } from "../../components/productList";
import axios from "../../api";

const MainLayout = () => {
    
    useEffect(() => {
        axios.get('/products')
          .then(response => {
            console.log({ data: response });
          });
      }, [])

    return (<>
        <Header />
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