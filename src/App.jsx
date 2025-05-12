//yo tala ko function ko jasto lagla tara function haina, yo "component" ho cause yesley jsx return gariraxa ... function bhaneko yo ho : function App(){ console.log("hello")} cause yesley jsx return gareko xaina

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import LearningUseEffect from "./LearningUseEffect"

function App() {
  // js ko code component ra return ko bich ma lekhna parxa 
  // let name = "Soniya"
  // let address = "Kaushaltar"

  return (
    //browser ma dekhaunu parne xa bhani return bhitra lekhna parxa
    //<>:react fragments , dom ma entry hudaina ra js ko code lekhna xa bhani sadhai {} bhitra lekhna
    // <>
    //   <h1 style={
    //     {color : "yellow",backgroundColor : "blue"}
    //     }>
    //       Hello World {1 + 1}</h1>
    //   <h2>Hello {name}!!! Your address is : {address}</h2> 
    //   <h3>Bye World</h3>
    // </>
    <BrowserRouter>
      <Routes>
{/* //jasari function lai hello() garera invoke garinxa tyesari nai componentlai <Home /> yesari invoke/call garinxa */}
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/contact" element = {<Contact />} />
        <Route path = "/learninguseeffect" element = {<LearningUseEffect />} />
        <Route path="/" element = {<h1>This is home page</h1>}/>
        <Route path="/about" element = {<h1>This is about page  </h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App


