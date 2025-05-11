import { useState } from "react"

function Home() {

  console.log(useState())// yo hameley console ma duitali dekhxam bcoz of newfeature cld strictMode in main.jsx file. so if you dont want to repeat it two times just comment that part and exclude <App /> this part

  //something is a variable
  let something = useState(100)
  let myValue = something[0] //something ko 0th index = value
  let myFunction = something[1] //something ko 1th index = function

  function increaseMyValue() {
    //return myValue++  => yo garna paidaina ,, hamley hook ko function call garnai parxa
    myFunction(myValue++)
  }
  function decreaseMyValue() {
    myFunction(myValue--)
  }

  //Alternate process :

  let [myNumber, setMyNumber] = useState(100) //useState([1,2]) => myNumber ko value array 
  function increaseMyNumber() {
    //return myValue++  => yo garna paidaina ,, hamley hook ko function call garnai parxa
    setMyNumber(myNumber++)
  }
  function decreaseMyNumber() {
    setMyNumber(myNumber--)
  }
  return (
    <>
      <h1>Welcome !!!</h1>
      <h1>This is Home Page !!!</h1>
      <h1>{myValue}</h1>
      <button onClick={increaseMyValue}>+</button>
      <button onClick={decreaseMyValue}>-</button>
      <h1>Alternate Process : {myNumber}</h1>
      <button onClick={increaseMyNumber}>+</button>
      <button onClick={decreaseMyNumber}>-</button>
    </>
  )
}

export default Home

