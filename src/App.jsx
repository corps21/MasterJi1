import { ChaiLink } from "./components"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <Outlet />
      <ChaiLink/>
    </>
  )
}

export default App
