import { useEffect, useState } from "react"

function LearningUseEffect() {
  //type 1 of useEffect hook (mainly used 80%)
  useEffect(() => {
    console.log("hello")
  }, [])

  //type 2 of useEffect hook (mainly used 19%)
  const [number, setNumber] = useState(0)
  const [number1, setNumber1] = useState(0)
  function increaseNumber() {
    setNumber(number + 1)
  }

  function increaseNumber1() {
    setNumber1(number1 + 1)
  }

  useEffect(() => {
    console.log("trigger")
  }, [number,number1]) //number ko state change huda pani function trigger hunxa

  //type 3 of useEffect hook (mainly used 1%)
  useEffect(() => {
    console.log("Type 3")
  }) // executes everytime when state change and page load
  
  return (
    <>
      <h1>Learning Use Effect !!!</h1>
      <h1>{number}</h1>
      <h1>{number1}</h1>
      <button onClick={increaseNumber}>+</button>
      <button onClick={increaseNumber1}>+</button>
    </>
  )

}
export default LearningUseEffect