import React, { useState, useEffect } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = (props) => {

    const [user, setUser] = useState();

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }
      }, []);

    return (
        <nav className='navbar'>
            <ul className='navbar__links'>
                <li>   
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/about-crypto'>
                        Crypto & NFTs
                    </Link>
                </li>
                <li>
                    <Link to='/items'>
                        Gallery Items
                    </Link>
                </li>
                <li>
                    <Link to='/login'>
                        Login / Logout
                    </Link>
                </li>
                <li>
                    <Link to='/register'>
                        Register
                    </Link>
                </li>
                { user && user.admin === true ?  
                    <li><Link to='/admin-tools'>Admin Tools</Link></li>
                : null }
            </ul>
            
        </nav>
    )
}

export default Navbar
