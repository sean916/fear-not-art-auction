import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Item from '../components/Item'
import './ItemDetailScreen.css';

const ItemDetailScreen = ({match}) => {

    const [user, setUser] = useState();

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }
      }, []);

      const [item, setItem] = useState({});
      const [activeImg, setActiveImg] = useState('');
      const [loading, setLoading] = useState(true);

      const [Description, setDescription] = useState('')
      const [Condition, setCondition] = useState('');
      const [Artist, setArtist] = useState('');
      const [ImgArray, setImgArray] = useState([])
  
      // Fetch item from API
      async function fetchData() {
          console.log(`fetching data for ${match.params.id}`)
          const request = await axios.get(`/api/item/${match.params.id}`);
          console.log(request);
  
          setDescription(request.data.Description);
          setCondition(request.data.Condition);
          setArtist(request.data.Artist);
          setActiveImg(request.data.imgURL[0])
          setImgArray(request.data.imgURL)
          setLoading(false);
          
          console.log(ImgArray)
          return;
      }

      let handleImgClick = (e) => {
        setActiveImg(e.target.id);
      }
  
      // useEffect will run once on load and not again.
      useEffect( () => {
  
          fetchData();
      }, []);
      // Empty array dependency to run once on load but not again.

      // TODO
      // Need to render activeImg and also render rest of img array and setActiveImg on Click
      return (
        <div className='item'>
            
            <img id='active-img' src={activeImg} alt='item' />
            <div className='item-info'>
                <p className='item-title'>{item.Title}</p>
                <div className='item-description'>
                    <p>{Description}</p>
                    <p>{Condition}</p>
                    { Artist && Artist.Name ? 
                    <p>{Artist.Name}</p> : <p></p>
                    }
                </div>
                <div className='item-price'>Current Price: 500</div>
            </div>
            <div className='img-gallery'>
                {
                    ImgArray && ImgArray.length > 1 ? ImgArray.map(img => (
                        <img className='gallery-img' id={img} src={img} onClick={handleImgClick} />
                    )) : <p></p>
                }
            </div>
        </div>
    )
}

export default ItemDetailScreen
