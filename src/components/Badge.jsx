/* eslint-disable react/prop-types */

function Badge({value="Unpublished", className="", ...props}) {
  return (
    <div className={`text-center bg-[#F3F3F3] rounded-[4px] border-2 border-[#A4A4A4] py-[.35rem] px-[.25rem] ${className}`} {...props}>{value}</div>
  )
}

export default Badge