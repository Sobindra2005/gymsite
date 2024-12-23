import React from 'react';

export const Button = ({ label, onClick, className }) => {
    return (
        <button onClick={onClick} className={` rounded-md ${className}`}>
            {label}
        </button>
    );
};

