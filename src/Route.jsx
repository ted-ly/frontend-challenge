import React from 'react';

export default function Route({ path, children }) {
    const pathMatch = window.location.pathname === path;
    return pathMatch ? children : null;
}