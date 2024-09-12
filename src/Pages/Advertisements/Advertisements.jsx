import React, {useEffect, useState} from 'react';
import { getAdvertisements } from "../../utils/fetchAdvertisements";
import './style.css';
import AdvertisementCard from "../../Components/AdvertisementCard/AdvertisementCard";
import AdvertisementAdder from "../../Components/AdvertisementAdder/AdvertisementAdder";
import Pagination from "../../Components/Pagination/Pagination";
import SelectLimit from "../../Components/SelectLimit/SelectLimit";
import Search from "../../Components/Search/Search";

const advertisements = () => {
    const [advertisements, setAdvertisements] = useState([]);
    const [search, setSearch] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalElements, setTotalElements] = useState(null);
    const [limit, setLimit] = useState(9);

    useEffect( () => {
        const fetchAdvertisements = async () => {
            setLoading(true);
            let data = await getAdvertisements(currentPage, limit,);

            setTotalElements(data.length);
            setAdvertisements(data);
            setLoading(false);
        }

        fetchAdvertisements();
    }, [currentPage, limit]);

    // useEffect(() => {
    //     if (search === '') {
    //         fetchAdvertisements();
    //     } else {
    //         setAdvertisements(
    //             advertisements.filter(item =>
    //                 item.name.toLowerCase().includes(search.toLowerCase())
    //             )
    //         );
    //     }
    // }, [search])

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
                {advertisements?.map(item => <AdvertisementCard key={item.id} advertisements={item} />)}
                <AdvertisementAdder />
            </div>
            {/*<Pagination*/}
            {/*    totalPages={totalPages}*/}
            {/*    limit={limit}*/}
            {/*    onPageChange={onPageChange}*/}
            {/*/>*/}
        </div>
    );
};

export default advertisements;