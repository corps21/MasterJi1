import { ChaiLink , Table} from "./components"
import { Outlet } from "react-router-dom"
function App() {

  return (
    <>
      <Outlet />
      <Table />
      <ChaiLink/>
    </>
  )
}

export default App
