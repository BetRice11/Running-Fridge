import React from 'react'


export const Hint = ({ label, children }) => {
    return (
        <div className="relative">
            {children}
            <span className="absolute left-0 z-10 w-max bg-black text-white text-xs px-1 py-0.5 rounded-sm pointer-events-none opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {label}
            </span>
        </div>
    )
}
