import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Item from '../components/Item'
import './ItemDetailScreen.css';
import { Multiselect } from 'multiselect-react-dropdown';

const ItemDetailScreen = ({ match }) => {

    const [user, setUser] = useState();

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
            setTempMessage('You are logged in as an Admin and are able to edit or delete this Item.')
        }
    }, []);



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
        const response = await axios.get('http://quiet-thicket-87706.herokuapp.com/api/artist');
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
        const response = await axios.get('http://quiet-thicket-87706.herokuapp.com/api/category');
        setCategoriesList(response.data);
    }

    const [imgURL, setimgURL] = useState([])
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
        setimgURL([
            imgURL1,
            imgURL2,
            imgURL3,
            imgURL4,
            imgURL5
        ]);

        setImgFileStrArr([
            imgFileStr1,
            imgFileStr2,
            imgFileStr3,
            imgFileStr4,
            imgFileStr5
        ]);
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


    // Fetch item from API
    async function fetchData() {
        console.log(`fetching data for ${match.params.id}`)
        const request = await axios.get(`http://quiet-thicket-87706.herokuapp.com/api/item/${match.params.id}`);

        setLotNum(request.data.LotNum);
        setTitle(request.data.Title);
        setDescription(request.data.Description);
        setCondition(request.data.Condition);
        setLowEst(request.data.LowEst);
        setHighEst(request.data.HighEst);
        setStartPrice(request.data.StartPrice);
        console.log(request.data.Artist);
        setArtist(request.data.Artist);
        setCategory(request.data.Category);
        console.log(request.data.Category);
        setActiveImg(request.data.imgURL[0])
        setimgURL(request.data.imgURL)

        setImgURL1(request.data.imgURL[0])
        setImgURL2(request.data.imgURL[1])
        setImgURL3(request.data.imgURL[2])
        setImgURL4(request.data.imgURL[3])
        setImgURL5(request.data.imgURL[4])

        setLoading(false);

        return;
    }

    const [activeImg, setActiveImg] = useState('');
    let handleImgClick = (e) => {
        setActiveImg(e.target.id);
    }

    const [editStatus, setEditStatus] = useState(false);
    let handleEditClick = () => {
        setEditStatus(true);
    }

    // DELETE FUNCTION
    let handleDeleteClick2 = async (e) => {

        setTempMessage('Attempting to delete this item from the database');

        axios.delete(`http://quiet-thicket-87706.herokuapp.com/api/item/${match.params.id}`)
            .then(() => window.location.href = '/items')
    }

    let handleDeleteClick = (e) => {
        let newMessage = (
            <p onClick={handleDeleteClick2}>Click this message to permanently delete this item. If the delete is successful, you will be redirected to the Gallery Items page.</p>
        )
        setTempMessage(newMessage);
    }

    // useEffect will run once on load and not again.
    useEffect(() => {

        fetchData();
        fetchCategoryData()
        fetchArtistData()
        setLoading(false);
    }, []);

    let handleSubmit = async (e) => {
        e.preventDefault();
        setTempMessage('Please wait. Attempting to update the item in the database...');

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
            imgURL: imgURL,
            imgFileStrArr: imgFileStrArr,
            _id: match.params.id
        }

        console.log(thisItem);
        axios.patch(`http://quiet-thicket-87706.herokuapp.com/api/item/${match.params.id}`, thisItem)
            .then((res) => setTempMessage(res.data));
        setEditStatus(false);
    }

    if (editStatus == true) {
        return (
            <div className='itemform'>
                <h2>Edit Item</h2>
                <br></br>
                <form onSubmit={handleSubmit}>

                    {/* <div className='Artist'>
                    <label htmlFor='Artist'>Artist : </label>
                    { loading ? <h2>Loading...</h2> : (
                        <Multiselect selectedValues={Artist} options={artistList} displayValue="Name" onSelect={handleArtistSelect} onRemove={handleArtistRemove} />
                    )
                    }

                </div> */}
                    <br></br>

                    <div className='Category'>
                        <label htmlFor='Category'>Category : </label>
                        {loading ? <h2>Loading...</h2> : (
                            <Multiselect selectedValues={Category} options={categoriesList} displayValue="Name" onSelect={handleCategorySelect} onRemove={handleCategoryRemove} />
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
                        <p>You may have up to 5 images per Item.</p> <br></br>
                        <label htmlFor='imgURL'>Enter or Remove image URLs: </label>
                        <br></br>
                        <div><input name='imgURL1' type='text' size='60' value={imgURL1} onChange={handleImgURL1Change}></input><img src={imgURL1} alt='1' style={{ height: '60px' }} /></div><br></br>
                        <div><input name='imgURL2' type='text' size='60' value={imgURL2} onChange={handleImgURL2Change}></input><img src={imgURL2} alt='2' style={{ height: '60px' }} /></div><br></br>
                        <div><input name='imgURL3' type='text' size='60' value={imgURL3} onChange={handleImgURL3Change}></input><img src={imgURL3} alt='3' style={{ height: '60px' }} /></div><br></br>
                        <div><input name='imgURL4' type='text' size='60' value={imgURL4} onChange={handleImgURL4Change}></input><img src={imgURL4} alt='4' style={{ height: '60px' }} /></div><br></br>
                        <div><input name='imgURL5' type='text' size='60' value={imgURL5} onChange={handleImgURL5Change}></input><img src={imgURL5} alt='5' style={{ height: '60px' }} /></div><br></br>
                    </div>
                    <br></br>

                    <div className='imgURL'>
                        <label htmlFor='imgURL'>Enter image Files: </label>
                        <br></br>
                        <input name='imgURL1' type='file' accept="image/*" onChange={handleImgFile1Change}></input>{imgPreview1 && (
                            <div className='img-preview-1'>
                                <span>Image 1 </span><span onClick={handleImgRemove1}><button>Remove this Image</button></span>
                                <img src={imgPreview1} alt='1' style={{ height: '150px' }} />
                                <br></br>
                            </div>
                        )}<br></br><br></br>

                        <input name='imgURL2' type='file' accept="image/*" onChange={handleImgFile2Change}></input>{imgPreview2 && (
                            <div className='img-preview-2'>
                                <span>Image 2 </span><span onClick={handleImgRemove2}><button>Remove this Image</button></span>
                                <img src={imgPreview2} alt='2' style={{ height: '150px' }} />
                                <br></br>
                            </div>
                        )}<br></br><br></br>

                        <input name='imgURL3' type='file' accept="image/*" onChange={handleImgFile3Change}></input>{imgPreview3 && (
                            <div className='img-preview-3'>
                                <span>Image 3 </span><span onClick={handleImgRemove3}><button><button>Remove this Image</button></button></span>
                                <img src={imgPreview3} alt='3' style={{ height: '150px' }} />
                                <br></br>
                            </div>
                        )}<br></br><br></br>

                        <input name='imgURL4' type='file' accept="image/*" onChange={handleImgFile4Change}></input>{imgPreview4 && (
                            <div className='img-preview-4'>
                                <span>Image 4 </span><span onClick={handleImgRemove4}><button>Remove this Image</button></span>
                                <img src={imgPreview4} alt='4' style={{ height: '150px' }} />
                                <br></br>
                            </div>
                        )}<br></br><br></br>

                        <input name='imgURL5' type='file' accept="image/*" onChange={handleImgFile5Change}></input>{imgPreview5 && (
                            <div className='img-preview-5'>
                                <span>Image 5 </span><span onClick={handleImgRemove5}><button>Remove this Image</button></span>
                                <img src={imgPreview5} alt='5' style={{ height: '150px' }} />
                                <br></br>
                            </div>
                        )}<br></br><br></br>
                    </div>
                    <br></br>

                    <div className='Submit'>
                        <input type='submit' onClick={handleImgAdd} value='Submit Changes'></input>
                    </div>
                    <br></br>
                </form>
                {tempMessage}

            </div>
        )
    }

    if (user == null || user.admin == false) {
        return (
            <div className='item-detail'>

                <img id='active-img' src={activeImg} alt='item' />
                <div className='item-info'>
                    <p className='item-title'>{Title}</p>
                    <div className='item-description'>
                        <p className='item-lotnum'>LotNum: {LotNum}</p>
                        <p>{Description}</p>
                        <p>{Condition}</p>
                        {/* { Artist.length > 0 ? 
                        Artist.map(artist => {
                            <p>{artist.Name}</p>
                        }) : <p></p>
                        } */}
                    </div>
                </div>
                <div className='img-gallery'>
                    {
                        imgURL && imgURL.length > 1 ? imgURL.map(img => (
                            <img className='gallery-img' id={img} src={img} onClick={handleImgClick} />
                        )) : <p></p>
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div className='item-detail'>

                <img id='active-img' src={activeImg} alt='item' />
                <div className='item-info'>
                    <p className='item-title'>{Title}</p>
                    <div className='item-description'>
                        <p className='item-lotnum'>LotNum: {LotNum}</p>
                        <p>{Description}</p>
                        <p>{Condition}</p>
                        {/* { Artist.length > 0 ? 
                        Artist.map(artist => {
                            <p>{artist.Name}</p>
                        }) : <p></p>
                        } */}
                    </div>
                </div>
                <div className='img-gallery'>
                    {
                        imgURL && imgURL.length > 1 ? imgURL.map(img => (
                            <img className='gallery-img' id={img} src={img} onClick={handleImgClick} />
                        )) : <p></p>
                    }
                </div>
                <div className='admin-tools'>
                    <p>{tempMessage}</p>
                    <span className='item-button' onClick={handleEditClick}>Edit this item</span>
                    <span className='item-button' onClick={handleDeleteClick}>Delete this item</span>
                </div>
            </div>
        )
    }
}

export default ItemDetailScreen
