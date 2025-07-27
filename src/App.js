import Card from "./card"
import axios from "axios";
import './App.css';
import { useState, useEffect } from 'react';
function App() {
  const [searchVal, setSearchVal] = useState("")
  const [serachedFlagData , setSearchedFlagData] = useState([])
  const handleInputChange = (e) => {
    setSearchVal(e.target.value)
  }
  const fetchFlagData = async () => {
    try{
      const result =  await axios.get("https://countries-search-data-prod-812920491762.asia-south1.run.app/countries")
      const data = result.data
      
      if(searchVal){
        setSearchedFlagData(data.filter((obj)=>(obj.common.toLowerCase().includes(searchVal.toLowerCase()))))
      }else{
        setSearchedFlagData(data)
      }
    }catch(error){
      console.error(error)
    }
  }
  

  useEffect(()=> {
    
    fetchFlagData();
    
  },[searchVal])

  console.log(serachedFlagData)
  return (
    <div className="App">
     <input type="text" name="search" value={searchVal} onChange={handleInputChange} placeholder='Search for countries...' />
     {<div className="container">
      {serachedFlagData.map((obj)=> (
        <Card key={obj.common} name={obj.common} image={obj.png}/>
      ))}
     </div>}

    </div>
  );
}

export default App;
