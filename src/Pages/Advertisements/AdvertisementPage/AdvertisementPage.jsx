import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import './style.css';
import {getAdvertisementById, patchAdvertisement} from "../../../utils/fetchAdvertisements";

const AdvertisementPage = () => {
    const { advertisementId } = useParams();
    const [advertisement, setAdvertisement] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    const fetchAdvertisement = async () => {
        const advertisement = await getAdvertisementById(advertisementId);

        setAdvertisement(advertisement);
        setFormData(advertisement);
        setLoading(false);
    };

    useEffect(() => {
        setLoading(true);

        fetchAdvertisement();
        //
        return () => {
            console.log('norm?')
        }
    }, [advertisementId]);

    const onChange = (e) => {
        const { value, name } = e.target;
        console.log(value, name)
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    };

    const handleEditing = async () => {
        setIsEditing(!isEditing)
        if (isEditing) {
            await patchAdvertisement(formData);
            location.reload();
        }
    }

    if (loading) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className='advertisement-page'>
            <button className='advertisement-page__editing-button' onClick={() => handleEditing()}>
                {isEditing ? 'Подтвердить изменения' : 'Редактировать'}
            </button>
            <div className='advertisement-page__image'>
                {isEditing ? <input onChange={(e) => onChange(e)} value={formData?.imageUrl} name='imageUrl' type="text"/> : <img src={advertisement?.imageUrl} alt={advertisement?.name} />}
            </div>
            <div>
                <div className='advertisement-page__name'>
                    {isEditing ? <input onChange={(e) => onChange(e)} value={formData?.name} name='name' type="text"/> : advertisement?.name}
                </div>
                <div className='advertisement-page__price'>
                    Стоимость:
                    <span style={{color: 'red'}}>
                        {isEditing ? <input onChange={(e) => onChange(e)} value={formData?.price} name='price' type="number"/> : advertisement?.price}
                    </span>
                </div>
                <div className='advertisement-page__description'>
                    {isEditing ? <input onChange={(e) => onChange(e)} value={formData?.description} name='description' type="text"/> : advertisement?.description}
                </div>
            </div>
        </div>
    );
};

export default AdvertisementPage;