import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LoginScreen.css'

const LoginScreen = (props) => {

    const [user, setUser] = useState();

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }
      }, []);

      
    const [email, setEmail] = useState('');
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const [password, setPassword] = useState('');
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const [tempMessage, setTempMessage] = useState('');

    const handleLogout = () => {
        setUser('');
        setEmail('');
        setPassword('');
        localStorage.clear();
        setTempMessage('');
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        let thisUser = {
            email: email,
            password: password
        }

        setTempMessage(`Attempting to login ${thisUser.email} ...`)

        const response = await axios.post('http://quiet-thicket-87706.herokuapp.com/api/login', thisUser)
        setUser(response.data)
        localStorage.setItem('user', JSON.stringify(response.data))
        console.log(response.data)
        setTempMessage(`Welcome back, ${response.data.email}`)
        const loggedInUser = localStorage.getItem('user');
        console.log(loggedInUser);

    };
    const handleAdminClick = (e) => {
        e.preventDefault();

        window.location.href='/admin-tools';

    }


    let content;
    if (user) {
        content = (
            <div className='loginscreen'>
                <h1>Logged in as {user.email}</h1>
                <button className='btn' onClick={handleLogout}>Click here to Logout</button>
                <br></br>
                {user.admin == true ? <button className='btn' onClick={handleAdminClick}>Click here for Admin Tools</button>
                : null}
            </div>
        )
        return content;
    } else {
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
                { user ? user.admin ? <h2>You have admin powers</h2> 
                : null : null }
                <br></br>
                <p>Don't have an account yet? <a href='/register'>Register Here</a></p>
            </div>
        )
        return content 
    }

};

export default LoginScreen
