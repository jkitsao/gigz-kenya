import React from 'react'
import Navigation from '../Navigation'

function Landing_page({ children }) {
    return (
        <>
            <Navigation />
            {children}
        </>
    )
}

export default Landing_page