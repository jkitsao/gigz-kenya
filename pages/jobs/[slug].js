import React from 'react'
import { useRouter } from 'next/router'
import useAxiosGet from '../../hooks/useAxiosGet'
import { LoadingOverlay } from '@mantine/core';
import { TypographyStylesProvider } from '@mantine/core';
import Landing_page from '../../components/layouts/Landing_page';
function Job() {
    const router = useRouter()
    const { slug } = router.query
    const { data, loading, error } = useAxiosGet(`/api/jobs/${slug}`)
    return (
        <Landing_page>
            <div className='text-sm p-3 relative h-screen'>
                <LoadingOverlay visible={loading} overlayBlur={2} loaderProps={{ size: 'lg', color: 'blue', variant: 'bars' }} />
                {/* {JSON.stringify(data)} */}
                <section >
                    <div className='lg:w-1/2 lg:mx-auto'>
                        <h3 className='text-5xl font-bold text-blue-100'>
                            {data?.result?.position}
                        </h3>
                    </div>
                    <div className='lg:w-1/2 lg:mx-auto p-3 lg:p-5 text-5xl  bg-gray-900 my-10'>
                        {/* <div>
                            <h3 className='text-3xl font-bold text-center text-blue-400'>
                                Job Description
                            </h3>
                        </div> */}
                        <TypographyStylesProvider>
                            <div dangerouslySetInnerHTML={{ __html: data?.result?.description }} />
                        </TypographyStylesProvider>
                    </div>
                </section>
            </div>
        </Landing_page>
    )
}

export default Job