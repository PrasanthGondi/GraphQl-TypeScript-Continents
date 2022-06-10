import "./Select.css"
import {useNavigate} from "react-router-dom"

type SelectProps = {
    countryCode: string,
    updateContinentCodeFunction(value:string):void
}


const Select = (props:SelectProps) => {
    const {updateContinentCodeFunction,countryCode} = props 
    let navigate = useNavigate()

    const OnChangee = (e: React.ChangeEvent<HTMLSelectElement>)=> {
        const newValue = e.target.value;
        updateContinentCodeFunction(newValue);
        navigate('/display')
     }

    return(<div className="selectdiv"><h1 className="ccheading1">Continents and Countries</h1>
    <h2 className="ccheading2">Select a Continent to display information about it's Countries</h2>
    <div className='selectV'><select name="cont" onChange={OnChangee} value={countryCode}>
    <option value="EU">Europe</option>
    <option value="AS">Asia</option>
    <option value="AN">Antarctica</option>
    <option value="NA">North America</option>
    <option value="OC">Oceania</option>
    <option value="SA">South America</option>
    <option value="AF">Africa</option>
  </select></div></div>)
}

export default Select