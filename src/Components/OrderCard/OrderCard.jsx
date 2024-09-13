import React, {useState} from 'react';
import './OrdersCard.css';
import OrdersModal from "../OrdersModal/OrdersModal";
const OrderCard = ({order, index}) => {
    const { items, createdAt, finishedAt, status, total } = order;
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className='order-card'>
                <div>{index + 1}</div>
                <div>{items.length}</div>
                <div>{status}</div>
                <div>{createdAt}</div>
                <div>{finishedAt}</div>
                <div>{total}</div>
                <div><button onClick={() => setShowModal(true)}>Показать все товары</button></div>
            </div>
            <OrdersModal showModal={showModal} onClose={() => setShowModal(false)} orderItems={items}/>
        </>
    );
};

export default OrderCard;
