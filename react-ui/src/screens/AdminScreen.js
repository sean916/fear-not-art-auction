import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminScreen.css';
import ItemForm from '../components/ItemForm';
import ArtistForm from '../components/ArtistForm';
import CategoryForm from '../components/CategoryForm';
import FileForm from '../components/FileForm';
import { Link } from 'react-router-dom';


const AdminScreen = (props) => {

    const [user, setUser] = useState();

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }
      }, []);

    const [activeComponent, setActiveComponent] = useState('');

    let newItemClick = () => {
        setActiveComponent('newItemForm')
    }

    let spreadsheetClick = () => {
        setActiveComponent('newSpreadsheetForm')
    }

    let existingItemsClick = () => {
        // setActiveComponent('existingItems')
        window.location.href = '/items'
    }

    let newArtistClick = () => {
        setActiveComponent('newArtistForm')
    }

    let newCategoryClick = () => {
        setActiveComponent('newCategoryForm')
    }

    if (user == null || user.admin == false) {
        return (
            <div className='adminscreen'>
                You are not authorized to use this page. Please log in on an authorized account.
            </div>
        )
    }


    let adminNav = (
        <div className='adminHeader'>
            <br></br>
            <h1>Admin Tools</h1>
            <div className='adminNav'>
                <ul>
                    <button onClick={spreadsheetClick}>Upload many items with a spreadsheet</button>
                    <br></br>
                    <button onClick={existingItemsClick}>View and Edit Existing Items</button>
                    <br></br>
                    <button onClick={newItemClick}>Add a new Item</button>
                    <br></br>
                    {/* <button onClick={newArtistClick}>Add a new Artist</button>
                    <br></br> */}
                    <button onClick={newCategoryClick}>Add a new Category</button>
                    <br></br>
                </ul>
            </div>
            <br></br>
            <hr></hr>
            <br></br>
        </div>
    )

    let content;

    if (activeComponent == '') {
        content = (
            <div className='adminscreen'>
                {adminNav}
            </div>
        )
    }

    if (activeComponent == 'newSpreadsheetForm') {
        content = (
            <div className='adminscreen'>
                {adminNav}
                <div className='spreadsheetForm'>
                    <FileForm />
                </div>
            </div>
        )
    }

    if (activeComponent == 'newItemForm') {
        content = (
            <div className='adminscreen'>
                {adminNav}
                <div className='itemForm'>
                    <ItemForm />
                </div>
            </div>
        )
    }

    if (activeComponent == 'newArtistForm') {
        content = (
            <div className='adminscreen'>
                {adminNav}
                <div className='artistForm'>
                    <ArtistForm />
                </div>
            </div>
        )
    }

    if (activeComponent == 'newCategoryForm') {
        content = (
            <div className='adminscreen'>
                {adminNav}
                <div className='categoryForm'>
                    <CategoryForm />
                </div>
            </div>
        )
    }

    // TODO Upload XL document
    // TODO Create a new item
    // TODO View existing items (sort by ?)
    // TODO Edit an existing item (add photos)
    // TODO Delete an existing item
    // TODO New Artist
    // TODO New Category



    return content;
}

export default AdminScreen
