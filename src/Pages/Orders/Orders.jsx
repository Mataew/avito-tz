import React, {useEffect, useState} from 'react';
import './Orders.css';
import {getOrders} from "../../utils/fetchOrders";
import OrderCard from "../../Components/OrderCard/OrderCard";
import OrdersSort from "../../Components/OrdersSort/OrdersSort";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [initialOrders, setInitialOrders] = useState([]);
    const [loading, setLoading] = useState(false);



    useEffect( () => {
        const fetchOrders = async () => {
            setLoading(true);
            const data = await getOrders();

            setOrders(data);
            setInitialOrders(data)
            setLoading(false);
        };

        fetchOrders();
    }, [])

    const handleSortOrders = (e) => {
        if (e.target.value === 'price') {
            setOrders(prevState => [...prevState].sort((a, b) => b.total - a.total))
        } else if (e.target.value === 'default') {
            setOrders([...initialOrders])
        }
    } // сортировка заказов по сумме с костылем

    if (loading) {
        return <div>Загрузка...</div>
    }

    return (
        <div className='orders-page'>
            <div>
                <div className='order-card__header'>
                    <div>№ заказа</div>
                    <div>Количество товаров</div>
                    <div>Статус</div>
                    <div>Создан</div>
                    <div>Доставлен</div>
                    <div>Сумма заказа</div>
                    <div><OrdersSort onChange={handleSortOrders}/></div>
                </div>
                {orders.map((order, index) => <OrderCard order={order} index={index}/>)}
            </div>
        </div>
    );
};

export default Orders;