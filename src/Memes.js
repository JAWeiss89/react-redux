import React from 'react';
import {useSelector} from 'react-redux';
import Meme from './Meme';
import './styles/Memes.css';

const Memes = () => {

    const memes = useSelector(store => store.memes)
    return (
        <div className="Memes">
            {memes.map((meme) => {
                return (
                    <Meme key={meme.topText} image={meme.image} top={meme.topText} bottom={meme.bottomText}/>
                )
            })}
        </div>

    )
}

export default Memes;



////// TODO: Make a component for each meme. 