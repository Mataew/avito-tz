import React, {useEffect, useState} from 'react';
import { getAdvertisements } from "../../utils/fetchAdvertisements";
import './Advertisements.css';
import AdvertisementCard from "../../Components/AdvertisementCard/AdvertisementCard";
import AdvertisementAdder from "../../Components/AdvertisementAdder/AdvertisementAdder";
import SelectLimit from "../../Components/SelectLimit/SelectLimit";
import Search from "../../Components/Search/Search";

const advertisements = () => {
    const [initialAdvertisements, setInitialAdvertisements] = useState([]);
    const [advertisements, setAdvertisements] = useState([]);
    const [search, setSearch] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [limit, setLimit] = useState(10);

    useEffect( () => {
        const fetchAdvertisements = async () => {
            setLoading(true);
            let data = await getAdvertisements(limit, search);

            setAdvertisements(data);
            setInitialAdvertisements(data);
            setLoading(false);
        }

        fetchAdvertisements();
    }, [limit]);

    useEffect(() => {
        if (search === '') {
            setAdvertisements([...initialAdvertisements])
        } else {
            setAdvertisements(
                advertisements.filter(item =>
                    item.name.toLowerCase().includes(search.toLowerCase())
                )
            );
        }
    }, [search])

    if (error) {
        return <div>Что-то пошло не так...</div>
    }

    if (loading) {
        return <div>Загрузка...</div>
    }

    return (
        <div className='advertisements-page'>
            <SelectLimit limit={limit} setLimit={setLimit} />
            <Search placeholder='Поиск по названию' state={search} setState={setSearch}/>
            <div className='advertisements-page__cards'>
                {advertisements?.map((item, index) => <AdvertisementCard key={index} advertisements={item} />)}
                <AdvertisementAdder />
            </div>
        </div>
    );
};

export default advertisements;
