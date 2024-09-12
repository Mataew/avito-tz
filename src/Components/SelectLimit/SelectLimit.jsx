import React from 'react';

const SelectLimit = ({limit, setLimit}) => {
    return (
        <div>
            <select value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>
        </div>
    );
};

export default SelectLimit;