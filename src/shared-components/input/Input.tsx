type Propstypes = {
    label: string;
    type: string;
    placeholder: string;
    name: string;
    classname?: string;
    children?: React.ReactNode;
}

const Input = (props : Propstypes) => {
    const { label, name, type, placeholder, classname, children } = props;

    return(
    <div className="flex flex-col gap-1">
        <label htmlFor={name} className="text-sm">{label}</label>
        <input
            className={`border shadow-md placeholder:text-sm outline-blue-600 text-sm pl-3 border-gray-300 p-2 rounded-xl ${classname}`}
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

export default Input