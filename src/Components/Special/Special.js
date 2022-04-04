import React, { useContext } from 'react';
import { RingContext } from '../GrandFather/GrandFather';

const Special = () => {
    const [ornament, house] = useContext(RingContext);
    return (
        <div>
            <h4>Special</h4>
            <p><small>Gift: {ornament}</small></p>
            <p><small>House:{house}</small></p>
        </div>
    );
};

export default Special;