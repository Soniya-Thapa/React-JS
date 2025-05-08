//yo tala ko function ko jasto lagla tara function haina yo "component" ho cause yesley jsx return gariraxa ... function bhaneko yo ho : function App(){ console.log("hello")} cause yesley jsx return gareko xaina

function App() {
  //js ko code component ra return ko bich ma lekhna parxa 
  let name = "Soniya"
  let address = "Kaushaltar"

  return (
    //browser ma dekhaunu parne xa bhani return bhitra lekhna parxa
    //<>:react fragments , dom ma entry hudaina ra js ko code lekhna xa bhani sadhai {} bhitra lekhna
    <>
      <h1>Hello World {1 + 1}</h1>
      <h2>Hello {name}!!! Your address is : {address}</h2> 
      <h3>Bye World</h3>
    </>
  )
}


export default App
