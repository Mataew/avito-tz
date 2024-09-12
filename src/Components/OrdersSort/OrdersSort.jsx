import React from 'react';

const OrdersSort = ({onChange}) => {
    return (
        <select onChange={(e) => onChange(e)}>
            <option value='default'>По умолчанию</option>
            <option value='price'>По сумме заказа</option>
        </select>
    );
};

export default OrdersSort;