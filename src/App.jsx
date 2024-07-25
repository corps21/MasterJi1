import { ChaiLink} from "./components"
import { Outlet } from "react-router-dom"
function App() {

  return (
    <div>
      <Outlet />
      <ChaiLink/>
    </div>
  )
}

export default App
