import React, { useState, useEffect } from 'react'
import './FileForm.css';
import axios from 'axios';
import XLSX from 'xlsx';

const FileForm = () => {
    const [tempMessage, setTempMessage] = useState('');
    let selectedFile;
    let handleChange = (e) => {
        selectedFile = e.target.files[0];
    }

    let handleClick = (e) => {
        
        setTempMessage('Attempting to upload the file to the database...')

        if (selectedFile) {
            let fileReader = new FileReader();
            fileReader.readAsBinaryString(selectedFile);
            fileReader.onload = (event) => {
                let data = event.target.result;
                let workbook = XLSX.read(data,{type:"binary"})
                workbook.SheetNames.forEach(sheet => {
                    let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                    
                    console.log('About to clean the data')
                    // Clean the data <br/> in Description and $ to Num
                    for (let i = 0; i < rowObject.length; i++) {

                        if (rowObject[i].Description) {
                            let inputString = rowObject[i].Description;
                            rowObject[i].Description = inputString.replaceAll("<br/>", "");
                       }

                       if (rowObject[i].StartPrice) {
                           let inputString = rowObject[i].StartPrice.toString();
                           let newString = inputString.replaceAll("$", '')
                           rowObject[i].StartPrice = parseInt(newString);
                       }

                   }
                   console.log('filtered rowObject..')
                   console.log(rowObject);
                   axios.post('/api/item/file', rowObject)
                   .then((res) => setTempMessage(res.data));
                
                })
            }
        }
    }

    return (
        <div className='fileform'>
            <h2>Upload many items with a spreadsheet file</h2>
            <br></br>
            <div className='instructions'>
                <p>1. Choose a file with .xls or .xlsx format</p>
                <br></br>
                <p>2. Once you have chosen your file, click Upload</p>
            </div>
            <br></br>
            <div className='file-select'>
                <input type='file' accept=".xls,.xlsx" onChange={handleChange}></input>
                <button onClick={handleClick}>Upload</button>
            </div>
            <p>{tempMessage}</p>
        </div>
    )
}

export default FileForm
