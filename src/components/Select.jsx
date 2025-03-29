import React,{useId} from "react";

const Select = React.forwardRef(function Select({
    options,
    label,
    clasName="",
    ...props
},ref) {
    const id =useId()
    return (
    <div>
    {label && <label
    htmlFor={id}
    className=""
    >
    </label>}
    <select
    className={`px-3 py-2 rounded-lg 
        bg-white text-black outline-none 
        focus:bg-gray-50 duration-200 border 
        border-gray-200
        w-full ${clasName}`}
    ref={ref}
    id={id}
    {...props}
    >
       {options?.map((option)=>(
        <option key={option} value={option}>
            {option}
        </option>
       ))}
    </select>

    </div>
)})
export default Select