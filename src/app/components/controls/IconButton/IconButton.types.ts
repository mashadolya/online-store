import React from 'react';

export interface IconButtonTypes {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
}
