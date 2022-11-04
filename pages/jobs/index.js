import React from 'react'
import { useRouter } from 'next/router'
import useAxiosGet from '../../hooks/useAxiosGet'
import { LoadingOverlay } from '@mantine/core';
import JobComp from '../../components/myJobs/JobComp';
import Landing_page from '../../components/layouts/Landing_page';

function Jobs() {
    const { data, loading, error } = useAxiosGet('/api/jobs')
    return (
        <Landing_page>
            <div className='relative h-screen'>
                <LoadingOverlay visible={loading} overlayBlur={2} loaderProps={{ size: 'lg', color: 'blue' }} />
                <section className='p-2 lg:p-4 lg:w-3/5 lg:mx-auto'>
                    {
                        data && data.result.map((job, index) => (
                            <div className='px-1' key={index}>
                                <JobComp job={job} />
                            </div>
                        ))
                    }
                </section>
            </div>
        </Landing_page>

    )
}

export default Jobs