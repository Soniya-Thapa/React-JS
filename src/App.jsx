//yo tala ko function ko jasto lagla tara function haina, yo "component" ho cause yesley jsx return gariraxa ... function bhaneko yo ho : function App(){ console.log("hello")} cause yesley jsx return gareko xaina

import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import SinglePage from "./pages/SinglePage"
import CreatePage from "./pages/CreatePage"
import EditPage from "./pages/EditPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/single-page" element = {<SinglePage />} />
        <Route path = "/create-page" element = {<CreatePage />} />
        <Route path = "/edit-page" element = {<EditPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


