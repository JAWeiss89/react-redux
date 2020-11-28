import React from 'react';
import './styles/Meme.css';

const Meme = ({image, top, bottom}) => {
    return (
        <div className="Meme">
            <img src={image} alt={top} />
            <p className="Meme-top">{top}</p>
            <p className="Meme-bottom">{bottom}</p>
        </div>
    )
}

export default Meme;