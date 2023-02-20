import React from 'react';

export default function Button({ children, ...otherProps }) {
    return <button type='button' {...otherProps}>{children}</button>
}