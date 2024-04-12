
type Option = {
    label: string;
    value: string;
}

type Proptypes = {
    label?: string;
    name: string;
    defaultValue?: string;
    disabled?: boolean;
    options: Option[];
}



const Select = (props : Proptypes) => {
    const {label, name, defaultValue, disabled, options} = props;
    return(
        <>
            <div>
                <div className="flex flex-col gap-1">
                    <label className="text-sm" htmlFor={name}>{label}</label>
                    <select className="border-2 rounded-xl shadow-md outline-blue-600 text-sm pl-3 border-gray-500 p-2 w-full" name={name} id={name} defaultValue={defaultValue} disabled={disabled}>
                        {options.map((option) => (
                            <option key={option.label} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
}

export default Select;