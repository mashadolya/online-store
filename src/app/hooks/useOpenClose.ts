import { useCallback, useState } from 'react';

export const useOpenClose = (initialState = false) => {
    const [opened, setOpened] = useState(initialState);

    const doOpen = useCallback(() => {
        setOpened(true);
    }, []);

    const doClose = useCallback(() => {
        setOpened(false);
    }, []);

    return [opened, doOpen, doClose] as const;
};
