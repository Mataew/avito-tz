import React from 'react';

const Search = ({ state, setState, placeholder }) => {
    return <input value={state} placeholder={placeholder} onChange={(e) => setState(e.target.value)} type='text'/>
};

export default Search;