import React from 'react';
import './style.css';
import {useNavigate} from "react-router-dom";
const AdvertisementCard = ({ advertisements }) => {

    const { id, name, price, views, likes, imageUrl } = advertisements;
    const navigate = useNavigate();

    const onClick = (id) => {
        navigate(`/advertisements/${id}`)
    }

    return (
        <div onClick={() => onClick(id)} className='advertisement-сard'>
            <div className='advertisement-сard__image'>
                {imageUrl ? (
                    <img src={imageUrl} alt={name} />
                ) : (
                    <div className='advertisement-сard__placeholder'>
                        Фото отсутствует
                    </div>
                )}
            </div>
            <div className='advertisement-сard__name'>{name}</div>
            <div className='advertisement-сard__price'>{price}</div>
            <div className='advertisement-сard__views'>{views}</div>
            <div className='advertisement-сard__likes'>{likes}</div>
        </div>
    );
};

export default AdvertisementCard;