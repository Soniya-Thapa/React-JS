//if Button(props) used then props.title is written

function Button({title}){
  return(
    <>
    <button className="bg-green-700">{title}</button>
    </>
  )
}
export default Button