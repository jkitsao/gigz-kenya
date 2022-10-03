import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthUserContext';
function Protect({ children }) {
    const { authUser, loading } = useAuth();
    const router = useRouter();
    // Listen for changes on loading and authUser, redirect if needed
    useEffect(() => {
        if (!loading && !authUser)
            router.push('/')
    }, [authUser, loading])
    return (
        <>
            {children}
        </>
    )
}

export default Protect