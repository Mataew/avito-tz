import React from 'react';
import './OrdersModal.css';
import AdvertisementCard from "../AdvertisementCard/AdvertisementCard";

const OrdersModal = ({ showModal, onClose, orderItems }) => {
    if (!showModal) return null;

    return (
        <div className="orders-modal" onClick={onClose}>
            <div className="orders-modal__content" onClick={(e) => e.stopPropagation()}>
                <h2>Товары в заказе</h2>
                <div className="orders-modal__content__cards">
                    {orderItems.map(order => <AdvertisementCard callbackSuccess={onClose} advertisements={order}/>)}
                </div>
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
};

export default OrdersModal;