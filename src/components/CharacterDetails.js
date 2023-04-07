import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function CharacterDetails(){

    const {characterId} = useParams();

    const [characterDetails, setCharacterDetails] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_APIURL}/characters/${characterId}`)
            .then( response => {
                setCharacterDetails(response.data)
            })
            .catch(e => {
                console.log("error getting character details from API...", e);
            })
    }, [characterId]);


    const renderDetails = () => {
        return (
            <div className="box">
                <h1>{characterDetails.name} </h1>
                Occupation: {characterDetails.occupation} <br />
                Weapon: {characterDetails.weapon} <br />
                Debt: {characterDetails.debt ? "Yes" : "No"} <br />
            </div>
        );
    }

    return(
        <>
            {characterDetails
                ? renderDetails()
                : <p>loading....</p>
            }

            <Link to="/">Back to Home</Link>
        </>
    )
}

export default CharacterDetails;