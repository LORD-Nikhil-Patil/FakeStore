import React, { memo } from "react";
import {useProductDetail} from "./hooks";
import StarRating from "./rating"
const ProductDetails = () => {

  const {product} = useProductDetail();
   
    return(<div className="font-sans tracking-wide max-md:mx-auto">
        {product && <div className="bg-gradient-to-r from-gray-600 via-gray-900 to-gray-900 md:min-h-[600px] grid items-start grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-8">
          <div className="lg:col-span-3 h-full">
            <div className="p-4 relative h-full flex items-center justify-center">
              <img src={product.image} alt="Product" className="lg:w-4/5 w-full h-full rounded-xl object-contain" />
            </div>
          </div>
  
          <div className="lg:col-span-2 bg-gray-200 py-6 px-8 h-full">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
              <div className="flex space-x-2 mt-2">
                <StarRating rating={product.rating.rate}/>
              </div>
            </div>
  
            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Price</h3>
              <p className="text-gray-800 text-3xl font-bold">${product.price}</p>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-800">Quantity</h3>
              <div className="flex divide-x border w-max mt-4 rounded overflow-hidden">
                <button type="button" className="bg-gray-100 w-10 h-9 font-semibold flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current inline" viewBox="0 0 124 124">
                    <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                  </svg>
                </button>
                <button type="button" className="bg-transparent w-10 h-9 font-semibold flex items-center justify-center text-gray-800 text-lg">
                  1
                </button>
                <button type="button" className="bg-gray-800 text-white w-10 h-9 font-semibold flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current inline" viewBox="0 0 42 42">
                    <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                  </svg>
                </button>
              </div>
            </div>
  
            <div className="flex flex-wrap gap-4 mt-8">
              <button type="button" className="min-w-[200px] px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded">Add to cart</button>
            </div>
  
            <div className="flex flex-wrap items-center text-sm text-gray-800 mt-8 font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-6 mr-3" viewBox="0 0 48 48">
                <path d="M15.5 33.3h19.1v2H15.5z" data-original="#000000" />
                <path d="M45.2 35.3H43v-2h2.2c.4 0 .8-.4.8-.8v-9.1c0-.4-.3-.6-.5-.7l-3.2-1.3c-.3-.2-.8-.5-1.1-1l-6.5-10c-.1-.2-.4-.3-.7-.3H2.8c-.4 0-.8.4-.8.8v21.6c0 .4.4.8.8.8h3.9v2H2.8C1.3 35.3 0 34 0 32.5V10.9c0-1.5 1.3-2.8 2.8-2.8h31.3c1 0 1.9.5 2.4 1.3l6.5 10 .4.4 2.9 1.2c1.1.5 1.7 1.4 1.7 2.5v9.1c0 1.4-1.3 2.7-2.8 2.7z" data-original="#000000" />
                <path d="M26.5 21H3.9v-9.4h22.6zM5.9 19h18.6v-5.4H5.9zm32.9 2H27.9v-9.4h6.3zm-8.9-2h5.7L33 13.6h-3.1zm-19 20.9c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6 5.6 2.5 5.6 5.6-2.5 5.6-5.6 5.6zm0-9.2c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6-1.6-3.6-3.6-3.6zm27.9 9.2c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6 5.6 2.5 5.6 5.6-2.5 5.6-5.6 5.6zm0-9.2c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6-1.6-3.6-3.6-3.6z" data-original="#000000" />
              </svg>
              Free delivery on order $100
            </div>
          </div>
        </div>}
      </div>)
}

export default memo(ProductDetails);