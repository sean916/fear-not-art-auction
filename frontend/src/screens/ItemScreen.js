import React, { useState, useEffect } from 'react'
import './ItemScreen.css'
import axios from 'axios';
import Item from '../components/Item';
import { Multiselect } from 'multiselect-react-dropdown';

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
    const [itemData, setItemData] = useState([]);
    const [categoriesList, setCategoriesList] = useState([]);
    const [artistList, setArtistList] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch all items from API
    async function fetchItemData() {
        const request = await axios.get('/api/item');
        setItemData(request.data)
        setItems(request.data)
        return;
    }
    // Fetch all categories from API
    async function fetchCategoryData() {
        const request = await axios.get('/api/category');
        setCategoriesList(request.data)
        return;
    }
    // Fetch all artists from API
    async function fetchArtistData() {
        const request = await axios.get('/api/artist');
        setArtistList(request.data)
        return;
    }

    // useEffect will run once on load and not again.
    useEffect( () => {
        fetchItemData();
        fetchCategoryData();
        fetchArtistData();
        setLoading(false)
    }, []);
    // Empty array dependency to run once on load but not again.

    const [inputValue, setInputValue] = useState('');
    const [selectedArtist, setSelectedArtist] = useState({});
    const [selectedCategory, setSelectedCategory] = useState({});

    // Master Filter Function
    useEffect(() => {
        {
            let filteredItems1 = itemData.filter(item => {
                return item._id.toString().includes(inputValue.toString()) ||
                       item.LotNum.toString().includes(inputValue.toString()) ||
                       item.Artist.Name.toLowerCase().includes(inputValue.toLowerCase()) ||
                       item.Title.toLowerCase().includes(inputValue.toLowerCase()) ||
                       item.Description.toLowerCase().includes(inputValue.toLowerCase()) ||
                       item.Condition.toLowerCase().includes(inputValue.toLowerCase())
            });

            let filteredItems2 = filteredItems1;

            if (selectedArtist && selectedArtist.length > 0) {
                console.log(selectedArtist[0].Name)
                filteredItems2 = filteredItems1.filter(item => {
                    return item.Artist.Name.includes(selectedArtist[0].Name)
                });
            }
    
            let filteredItems = filteredItems2;

            if (selectedCategory && selectedCategory.length > 0) {
                filteredItems = [];
                for (let i = 0; i < filteredItems2.length; i++) {
                    
                    if (filteredItems2[i].Category.length > 0) {
                        for (let j = 0; j < filteredItems2[i].Category.length; j++) {
                            if (filteredItems2[i].Category[j].Name == selectedCategory[0].Name) {
                                filteredItems.push(filteredItems2[i])
                            }
                        }
                    }
                }
            }
    
            setItems(filteredItems);
        }
    }, [inputValue, selectedArtist, selectedCategory]);


    // search filter
    let searchFilterOnChange = (e) => {
        setInputValue(e.target.value);
    }

    let handleArtistSelect = (event) => {
        setSelectedArtist(event);
    }
    let handleArtistRemove = () => {
        setSelectedArtist([]);
    }

    let handleCategorySelect = (event) => {
        setSelectedCategory(event)
    }

    let handleCategoryRemove = (event) => {
        setSelectedCategory([]);
    }
     

    return (
        <div className='itemscreen'>
            <h2 className='itemscreen-title'>Gallery Items</h2>
            <div className='item-filter'>
                <ul>
                    <span>Search : <input type='text' size='30' value={inputValue} onChange={searchFilterOnChange}></input></span>
                    <br></br>
                    <br></br>
                    <div className='artist-filter'>
                        <label htmlFor='Artist'>Filter by Artist : </label>
                        { loading ? <h2>Loading...</h2> : (
                            <Multiselect options={artistList} displayValue="Name" onSelect={handleArtistSelect} onRemove={handleArtistRemove} selectionLimit='1' />
                        )
                        }

                    </div>
                    <br></br>
                    <br></br>

                    <div className='category-filter'>
                        <label htmlFor='Category'>Filter by Category : </label>
                        { loading ? <h2>Loading...</h2> : (
                            <Multiselect options={categoriesList} displayValue="Name" onSelect={handleCategorySelect} onRemove={handleCategoryRemove} selectionLimit='1' />
                        )
                        }
                        
                    </div>
                    <br></br>
                    </ul>
               
            </div>
            <div className='item-sort'>
                Item Sort
            </div>
            <div className='item-grid'>
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
                    imgURL={item.imgURL[0]}
                    />)
                )}
            </div>
        </div>
    )
}

export default ItemScreen
