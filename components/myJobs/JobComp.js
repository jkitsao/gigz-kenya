import React from 'react'
import Link from 'next/link'
function JobComp({ job }) {
    return (
        <section className='flex justify-between p-2 lg:p-4  my-2 shadow-lg w-full cursor-pointer border rounded-lg border-gray-800 hover:border-blue-700  transition-all duration-300 ease-in-out'>
            <div className='flex items-center p-2'>
                <div className='px-2'>
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-10" alt="Flowbite Logo" />
                </div>
                <div className='sm:px-3'>
                    <p className='text-sm font-medium'>{job?.company?.name}</p>
                    <p className='text-base font-semibold w-full text-white hover:underline hover:text-blue-300 transition-all duration-200'>
                        <Link href={`/jobs/${job?.slug}`}>
                            {job?.position}
                        </Link>
                    </p>
                    <div className='flex  items-center py-1'>
                        <p className='text-xs lg:text-sm'>{job?.location}</p>
                        {/* {
                            job?.keywords.map((keyword, index) => (
                                <p className='text-xs lg:text-sm text-blue-400 hover:underline transition-all duration-150 px-2' key={index}>
                                    |  {keyword}  |
                                </p>
                            ))
                        } */}
                        {/* <p className='text-xs lg:font-normal lg:text-xs  '>
                            75k/month
                        </p> */}
                    </div>
                </div>
            </div>
            <div>
                <div className='flex h-full justify-center items-center'>

                    <span className='text-xs opacity-80 px-1'>
                        .2wks
                    </span>
                </div>
            </div>
        </section>
    )
}

export default JobComp