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
      const [loading, setLoading] = useState(true);
  
      // Fetch item from API
      async function fetchData() {
          console.log(`fetching data for ${match.params.id}`)
          const request = await axios.get(`/api/item/${match.params.id}`);
          console.log(request);
  
          setItem(request.data)
  
          setLoading(false);
          return;
      }
  
      // useEffect will run once on load and not again.
      useEffect( () => {
  
          fetchData();
      }, []);
      // Empty array dependency to run once on load but not again.


      return (
        <div className='item'>
            <img src='https://lh3.googleusercontent.com/pdcET6xEjdLFcVKj3goi_7g2RF8o_DnOCTS0MTBi9cHcDdMF21q_17ZLKgldPH0TSkAZL44258GUjL35n1IRJy8rfeWExFAZQIwZrhwjNKJXHq1TpuY8kPFQWlwPWgK0Wp5YkT46pyysR8JpiCwgaJdTPoXHtqntC47BWio1gPgdea_fiQ1nLm4Ssqj5r4suZ2m6jB965ITCyvZE3Yzob7HqWSsx8CchUYh3T3cRAp1nORD94iXGKpLI66mQDnIod6wDkhuKyO7bRn-lbGhDq_klllc9o9F9MGBm3cEACoeM6jRLLIze-K_vGSAcUc71xZSWpWWBrxLmS1CHEY8QQeWVapyT7Jz2PZXLTkBAlfZVHOYm4w38XjzQkH9ekBHebYyv1WFZMUd5srsaM3HgTX74TS6_hCurSdx8Y_Fffb9WCrHopBasPd1sWh1G0A2YHB17Yy2-Hk0nQuHpXt34UyL4z8Kgg81zB8nFHfLxGTp9Z__dQHCiBcCEfxA7MpgGhhfiE73cN6_LjWFJ5l2dobCdJY_sVR3PhPeHr9DOeHIV0iUuO14NrzOT7jwMKtgyBb7KGb4iCkmdc97WXuOHiwqhcm5BLflCUeUJ788ZXwAah9AvWyud9gAK2wRT_ePINHdyQD_81CsGClwMvu7B8jE7SlCdcDae9LUeQJPvsrBMmLB2WRD-xr8jN8B56ANbvA67Mhb7Qf2ipEadMArjeGY=w736-h831-no?authuser=1' alt='item' />
            <div className='item-info'>
                <p className='item-title'>{item.Title}</p>
                <div className='item-description'>
                    <p>{item.Description}</p>
                    <p>{item.Condition}</p>
                    <p>{item.Artist}</p>
                </div>
                <div className='item-price'>Current Price: 500</div>
            </div>
        </div>
    )
}

export default ItemDetailScreen
