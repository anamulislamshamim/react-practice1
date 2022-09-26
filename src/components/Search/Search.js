import React, { useState } from 'react';
import './Search.css';
const Search = ({ searchHandeler }) => {
    const [firstLetter, setFirstLetter] = useState('');
    const handleChange = (event) => {
        setFirstLetter(event.target.value);
    };
    return (
        <div className='search'>
            <input type="text" onChange={ handleChange } placeholder='input 1 letter' />
            <button onClick={ () => searchHandeler(firstLetter) }>Search</button>
        </div>
    );
};

export default Search;