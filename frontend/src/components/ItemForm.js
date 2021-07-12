import React, { useState, useEffect } from 'react'
import './ItemForm.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Multiselect } from 'multiselect-react-dropdown';


const ItemForm = () => {

    const [loading, setLoading] = useState(true)
    const [tempMessage, setTempMessage] = useState('');

    const [LotNum, setLotNum] = useState(0)
    let handleLotNumChange = (event) => {
        setLotNum(event.target.value)
    }

    const [Title, setTitle] = useState('')
    let handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const [Description, setDescription] = useState('')
    let handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    const [Condition, setCondition] = useState('')
    let handleConditionChange = (event) => {
        setCondition(event.target.value)
    }

    const [LowEst, setLowEst] = useState('')
    let handleLowEstChange = (event) => {
        setLowEst(event.target.value)
    }

    const [HighEst, setHighEst] = useState('')
    let handleHighEstChange = (event) => {
        setHighEst(event.target.value)
    }

    const [StartPrice, setStartPrice] = useState('');
    let handleStartPriceChange = (event) => {
        setStartPrice(event.target.value)
    }

    const [Artist, setArtist] = useState([]);
    let handleArtistSelect = (event) => {
        console.log(event);
        setArtist(event);
    }
    let handleArtistRemove = (event) => {
        console.log(event);
        setArtist(event);
    }

    const [artistList, setArtistList] = useState([]);
    const fetchArtistData = async () => {
        const response = await axios.get('/api/artist');
        setArtistList(response.data)
    }

    const [Category, setCategory] = useState([]);
    let handleCategorySelect = (event) => {
        setCategory(event)
    }
    let handleCategoryRemove = (event) => {
        setCategory(event)
    }

    const [categoriesList, setCategoriesList] = useState([]);
    const fetchCategoryData = async () => {
        const response = await axios.get('/api/category');
        setCategoriesList(response.data);
    }

    const [imgURL, setImgURL] = useState([]);
    const [imgURL1, setImgURL1] = useState('');
    const [imgURL2, setImgURL2] = useState('');
    const [imgURL3, setImgURL3] = useState('');
    const [imgURL4, setImgURL4] = useState('');
    const [imgURL5, setImgURL5] = useState('');
    let handleImgURL1Change = (e) => {
        setImgURL1(e.target.value)
    }
    let handleImgURL2Change = (e) => {
        setImgURL2(e.target.value)
    }
    let handleImgURL3Change = (e) => {
        setImgURL3(e.target.value)
    }
    let handleImgURL4Change = (e) => {
        setImgURL4(e.target.value)
    }
    let handleImgURL5Change = (e) => {
        setImgURL5(e.target.value)
    }

    let handleImgAdd = () => {
        setImgURL([
            imgURL1,
            imgURL2,
            imgURL3,
            imgURL4,
            imgURL5
        ]);
    }


    useEffect(() => {
        // Fetch data once
        fetchCategoryData()
        fetchArtistData()
        setLoading(false);
      }, []);

    let resetForm = () => {
        setLotNum(0);
        setTitle('');
        setDescription('');
        setCondition('');
        setLowEst('');
        setHighEst('');
        setStartPrice('');
        setArtist([]);
        setCategory([]);
        setImgURL([]);
    }
    let handleAddAnother = () => {
        setTempMessage('');
    }

    let handleSubmit = async (e) => {
        e.preventDefault();

        setTempMessage('Attempting to add this item...');

        let thisItem = {
            LotNum: LotNum,
            Title: Title,
            Description: Description,
            Condition: Condition,
            LowEst: LowEst,
            HighEst: HighEst,
            StartPrice: StartPrice,
            Artist: Artist[0],
            Category: Category,
            imgURL: imgURL
        }

        console.log(thisItem);
        axios.post('/api/item', thisItem)
        .then((res) => setTempMessage(res.data));

        resetForm();
    }

      
    if (tempMessage.length > 1) {
        return (
            <div className='itemform'>
                <div>{tempMessage}</div>
                <br></br>
                <div><button id='anotherbtn' onClick={handleAddAnother}>Click to add another item</button></div>
            </div>
        )
    }
    return (
        <div className='itemform'>
            <h2>New Item Form</h2>
            <br></br>
            <form onSubmit={handleSubmit}>

            <div className='Artist'>
                    <label htmlFor='Artist'>Artist : </label>
                    { loading ? <h2>Loading...</h2> : (
                        <Multiselect options={artistList} displayValue="Name" onSelect={handleArtistSelect} onRemove={handleArtistRemove} selectionLimit='1' />
                    )
                    }

                </div>
                <br></br>

                <div className='Category'>
                    <label htmlFor='Category'>Category : </label>
                    { loading ? <h2>Loading...</h2> : (
                        <Multiselect options={categoriesList} displayValue="Name" onSelect={handleCategorySelect} onRemove={handleCategoryRemove} />
                    )
                    }

                </div>
                <br></br>

                <div className='LotNum'>
                    <label htmlFor='LotNum'>LotNum: </label>
                    <br></br>
                    <input name='LotNum' size='10' type='number' value={LotNum} onChange={handleLotNumChange}></input>
                </div>
                <br></br>

                <div className='Title'>
                    <label htmlFor='Title'>Title: </label>
                    <br></br>
                    <input name='Title' size='60' type='text' value={Title} onChange={handleTitleChange}></input>
                </div>
                <br></br>

                <div className='Description'>
                    <label htmlFor='Description'>Description: </label>
                    <br></br>
                    <textarea name='Description' rows='3' cols='60' value={Description} onChange={handleDescriptionChange}></textarea>
                </div>
                <br></br>

                <div className='Condition'>
                    <label htmlFor='Condition'>Condition: </label>
                    <br></br>
                    <textarea name='Condition' rows='3' cols='60' type='text' value={Condition} onChange={handleConditionChange}></textarea>
                </div>
                <br></br>

                <div className='LowEst'>
                    <label htmlFor='LowEst'>LowEst: </label>
                    <br></br>
                    <input name='LowEst' type='text' size='60' value={LowEst} onChange={handleLowEstChange}></input>
                </div>
                <br></br>

                <div className='HighEst'>
                    <label htmlFor='HighEst'>HighEst: </label>
                    <br></br>
                    <input name='HighEst' type='text' size='60' value={HighEst} onChange={handleHighEstChange}></input>
                </div>
                <br></br>

                <div className='StartPrice'>
                    <label htmlFor='StartPrice'>StartPrice: </label>
                    <br></br>
                    <input name='StartPrice' type='text' size='60' value={StartPrice} onChange={handleStartPriceChange}></input>
                </div>
                <br></br>

                <div className='imgURL'>
                    <label htmlFor='imgURL'>Enter image URLs: </label>
                    <br></br>
                    <input name='imgURL1' type='text' size='60' value={imgURL1} onChange={handleImgURL1Change}></input><br></br>
                    <input name='imgURL2' type='text' size='60' value={imgURL2} onChange={handleImgURL2Change}></input><br></br>
                    <input name='imgURL3' type='text' size='60' value={imgURL3} onChange={handleImgURL3Change}></input><br></br>
                    <input name='imgURL4' type='text' size='60' value={imgURL4} onChange={handleImgURL4Change}></input><br></br>
                    <input name='imgURL5' type='text' size='60' value={imgURL5} onChange={handleImgURL5Change}></input><br></br>
                </div>
                <br></br>

                <div className='Submit'>
                    <input type='submit' onClick={handleImgAdd} value='Submit New Item'></input>
                </div>
                <br></br>
            </form>
            {tempMessage}
            
        </div>
    )
}



export default ItemForm;