import React from "react";


const Header = () => {

    return (
        <header className='flex justify-between shadow-md py-2 px-1 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
            <a href='#' className='flex items-center '>Fake Store</a>
            <div className='flex '>
                <button className='flex items-center m-2 p-3 rounded bg-slate-200 cursor-pointer' aria-pressed="false" role="navigation" aria-label='cart'>
                    <span className="material-symbols-outlined"    >
                        shopping_cart
                    </span>
                </button>
                <div className='flex items-center'>
                    <input
                        type="search"
                        className="relative m-0 block w-full rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.5rem] max-h-10 text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                        placeholder="Search"
                        aria-label="Search"
                        id="exampleFormControlInput4" />
                </div>
            </div>
        </header>
    )
}

export default Header;