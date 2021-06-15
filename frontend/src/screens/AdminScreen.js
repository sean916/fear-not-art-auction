import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminScreen.css';

const AdminScreen = (props) => {

    const [user, setUser] = useState();

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }
      }, []);

    if (user == null || user.admin == false) {
        return (
            <div className='adminscreen'>
                You are not authorized to use this page. Please log in on an authorized account.
            </div>
        )
    }
    return (
        <div className='adminscreen'>
            <h1>Admin Screen</h1>
            
        </div>
    )
}

export default AdminScreen
