import React from 'react'
import Navigation from '../Navigation'

function Auth_page({ children }) {
    console.log({ children })
    return (
        <>
            <Navigation />
            <section className='px-4 sm:w-5/6 lg:w-1/2 py-8 sm:mx-auto'>
                {children}
            </section>
        </>
    )
}

export default Auth_page