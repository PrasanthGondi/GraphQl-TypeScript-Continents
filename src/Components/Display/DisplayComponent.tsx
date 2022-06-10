import "./DisplayComponent.css"
import {Link} from "react-router-dom"

interface Props{
  name:string;
  code:string;
  countries:[]
}

const DisplayComponent = (props:Props) => {
  const {name,code,countries} = props
  console.log(name,code,"Hello")

  const getLanguages = (languagesArray:[]):string => {
    let lanList:[] = []
    languagesArray.map((el)=>lanList.push(el["name"]))
    return(lanList.join(" "))
  }

  return(<div className="App container">
    <Link to="/GraphQl-TypeScript-Continents/"><button className="buttonDisplay">To Selection</button></Link>
  <div className='container1'>
    <h1 className='heading'>Continent : {name}</h1>
    <h3 className='heading'>Code : {code}</h3>
    <h2 className='heading2'>Countries List</h2>
    <ul className='ul1'>{countries.map((evcoun)=><li className='d11' key={evcoun["name"]}>
    <ul className='ul2'>
        <li>Country : {evcoun["name"]}</li>
        <li>Currency : {evcoun["currency"]}</li>
        <li>Capital : {evcoun["capital"]}</li>
        <li>Languages : {getLanguages(evcoun["languages"])}</li>
    </ul>
</li>)}</ul>
  </div>
</div>)
}

export default DisplayComponent