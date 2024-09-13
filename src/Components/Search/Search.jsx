import React from 'react';

const Search = ({ state, setState, placeholder }) => {
    return <input style={{padding: '10px', marginTop: '10px'}} value={state} placeholder={placeholder} onChange={(e) => setState(e.target.value)} type='text'/>
};

export default Search;
