import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './GrandFather.css';

//context api
// 1. call createContext with a default value
// 2. set a variable of the context with uppercase
// 3. Make sure you export the context to use it in other places
// 4. wrap you child content using RingContext.Provider
// 5. Provide a value
// 6. to consume the context from child components and
// 7. useContext hook and you will to pass the contextName
// 8. Make sure you take notes...


export const RingContext = createContext('Ring')

const GrandFather = () => {
    const [house, setHouse] = useState(1);

    const ornament = 'Diamond Ring'

    const handleBuyHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={[ornament, house]}>
            <div className="grandfather">
                <h4>Grand Father</h4>

                <p>House: {house}
                    <button
                        onClick={handleBuyHouse}>
                        Buy A House
                    </button>
                </p>
                <section style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};
export default GrandFather;