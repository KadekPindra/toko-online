import React from "react";

type Inputtypes = {
    label?: string;
    type: string;
    placeholder: string;
    name: string;
    className?: string;
    children?: React.ReactNode; 
    defaultValue?: string;
    disabled?: boolean;
}

const Input = (props : Inputtypes) => {
    const { label, name, type, placeholder, className, children, defaultValue, disabled } = props;

    return(
    <div className="flex flex-col gap-1">
        {label && <label htmlFor={name} className="text-sm">{label}</label>}
        <input
            className={`border-2 rounded-md shadow-md  outline-blue-600 text-sm pl-3 border-gray-500 p-2 ${className}`}
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            disabled={disabled}
            required 
        />
        {children}
    </div>
    )
}

export default Input;