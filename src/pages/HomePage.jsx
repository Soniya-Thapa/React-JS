import Button from "../components/Button"

import { useEffect } from "react"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import axios from "axios"
function HomePage() {
  //backend integration in frontend:
  const fetchBooks = async()=>{
    const res = await axios.get("http://localhost:3000/books")
  }
  useEffect(()=>{
    fetchBooks()
  },[])
  return (
    <>
      <Navbar />

      <div className="flex-wrap flex">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      {/* <h1>This is Home Page !!!</h1>
      <h1 className="text-blue-300 bg-amber-950">Tailwind is successfully exported !!!</h1> */}

      {/* <Button title="Login" />
      <Button title="Create" />
      <Button title="Register" /> */}

    </>
  )
}
export default HomePage