import React, { useState } from 'react';
import axios from 'axios';
import './LoginScreen.css'

const LoginScreen = (props) => {
    const [email, setEmail] = useState('');
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const [password, setPassword] = useState('');
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const [tempMessage, setTempMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        let thisUser = {
            email: email,
            password: password
        }

        setTempMessage(`Attempting to login ${thisUser.email} ...`)

        axios.post('/api/login', thisUser)
            .then((res => {
                console.log(res);
                
                if (res.data.email) { setTempMessage(`Welcome back, ${res.data.email}`) }
                else { setTempMessage(res.data) }
            }))
            .catch((err) => console.log(err));

    };


    let content;

    content = (
        <div className='loginscreen'>
            <h1>User Login</h1>

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
                <input type='submit' value='Login' />
            </form>
            <h3>{tempMessage}</h3>
            <br></br>

            <p>Don't have an account yet? <a href='/register'>Register Here</a></p>
        </div>
    )

    return content;
};

export default LoginScreen
