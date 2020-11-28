import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Memes from './Memes';
import './styles/MemeGenerator.css';

const MemeGenerator = () => {

    const dispatch = useDispatch();
    const memeForm = useSelector(store => store.memeForm);
    const memes = useSelector(store => store.memes);

    const handleChange = evt => {
        const { name, value } = evt.target;
        dispatch({type:'UPDATEMEMEFORM', payload: {name, value}})
    }
    
    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch({type:'ADDMEME', payload: memeForm})
    }

    return (
        <div className="MemeGenerator">
            <h2>Make-A-Meme</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="top-text">Top Text: </label>
                <input onChange={handleChange} type="text" id="top-text" name="topText" value={memeForm.topText} />
                <label htmlFor="btm-text">Bottom Text: </label>
                <input onChange={handleChange} type="text" id="btm-text" name="bottomText" value={memeForm.bottomText} />
                <label htmlFor="image-url">Image URL</label>
                <input onChange={handleChange} type="text" id="image-url" name="image" value={memeForm.image} />
                <button>Generate! </button>
            </form>
            < Memes />

        </div>
    )
} 

export default MemeGenerator;