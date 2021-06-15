import React, { useState, useEffect } from 'react'
import './RegisterScreen.css';
import axios from 'axios';

const RegisterScreen = (props) => {

    const [user, setUser] = useState();

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }
      }, []);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        
        let newUser = {
            email: email,
            password: password
        }

        setTempMessage(`Adding ${newUser.email}...`)


        axios.post('/api/register', newUser)
        .then(res => setTempMessage(res.data))

    }
    
    const [email, setEmail] = useState('');
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const [password, setPassword] = useState('');
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const [tempMessage, setTempMessage] = useState('');

    let content;
    if (!user) {
        content = (
            <div className='registerscreen'>
                <h1>Register a new account</h1>
                <br></br>

                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email : </label>
                        <br></br>
                        <input type='text' minLength='3' size='26' value={email} onChange={handleEmailChange} name='email' className='form-control'></input>
                    </div>
                    <br></br>
                    <br></br>
                    <div className='form-group'>
                        <label htmlFor='password'>Password : </label>
                        <br></br>
                        <input type='password' minLength='1' size='26' value={password} onChange={handlePasswordChange} name='password' className='form-control'></input>
                    </div>
                    <br></br>
                    <input type='submit' value='Submit' />
                </form>
                <h3>{tempMessage}</h3>
                <br></br>

                <p>Already registered? <a href='/login'>Log in</a></p>
            </div>
        )
        return content;
    } else {
        content = (
            <div className='registerscreen'>
                <h1>You are logged in as {user.email}</h1>
                <h1>Please logout to register a new account.</h1>
            </div>
        )
        return content;
    }
}

export default RegisterScreen
