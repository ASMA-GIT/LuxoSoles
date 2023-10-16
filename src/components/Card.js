import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './Card.css';

const Card = ({ imageUrl }) => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".card", {
      duration: 600,
      distance: "20px",
      easing: "ease-out",
      origin: "bottom",
      reset: true,
      scale: 1,
      viewFactor: 0,
    }, 150);

    sr.reveal(".img, .desc", {
      duration: 500,
      scale: 1,
      distance: "20px",
      origin: "bottom",
      reset: true,
      easing: "ease-out",
      viewFactor: 1
    }, 75);

    return () => {
      sr.destroy();
    };
  }, []);


  return (
    <div className='card'>
      <div className='img' >
        <div>
          <img src={imageUrl} alt='img' />
        </div>
      </div>
      <div className='desc'>
        <div>
          Whether you're looking for timeless classics, sporty performance shoes, or trendy fashion footwear, our collections cater to all tastes and preferences.
        </div>
      </div>
    </div>
  )
}

export default Card