import React from 'react'

function Hero() {
    return (
        <>
            <div className='p-2 py-5 mt-8 lg:py-24 text-center lg:w-2/3 lg:mx-auto   shadow-xl'>
                <h1 className='font-bold text-white text-4xl  lg:text-5xl '>
                    Find Tech Related Jobs in Kenya
                </h1>
                <p className='p-3 lg:p-5 font-normal text-sm  lg:text-lg w-5/6 lg:w-2/3 mx-auto'>
                    4000+ Jobs in Africa Listed
                    Upload your CV and stay updated on thousands of jobs
                </p>
                <div>
                    <button className="bg-transparent hover:bg-blue-600 text-blue-300 font-semibold hover:text-white py-4 px-10 transition-all duration-150 border border-blue-500 hover:border-transparent rounded">
                        Post a Job
                    </button>
                </div>
            </div>
        </>
    )
}

export default Hero