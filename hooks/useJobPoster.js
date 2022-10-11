import React, { useState, useEffect } from 'react'
import axios from 'axios'
function useJobPoster({ values }) {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(undefined)
    useEffect(() => {
        setLoading(true)
        axios.post('/user', { values })
            .then(function (response) {
                console.log(response);
                setData(response.data)
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error);
                setError(error)
                setLoading(false)

            });
    }, [])
    return {
        error, loading, data
    }
}

export default useJobPoster