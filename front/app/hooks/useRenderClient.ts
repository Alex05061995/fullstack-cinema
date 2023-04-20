import {useState, useEffect} from 'react';
export const useRenderClient = () => {
    const [isRenderClient, setIsRenderClient] = useState(false);

    useEffect(() => {
        !isRenderClient && setIsRenderClient(true);

    }, [isRenderClient])

    return {isRenderClient}
}