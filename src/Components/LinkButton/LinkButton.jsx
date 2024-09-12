import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

export const LinkButton = ({ children, to }) => {
    return (
        <Link to={to}>
            {children}
        </Link>
    );
};

