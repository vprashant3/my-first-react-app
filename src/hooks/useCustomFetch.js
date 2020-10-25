import {useState, useEffect} from 'react';

function useCustomFetch(url) {
    const [data, setData] = useState(null);
    const [error, setErrror] = useState(null);
    const [loading, setLoading] = useState(true);

    async function customFetch(url) {
        try {
            let response = await fetch(url);
            let rData = await response.json;
            setData(rData);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setErrror(error);
        }
    }

    useEffect(() => {
       setLoading(true);
       setTimeout(() => {
           if(url) {
            customFetch(url);
           }
        }, 5000);     
    },[url]);

    return [data, loading, error];
}

export default useCustomFetch;