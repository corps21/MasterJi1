import chai from "../assets/chai.svg"

function ChaiLink() {
  return (
    <a href="https://www.chaicode.com" className="fixed bottom-[1.5rem] right-[10rem]" target="_blank">
        <img src={chai} alt=""/>
    </a>
  )
}

export default ChaiLink