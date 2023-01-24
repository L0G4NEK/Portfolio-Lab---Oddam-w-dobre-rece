import React, { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
import db from '../firebase'


const HomeWhoWeHelp = () => {

    const [info , setInfo] = useState([]);
    const [filtredInfo , setFiltredInfo] = useState([]);
    
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

//     const filterQuery = {
//     language: "French"
// }

// function parseUserData(data) {
//     return data.filter(item =>
//         Object.keys(filterQuery).every(key => item[key] === filterQuery[key])
//     ).map(({id, firstName, lastName, email, nin}) => ({
//         id: id,
//         fullName: `${firstName} ${lastName}`,
//         email: email,
//         nin: nin
//     })).sort((a, b) => a.nin - b.nin);
// }

// console.log(parseUserData(users))

    const handleClick = (org) => {
        let filtredInfo = info.filter(item => item.type === org)
        setFiltredInfo(
            filtredInfo.map((doc) => ({
                id: doc.id,
                name: doc.name,
                type: doc.type,   
                description: doc.description,
                examples: doc.examples,
            }))
        )
    }

    return ( 
        <div className="homeWhoWeHelp">
            <h2>Komu pomagamy?</h2>
            <img src="../assets/Decoration.png" alt="decoration" className="homeWhoWeHelp__decoration" />
            <div className="homeWhoWeHelp__organizations">
                <button className="fundation" onClick={() => handleClick('fundation')}>Fundacjom</button>
                <button className="organization" onClick={() => handleClick('organization')}>Organizacjom Pozarządowym</button>
                <button className="localCollections" onClick={() => handleClick('local')}>Lokalnym Zbiórkom</button>
            </div>
            {filtredInfo?.map(({ id, name, type, description, examples }) => (
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