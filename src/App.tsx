import React,{useState} from 'react';

import "./App.css"

import {BrowserRouter,Routes,Route} from "react-router-dom"
 
import { useQuery } from '@apollo/client';

import { CONTINENT_DATA } from './App.query';

import DisplayComponent from "./Components/Display/DisplayComponent"
import Select from './Components/Select/Select';

export type Continent = {
  name:string;
  code:string;
  countries:[];
}

const App: React.FC = ()  => {
  const [countryCode,changeCountryCode] = useState("AF")

  const { data, loading, error } = useQuery(CONTINENT_DATA, { variables: { code: `${countryCode}` } });

  const updateContinentCodeFunction = (value:string):void => {
    changeCountryCode(value)
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>There was an error</div>;
  else{
    const {continent}: { continent: Continent} = data
  return (
    <div className='div1'>
      <BrowserRouter>
      <Routes>
        <Route path="/GraphQl-TypeScript-Continents/" element={<Select countryCode={countryCode} updateContinentCodeFunction={updateContinentCodeFunction} />} />
        <Route path="/GraphQl-TypeScript-Continents/display" element={<DisplayComponent {...continent} />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
  }

}

export default App;