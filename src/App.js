import axios from 'axios';
import { useState, useEffect } from 'react';

import { Link, NavLink, Route, Routes } from 'react-router-dom';

import './App.css';
import CharacterDetails from './components/CharacterDetails';

function App() {

  const apiURL = "https://ih-crud-api.herokuapp.com"

  const [characters, setCharacters] = useState(null);


  useEffect(() => {
    axios.get(apiURL + "/characters")
      .then(response => {
        setCharacters(response.data);
      })
      .catch(e => {
        console.log("error getting characters from API...", e);
      })
  }, []);


  const renderCharacterList = () => {
    return characters.map( (characterDetails, index) => {
      return(
        <section key={index} className="box">
          <h1>{characterDetails.name} </h1>
          <Link to={`/characters/${characterDetails.id}`}>More details</Link>
        </section>
      ) 
    });
  }


  return (
    <div className="App">
      
      <header>
        <h1>React Characters App</h1>
      </header>

      <Routes>
        <Route path='/' element={characters ? renderCharacterList() : <p>loading....</p>} />
        <Route path='/characters/:characterId' element={<CharacterDetails />} />
      </Routes>


    </div>
  );
}

export default App;
