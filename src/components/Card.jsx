/* eslint-disable react/prop-types */

function Card({src, ...props}) {
  return (
    <figure>
        <img src={src} alt="" className="w-[106px] h-[60px] rounded-[8px]" {...props}/>
    </figure>
  )
}

export default Card