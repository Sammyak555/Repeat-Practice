import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Searchbar from './Components/Searchbar';
import countries from './Utils/countries';


function App() {
  const [query,setquery] = useState('')
  const [suggestions,setSuggestions] = useState([])

  const queryHandler=useCallback((val)=>{
    setquery(val)
  })

  //filer the countries after the user type in inp box

  useEffect(()=>{
    if(query===''){
      setSuggestions([])
    }else{
      let textQuery = query.trim().toLowerCase()
      let newsuggestion = countries.filter((item)=>{
        return item.country.toLowerCase().indexOf(textQuery) !==-1 ? true : false
      }).map((item)=>item.country)
      setSuggestions(newsuggestion)
    }
  },[query])

  return (
    <div className="App">
     <h2>Search Bar</h2>
     <h3>Search Query :{query}</h3>
     <Searchbar queryHandler={queryHandler} suggestions={suggestions}/>
    </div>
  );
}

export default App;
