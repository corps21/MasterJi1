/* eslint-disable react/prop-types */

export default function Header({className="", ...props}) {
    return <h1 className={`text-[5rem] font-bold text-white pt-[1.5rem] w-full text-center ${className}`} {...props} >
      Chai aur Code
    </h1>;
}