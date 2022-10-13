import React, { useState, useEffect } from 'react'
import axios from 'axios'
function useAxiosGet(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(false);
    //fetchData via async via useEffect hook
    useEffect(() => {
        (async () => {
            setloading(true)
            try {
                const response = await axios.get(url)
                setData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setloading(false);
            }
        })();
    }, [url])
    return { data, error, loading };
}

export default useAxiosGet