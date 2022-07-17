import React from 'react'

const Button = ({ text, big }) => {
    return (
        <div className={`text-white hover:-translate-y-1 shadow-sm hover:shadow-md relative rounded-full cursor-pointer transition-all duration-500 flex items-center justify-center border-2 ${big ? 'h-12 px-12' : 'h-12 px-6'}  border-themeColor  bg-themeColor hover:opacity-90 `}>
            {text}
        </div>

    )
}

export default Button