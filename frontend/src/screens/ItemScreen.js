import React, { useState, useEffect } from 'react'
import './ItemScreen.css'
import axios from 'axios';
import Item from '../components/Item'

const ItemScreen = () => {

    const [user, setUser] = useState();

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }
      }, []);

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch all items from API
    async function fetchAllData() {
        console.log('fetching data..')
        const request = await axios.get('/api/item');
        console.log(request.data);

        setItems(request.data)

        setLoading(false);
        return;
    }

    // useEffect will run once on load and not again.
    useEffect( () => {

        fetchAllData();
    }, []);
    // Empty array dependency to run once on load but not again.

    return (
        <div className='itemscreen'>
            <h2 className='itemscreen-title'>Gallery Items</h2>
            <div className='item-grid'>
                {/* Check 3:09 youtube */}
                { loading ? <h2>Loading...</h2> : items.map(item => (
                    <Item 
                    key={item._id}
                    itemId={item._id}
                    LotNum={item.LotNum}
                    Artist={item.Artist}
                    Title={item.Title}
                    Description={item.Description}
                    Condition={item.Condition}
                    Category={item.Category}
                    imageUrl={item.imageUrl}
                    />)
                )}
                {/* Can get rid of these Item renders once we pull data from api*/}
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}

export default ItemScreen
