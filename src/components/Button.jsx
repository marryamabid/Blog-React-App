import React from "react";

function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    disabled = false,
    ...props
}) {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300
                ${bgColor} ${textColor} ${className}
                ${!disabled ? "hover:brightness-110 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400" : "opacity-50 cursor-not-allowed"}
            `}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;