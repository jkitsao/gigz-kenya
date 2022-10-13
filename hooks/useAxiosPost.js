import React, { useState, useEffect } from 'react'
import axios from 'axios'
export const useAxiosPost = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    const postData = async (url, payload) => {
        // (async () => {
        try {
            const response = await axios.post(
                url,
                payload
            );
            setData(response.data);
            return response.data
        } catch (error) {
            setError(error.message);
            console.error(error)
        } finally {
            setLoaded(true);
        }
        // })();
    }


    return postData;
};