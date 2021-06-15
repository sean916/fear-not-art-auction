import React from 'react'
import './HomeScreen.css';
import {Link} from 'react-router-dom';

const HomeScreen = () => {
    return (
        <div className='homescreen'>
            <div className='container'>
                <div className='header'>
                    <h1>Fear Not Art Gallery</h1>
                </div>
                <div className='items-btn'>
                    <Link to='/about-crypto'>
                        Learn About Crypto & NFTs
                    </Link>
                </div>
                <div className='items-btn'>
                    <Link to='/items'>
                        View Gallery Items
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen
