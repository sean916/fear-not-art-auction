import React, { useState, useEffect } from 'react';
import './CategoryForm.css';
import axios from 'axios'

const CategoryForm = () => {

    const [tempMessage, setTempMessage] = useState('')
    const [Name, setName] = useState('');
    let handleNameChange = (event) => {
        setName(event.target.value)
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        setTempMessage(`Attempting to add ${Name} to the database...`)

        let thisCategory = {
            Name: Name
        }
        axios.post('http://quiet-thicket-87706.herokuapp.com/api/category', thisCategory)
        .then(res => setTempMessage(res.data))
        

        // window.location = '/admin-tools'
    }

    return (
        <div className='Categoryform'>
            <br></br>
            <h2>New Category Form</h2>
            <br></br>
            <form onSubmit={handleSubmit}>
                <div className='Name'>
                    <label htmlFor='Name'>Category Name: </label>
                    <br></br>
                    <input name='Name' type='text' value={Name} onChange={handleNameChange}></input>
                </div>
                <div className='Submit'>
                    <input type='submit' value='Submit New Category'></input>
                </div>
            </form>
            <div>
                {tempMessage}
            </div>
        </div>
    )
}

export default CategoryForm
