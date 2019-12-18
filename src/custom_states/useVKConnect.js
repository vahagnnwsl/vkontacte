import React, {useState, useEffect} from 'react';
import connect from '@vkontakte/vk-connect';

function useVKConnect(requestType, params) {
    const [data, setData] = useState(null);
    const [isError, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await connect.sendPromise(requestType, {params});
                console.log(data)
                setData(data)
            } catch (error) {
                setData(error);
                setError(true)
            }
        }

        fetchData();
    }, []);

    return [data, isError];
}

export default useVKConnect;