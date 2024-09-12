import React, {useState} from 'react';
import './style.css';
import { postAdvertisement } from "../../../utils/fetchAdvertisements";

const AdvertisementAdder = () => {
    const [state, setState] = useState({});

    const onChange = (e) => {
        const { value, name } = e.target;

        setState(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    };

    const onClick = async () => {
        await postAdvertisement(state);
        window.location.reload();
    }

    return (
        <div className='advertisement-adder'>
            <input placeholder='image url' className='advertisement-adder__image' onChange={(e) => onChange(e)} type="text" name='imageUrl'/>
            <input placeholder='name' className='advertisement-adder__name' onChange={(e) => onChange(e)} type="text" name='name'/>
            <input placeholder='description' className='advertisement-adder__description' onChange={(e) => onChange(e)} type="text" name='description'/>
            <input placeholder='price' className='advertisement-adder__price' onChange={(e) => onChange(e)} type="number" name='price'/>
            <button onClick={onClick}>Добавлять</button>
        </div>
    );
};

export default AdvertisementAdder;