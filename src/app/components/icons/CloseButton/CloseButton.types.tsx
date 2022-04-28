import React from 'react';

// TODO: base type for onClick etc
export interface CloseButtonTypes {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    size: string;
}
