import React, { useState, memo } from 'react';

export const DropDownSelect: React.FC<{ selected: string, options: string[], handleSelect: (option: string) => void }> = memo(({ selected, options, handleSelect }) => {
    const [open, isOpen] = useState(false);
    console.log("DropDownSelect")
    const handleToggle = () => {
        isOpen(!open)
    }
     const optionsHandler = ():string[] => {
        const notSelectedOpt = options.filter((option: string) => option !== selected)
        return notSelectedOpt
    }

    return (<div className="relative inline-block text-left m-4">
        <div>
            <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={handleToggle}>
                {selected}
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </button>
        </div>

        {open && <div className="absolute right-0 z-10 mt-2 w-30 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
            <div className="py-1" role="none">
                {optionsHandler && optionsHandler().map((itm: string) => <div className="block px-4 py-2 text-sm text-gray-700" key={itm} onClick={() =>{
                    handleSelect(itm);
                    handleToggle()
                }} role="menuitem" id="menu-item-0">{itm}</div>)}
            </div>
        </div>}
    </div>)
})
