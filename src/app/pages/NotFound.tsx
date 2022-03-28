import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <>
            This page does not exists. Go <Link to={'/'}>home</Link>
        </>
    );
}
