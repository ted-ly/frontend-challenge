import React from 'react';
import Spinner from './Spinner';

export default function Step({ title, children, isLoading }) {
    return (
        <div className='step-container'>
            <div className='step-title'>{title}</div>
            {isLoading ? <Spinner /> : children}
        </div>
    );
}