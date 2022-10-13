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
            <div className='text-center text-sm p-8 relative h-screen'>
                <LoadingOverlay visible={loading} overlayBlur={2} loaderProps={{ size: 'lg', color: 'blue', variant: 'bars' }} />
                {/* {JSON.stringify(data)} */}
                <section >
                    <div className='p-5'>
                        <h3 className='text-2xl font-semibold text-center'>
                            {data?.result?.position}
                        </h3>
                    </div>
                    <div className='lg:w-1/2 mx-auto'>
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