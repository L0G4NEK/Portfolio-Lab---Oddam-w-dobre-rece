import React, { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
import db from '../firebase'


const HomeWhoWeHelp = () => {

    const [info , setInfo] = useState([]);
    
    useEffect(() => {
        db.collection("Organization").onSnapshot((snapshot) => {
            setInfo(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name,
                    type: doc.data().type,   
                    description: doc.data().description,
                    examples: doc.data().examples,
                }))
            );
        });
    }, []);

    const handleClick = () => {
        console.log(info.type)
    }

    return ( 
        <div className="homeWhoWeHelp">
            <h2>Komu pomagamy?</h2>
            <img src="../assets/Decoration.png" alt="decoration" className="homeWhoWeHelp__decoration" />
            <div className="homeWhoWeHelp__organizations">
                <button className="fundation" onClick={handleClick('fundation')}>Fundacjom</button>
                <button className="organization" onClick={handleClick('organization')}>Organizacjom Pozarządowym</button>
                <button className="localCollections" onClick={handleClick('localCollection')}>Lokalnym Zbiórkom</button>
            </div>
            {info?.map(({ id, name, type, description, examples }) => (
                <div key={id}>
                    <h2>name: {name}</h2>
                    <h2>country: {type}</h2>
                    <h2>{description}</h2>
                    <h2>{examples}</h2>
        
                    <hr />
              </div>
            ))}
        </div>
     );
}

export default HomeWhoWeHelp;