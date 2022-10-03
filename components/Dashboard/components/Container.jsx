import React from 'react'

function Container({ children }) {
    return (
        <section className=' p-5 lg:w-4/5 lg:mx-auto'>
            {children}
        </section>
    )
}

export default Container