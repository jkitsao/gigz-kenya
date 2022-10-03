import React, { useState } from 'react'
import { Select } from '@mantine/core';
import { IconHash } from '@tabler/icons';
import Featured_Jobs from './Featured_Jobs'

function Featured() {
    const [times, setTimes] = useState([6, 7, 8, 9, 5, 3, 7, 7, 7, 7, 7, 8, 9, 7, 6, 6, 8])
    return (
        <div className=' flex justify-center lg:w-2/3 lg:mx-auto p-2 lg:p-12 lg:px-16'>
            <div className='w-full px-2 py-3'>
                <div className='w-1/2 lg:w-1/3 py-2'>
                    <Select
                        label="Filter Jobs By Category"
                        placeholder="Pick a hashtag"
                        data={['React', 'Angular', 'Svelte', 'Vue']}
                        icon={<IconHash size={14} />}
                    />
                </div>
                <div className='w-full'>
                    {
                        times.map((time, index) => (
                            <Featured_Jobs key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Featured