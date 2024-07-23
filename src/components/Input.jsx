/* eslint-disable react/prop-types */

import { forwardRef } from "react";
const Input = forwardRef(function Input({value="", className="", placeholder="", type="text", ...props}, ref) {
    return (
        <input type={type} placeholder={placeholder} value={value} className={`${className}`} ref={ref} {...props}/>
    )
})

export default Input