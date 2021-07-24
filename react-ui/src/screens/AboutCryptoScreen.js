import React from 'react'
import './AboutCryptoScreen.css';

const AboutCryptoScreen = () => {
    return (
        <div className='aboutcryptoscreen'>
            <div className='header'>
                <h1>Watch these videos to learn about:</h1>
                <ul>
                    <li><a href='#blockchain-vid'>BlockChain</a></li>
                    <li><a href='#cryptocurrency-vid'>Cryptocurrency</a></li>
                </ul>
            </div>
            <div className='vid-group' id='blockchain-vid'>
                <h2>Learn about Blockchain</h2>
                <video type='mp4' controls='true' src='/media/crypto/AI-Zeus-Blockchain.mp4'></video>
            </div>
            <div className='vid-group' id='cryptocurrency-vid'>
                <h2>Learn about Cryptocurrency</h2>
                <video type='mp4' controls='true' src='/media/crypto/Cryptocurrency-Isometric.mp4'></video>
            </div>
        </div>
    )
}

export default AboutCryptoScreen