import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar__links'>
                <li>   
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/items'>
                        Gallery Items
                    </Link>
                </li>
                <li>
                    <Link to='/login'>
                        Login
                    </Link>
                </li>
                <li>
                    <Link to='/register'>
                        Register
                    </Link>
                    </li>
            </ul>
            
        </nav>
    )
}

export default Navbar
