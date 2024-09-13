import React from 'react';
import { Link } from 'react-router-dom';
import './LinkButton.css'

export const LinkButton = ({ children, to }) => {
    return (
        <Link to={to}>
            {children}
        </Link>
    );
};

