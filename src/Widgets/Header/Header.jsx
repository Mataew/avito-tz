import React from 'react';
import './Header.css';
import { LinkButton } from "../../Components/LinkButton/LinkButton";
import {Outlet} from "react-router-dom";

export const Header = () => {
    return (
        <>
            <div className='nav'>
                <LinkButton to='/advertisements'>Мои объявления</LinkButton>
                <LinkButton to='/'>ДОМОЙ</LinkButton>
                <LinkButton to='/orders'>Мои заказы</LinkButton>
            </div>
            <Outlet />
        </>
    );
};

export default Header;