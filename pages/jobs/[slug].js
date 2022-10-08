import React from 'react'
import { useRouter } from 'next/router'
function Job() {
    const router = useRouter()
    const { slug } = router.query
    return (
        <div className='text-center text-5xl p-8 font-bold'>{slug}</div>
    )
}

export default Job