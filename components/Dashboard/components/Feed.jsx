import React from 'react'
import Featured from '../../featured'
import { TextInput, Loader } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
function Feed() {
    return (
        <section
            style={{
                minHeight: '30vh'
            }}
            className='bg-gradient-to-r from-sky-800 via-sky-800 to-blue-900 flex items-center rounded-md'
        >
            <div className='w-full lg:w-1/2 mx-8 lg:mx-auto'>
                <TextInput placeholder="Type a keyword i.e Front-end developer" px={2} size='lg' rightSection={<IconSearch size='xs' className='mx-2 cursor-pointer' />} />
            </div>
        </section>
    )
}

export default Feed