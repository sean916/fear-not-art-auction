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

    //   let handleClick = () => {
    //       window.open(`/items/${itemId}`, "_blank")
    //   }

    return (
        <a className='item' href={`/items/${itemId}`} target='_blank'>
            <img src={imgURL} alt='item' />
            <div className='item-info'>
                <p className='item-lotnum'>LotNum: {LotNum}</p>
                <p className='item-title'>{Title}</p>
                <div className='item-description'>
                    <p>{Description}</p>
                    <p>{Condition}</p>
                    {/* { Artist.length > 0 ? 
                        Artist.map(artist => {
                            <p>{artist.Name}</p>
                        }) : <p></p>
                        } */}
                </div>
                <div className='item-price'></div>
            </div>
        </a>
    )
}


export default Item
