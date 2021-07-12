import React, { useState, useEffect } from 'react'
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ itemId, LotNum, Title, Description, Condition, Artist, Category, imgURL }) => {

    const [user, setUser] = useState();

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }
      }, []);


    return (
        <div className='item'>
            <img src={imgURL} alt='item' />
            <div className='item-info'>
                <p className='item-title'>{Title}</p>
                <div className='item-description'>
                    <p>{Description}</p>
                    <p>{Condition}</p>
                    { Artist && Artist.Name ? 
                    <p>{Artist.Name}</p> : <p></p>
                    }
                </div>
                <div className='item-price'>Current Price: 500</div>
                <Link to={`/items/${itemId}`} className='item-button'>
                    View Item
                </Link>
            </div>
        </div>
    )
}


export default Item
