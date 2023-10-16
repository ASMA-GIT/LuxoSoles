import React from 'react';
import './Shoe.css';
import Card from './Card';

const Shoe = () => {
    const url1 = require("../images/im1.png");
    const url2 = require("../images/bgs1.png");
    const url3 = require("../images/bgs10.png");
    const url4 = require("../images/bsg3.png");
    const url5 = require("../images/bgs4.png");
    const url6 = require("../images/bgs6.png");

    return (
        <div className='page'>
            <div className='shoe-page'>
                <h2>Elevate your style with our Shoes, crafted from premium leather for ultimate comfort and sophistication</h2>
                <div className='card-container'>
                    <Card imageUrl={url1} />
                    <Card imageUrl={url2} />
                    <Card imageUrl={url3} />
                    <Card imageUrl={url4} />
                    <Card imageUrl={url5} />
                    <Card imageUrl={url6} />
                </div>
            </div>
        </div>

    )
}

export default Shoe