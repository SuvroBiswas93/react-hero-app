import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

export const useLoading = (loadingInSeconds = 1) => {
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, loadingInSeconds * 1000);
        
        return () => clearTimeout(timer);
    }, [location.pathname, loadingInSeconds]);

    return isLoading;
};
