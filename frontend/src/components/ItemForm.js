import React, { useState, useEffect } from 'react'
import './ItemForm.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Multiselect } from 'multiselect-react-dropdown';
import {Image, Video, Transformation, cloudinary, CloudinaryContext} from 'cloudinary-react';


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

    // const [Artist, setArtist] = useState([]);
    // let handleArtistSelect = (event) => {
    //     console.log(event);
    //     setArtist(event);
    // }
    // let handleArtistRemove = (event) => {
    //     console.log(event);
    //     setArtist(event);
    // }

    // const [artistList, setArtistList] = useState([]);
    // const fetchArtistData = async () => {
    //     const response = await axios.get('/api/artist');
    //     setArtistList(response.data)
    // }

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

    const [imgFileStrArr, setImgFileStrArr] = useState([]);

    const [imgFileStr1, setImgFileStr1] = useState('');
    const [imgFileStr2, setImgFileStr2] = useState('');
    const [imgFileStr3, setImgFileStr3] = useState('');
    const [imgFileStr4, setImgFileStr4] = useState('');
    const [imgFileStr5, setImgFileStr5] = useState('');
    const [imgPreview1, setImgPreview1] = useState();
    const [imgPreview2, setImgPreview2] = useState();
    const [imgPreview3, setImgPreview3] = useState();
    const [imgPreview4, setImgPreview4] = useState();
    const [imgPreview5, setImgPreview5] = useState();

    let handleImgFile1Change = (e) => {
        
        const file = e.target.files[0];
        if (file == null) {
            setImgPreview1()
            return
        };
        const reader = new FileReader;
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgPreview1(reader.result)
            setImgFileStr1(reader.result)
        }
    }
    let handleImgFile2Change = (e) => {
        const file = e.target.files[0];
        if (file == null) {
            setImgPreview2()
            return
        };
        const reader = new FileReader;
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgPreview2(reader.result)
            setImgFileStr2(reader.result)
        }
    }
    let handleImgFile3Change = (e) => {
        const file = e.target.files[0];
        if (file == null) {
            setImgPreview3()
            return
        };
        const reader = new FileReader;
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgPreview3(reader.result)
            setImgFileStr3(reader.result)
        }
    }
    let handleImgFile4Change = (e) => {
        const file = e.target.files[0];
        if (file == null) {
            setImgPreview4()
            return
        };
        const reader = new FileReader;
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgPreview4(reader.result)
            setImgFileStr4(reader.result)
        }
    }
    let handleImgFile5Change = (e) => {
        const file = e.target.files[0];
        if (file == null) {
            setImgPreview5()
            return
        };
        const reader = new FileReader;
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgPreview5(reader.result)
            setImgFileStr5(reader.result)
        }
    }

    let handleImgRemove1 = (e) => {
        setImgFileStr1('');
        setImgPreview1();
    }
    let handleImgRemove2 = (e) => {
        setImgFileStr2('');
        setImgPreview2();
    }
    let handleImgRemove3 = (e) => {
        setImgFileStr3('');
        setImgPreview3();
    }
    let handleImgRemove4 = (e) => {
        setImgFileStr4('');
        setImgPreview4();
    }
    let handleImgRemove5 = (e) => {
        setImgFileStr5('');
        setImgPreview5();
    }

    let handleImgAdd = () => {
        setImgFileStrArr([
            imgFileStr1,
            imgFileStr2,
            imgFileStr3,
            imgFileStr4,
            imgFileStr5
        ]);
    }


    useEffect(() => {
        // Fetch data once
        fetchCategoryData()
        // fetchArtistData()
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
        // setArtist([]);
        setCategory([]);
        setImgFileStrArr([]);
        setImgFileStr1('')
        setImgFileStr2('')
        setImgFileStr3('')
        setImgFileStr4('')
        setImgFileStr5('')
        setImgPreview1()
        setImgPreview2()
        setImgPreview3()
        setImgPreview4()
        setImgPreview5()
    }
    
    let handleAddAnother = () => {
        setTempMessage('');
    }

    let handleSubmit = async (e) => {
        e.preventDefault();

        setTempMessage('Please Wait. Attempting to add photos to the database...');
        // Add photos from the backend to the API and return an array of URLS

        // Set imgURL to array of URLs

        setTempMessage('Please Wait. Attempting to add this item...');

        let thisItem = {
            LotNum: LotNum,
            Title: Title,
            Description: Description,
            Condition: Condition,
            LowEst: LowEst,
            HighEst: HighEst,
            StartPrice: StartPrice,
            // Artist: Artist,
            Category: Category,
            imgFileStrArr: imgFileStrArr
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

            {/* <div className='Artist'>
                    <label htmlFor='Artist'>Artist : </label>
                    { loading ? <h2>Loading...</h2> : (
                        <Multiselect options={artistList} displayValue="Name" onSelect={handleArtistSelect} onRemove={handleArtistRemove} />
                    )
                    }

                </div>
                <br></br> */}

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
                    <label htmlFor='imgURL'>Enter image Files: </label>
                    <br></br>
                    <input name='imgURL1' type='file' accept="image/*" onChange={handleImgFile1Change}></input><br></br><br></br>
                    <input name='imgURL2' type='file' accept="image/*" onChange={handleImgFile2Change}></input><br></br><br></br>
                    <input name='imgURL3' type='file' accept="image/*" onChange={handleImgFile3Change}></input><br></br><br></br>
                    <input name='imgURL4' type='file' accept="image/*" onChange={handleImgFile4Change}></input><br></br><br></br>
                    <input name='imgURL5' type='file' accept="image/*" onChange={handleImgFile5Change}></input><br></br><br></br>
                </div>
                <br></br>

                <div className='Submit'>
                    <input type='submit' onClick={handleImgAdd} value='Submit New Item'></input>
                </div>
                <br></br>
            </form>
            {tempMessage}

            {imgPreview1 && (
                <div className='img-preview-1'>
                    <span>Image 1 </span><span onClick={handleImgRemove1}><button>Remove this Image</button></span>
                    <img src={imgPreview1} alt='1' style={{ height: '150px'}} />
                    <br></br>
                </div>
            )}

            {imgPreview2 && (
                 <div className='img-preview-2'>
                    <span>Image 2 </span><span onClick={handleImgRemove2}><button>Remove this Image</button></span>
                    <img src={imgPreview2} alt='2' style={{ height: '150px'}} />
                    <br></br>
                </div>
            )}

            {imgPreview3 && (
                <div className='img-preview-3'>
                <span>Image 3 </span><span onClick={handleImgRemove3}><button><button>Remove this Image</button></button></span>
                <img src={imgPreview3} alt='3' style={{ height: '150px'}} />
                <br></br>
            </div>
            )}

            {imgPreview4 && (
                <div className='img-preview-4'>
                <span>Image 4 </span><span onClick={handleImgRemove4}><button>Remove this Image</button></span>
                <img src={imgPreview4} alt='4' style={{ height: '150px'}} />
                <br></br>
            </div>
            )}

            {imgPreview5 && (
                <div className='img-preview-5'>
                <span>Image 5 </span><span onClick={handleImgRemove5}><button>Remove this Image</button></span>
                <img src={imgPreview5} alt='5' style={{ height: '150px'}} />
                <br></br>
            </div>
            )}

            
        </div>
    )
}



export default ItemForm;