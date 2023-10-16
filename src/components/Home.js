import React, { useState } from 'react';
import './Home.css';


const Home = () => {

    const [image, setImage] = useState(require('../images/image1.jpg'));
    return (
        <div className='home'>
            <nav>
                <input type="checkbox" id="check" />
                <label for="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <label className="logo">
                    Luxo<span>Soles</span>
                </label>
                <ul>
                    <li>Overview</li>
                    <li>Prices</li>
                    <li>Feedback</li>
                    <li>Purchase</li>
                </ul>
            </nav>
            <div className='title'>
                <h2>Step into Elegance: Explore Our <span> Premium Shoe Collections </span></h2>
            </div>

            <div className="gallery">
                <div className="gallery-img">
                    <img src={image} alt="" className="center" id="targetImage" />
                    <div className="semi-circle">
                        <h1>Luxo </h1>
                        <h1>Soles</h1>
                    </div>
                </div>

                <div className="circle">
                    <div className="icon"><img src={require('../images/image1.jpg')} onClick={() => setImage(require('../images/image1.jpg'))} alt="im" /></div>
                    <div className="icon"><img src={require('../images/image2.jpg')} onClick={() => setImage(require('../images/image2.jpg'))} alt="im" /></div>
                    <div className="icon"><img src={require('../images/image3.jpg')} onClick={() => setImage(require('../images/image3.jpg'))} alt="im" /></div>
                    <div className="icon"><img src={require('../images/image4.jpg')} onClick={() => setImage(require('../images/image4.jpg'))} alt="im" /></div>
                    <div className="icon"><img src={require('../images/image5.jpg')} onClick={() => setImage(require('../images/image5.jpg'))} alt="im" /></div>
                    <div className="icon"><img src={require('../images/image6.jpg')} onClick={() => setImage(require('../images/image6.jpg'))} alt="im" /></div>
                    <div className="icon"><img src={require('../images/image7.jpg')} onClick={() => setImage(require('../images/image7.jpg'))} alt="im" /></div>
                    <div className="icon"><img src={require('../images/image8.jpg')} onClick={() => setImage(require('../images/image8.jpg'))} alt="im" /></div>
                </div>
            </div>
        </div>
    )
}

export default Home