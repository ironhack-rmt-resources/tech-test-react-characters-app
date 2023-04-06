import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

import './App.css';

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
          Occupation: {characterDetails.occupation} <br />
          Weapon: {characterDetails.weapon} <br />
          Debt: {characterDetails.debt ? "Yes" : "No"} <br />
        </section>
      ) 
    });
  }


  return (
    <div className="App">
      <h1>React Characters App</h1>

      { characters
        ? renderCharacterList()
        : "loading..."
      }

    </div>
  );
}

export default App;
