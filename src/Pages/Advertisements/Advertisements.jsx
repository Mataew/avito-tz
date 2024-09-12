import React, {useEffect, useState} from 'react';
import { getAdvertisements } from "../../utils/fetchAdvertisements";
import './style.css';
import AdvertisementCard from "./AdvertisementCard/AdvertisementCard";
import AdvertisementAdder from "./AdvertisementAdder/AdvertisementAdder";

const advertisements = () => {
    const [advertisements, setAdvertisements] = useState([])

    useEffect( () => {
        const fetchData = async () => {
            let data = await getAdvertisements();

            setAdvertisements(data)
        }

        fetchData();
    }, []);

    return (
        <div className='advertisements-page'>
            {advertisements.map(item => <AdvertisementCard key={item.id} advertisements={item} />)}
            <AdvertisementAdder />
        </div>
    );
};

export default advertisements;