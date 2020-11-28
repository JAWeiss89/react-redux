import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SecondCounter = () => {
    const dispatch = useDispatch();
    const count = useSelector(store => store.count);
    const increment = () => dispatch({type: 'INCREMENT'});
    const decrement = () => dispatch({type: 'DECREMENT'});
    return (
        <div>
            <h1>Count is: {count}</h1>
            <button onClick={increment}>ADD</button>
            <button onClick={decrement}>SUBTRACT</button>
        </div>
    )
}

export default SecondCounter;