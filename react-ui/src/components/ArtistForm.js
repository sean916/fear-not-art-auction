import React, { useState, useEffect } from 'react';
import './ArtistForm.css';
import axios from 'axios';

const ArtistForm = () => {

    const [tempMessage, setTempMessage] = useState('')
    const [Name, setName] = useState('');
    let handleNameChange = (event) => {
        setName(event.target.value)
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        setTempMessage(`Attempting to add ${Name} to the database...`)

        let thisArtist = {
            Name: Name
        }
        axios.post('/api/artist', thisArtist)
        .then(res => setTempMessage(res.data))
        

        // window.location = '/admin-tools'
    }

    return (
        <div className='artistform'>
            <br></br>
            <h2>New Artist Form</h2>
            <br></br>
            <form onSubmit={handleSubmit}>
                <div className='Name'>
                    <label htmlFor='Name'>Artist Name: </label>
                    <br></br>
                    <input name='Name' type='text' value={Name} onChange={handleNameChange}></input>
                </div>
                <div className='Submit'>
                    <input type='submit' value='Submit New Artist'></input>
                </div>
            </form>
            <div>{tempMessage}</div>
        </div>
    )
}

export default ArtistForm
