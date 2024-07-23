import chai from "../assets/chai.svg"

function ChaiLink() {
  return (
    <a href="https://www.chaicode.com" className="absolute bottom-[3%] right-[2rem]" target="_blank">
        <img src={chai} alt=""/>
    </a>
  )
}

export default ChaiLink