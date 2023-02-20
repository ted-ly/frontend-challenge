import React from 'react';
import { toCapitalized } from './utils';

export default function Select({ options, name, ...otherProps }) {
    return (
        <select name={name} {...otherProps}>
            <option key='' value=''>Select Your Favorite Color</option>
            {(options || []).map(opt => <option key={opt} value={opt}>{toCapitalized(opt)}</option>)}
        </select>
    );
}