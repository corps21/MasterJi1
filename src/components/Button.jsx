/* eslint-disable react/prop-types */

function Button({value="",type="submit",className="",...props}) {
  return (
    <button type={type} className={`${className}`} {...props}>{value}</button>
  )
}

export default Button