import React from "react";

type Inputtypes = {
    label: string;
    type: string;
    placeholder: string;
    name: string;
    className?: string;
    children?: React.ReactNode;
}

const Input = (props : Inputtypes) => {
    const { label, name, type, placeholder, className, children } = props;

    return(
    <div className="flex flex-col gap-1">
        <label htmlFor={name} className="text-sm">{label}</label>
        <input
            className={`border-2 rounded-xl shadow-md outline-blue-600 text-sm pl-3 border-gray-500 p-2 ${className}`}
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            required 
        />
        {children}
    </div>
    )
}

export default Input;