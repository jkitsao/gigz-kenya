import React, { useState } from 'react'
import { TextInput, MultiSelect, Select, NativeSelect } from '@mantine/core';
import { useForm } from '@mantine/form';
import RichTextEditor from '../../Editor';
import { isValidUrl } from '../../../utils/helpers/validations';
import LogoUpload from './LogoUpload';
//multi select data
const data = [
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' },
    { value: 'riot', label: 'Riot' },
    { value: 'next', label: 'Next.js' },
    { value: 'blitz', label: 'Blitz.js' },
];
//category data
// const category_data =
//component starts here  
function NewJobForm() {
    // const [file, setFile] = useState(null)
    // const [preview, setPreview] = useState(null)
    const form = useForm({
        initialValues: {
            position: '',
            category: '',
            keywords: [],
            location: '',
            description: '',
            apply_url: '',
            apply_email: '',
            invoice_email: '',
            company: {
                name: '',
                // logo: file,
                twitter: '',
            }
        },

        validate: {
            apply_email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Enter a valid Email'),
            apply_url: (value) => (isValidUrl(value) ? null : 'Enter a valid URL '),
            position: (value) => value.length < 2 ? 'Please provide the Job title' : null,
            invoice_email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            category: (value) => !value.length ? 'Please pick  a category' : null,
            company: {
                name: (value) => value.length < 2 ? 'Please provide the name of your company' : null
            }
        },
    });
    return (
        <div className='shadow-lg  py-8 lg:w-5/6 lg:mx-auto border border-gray-700 rounded-md'>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                {/* <section className='p-3'>
                    <div className='lg:w-5/6 lg:mx-auto'>
                        <LogoUpload file={file} setFile={setFile} preview={preview} setPreview={setPreview} />
                    </div>
                </section> */}

                <section className='lg:flex flex-wrap justify-center'>
                    <div className='lg:w-2/5 m-2'>
                        <TextInput
                            withAsterisk
                            label="Your Company's Name"
                            placeholder="Company name"
                            {...form.getInputProps('company.name')}
                        />
                    </div>
                    <div className='lg:w-2/5 m-2'>
                        <TextInput
                            withAsterisk
                            label="Job Post Title"
                            placeholder="Front-end engineer, Graphic designer"
                            {...form.getInputProps('position')}
                        />
                    </div>
                    <div className='lg:w-2/5 m-2'>
                        <TextInput
                            withAsterisk
                            label="Application URL"
                            placeholder="Used for 'Apply Button'"
                            {...form.getInputProps('apply_url')}
                        />
                    </div>
                    <div className='lg:w-2/5 m-2'>
                        {/* <TextInput
                            withAsterisk
                            label="Application Email"
                            placeholder="Used for 'Apply Button'"
                            {...form.getInputProps('apply_email')}
                        /> */}
                        <NativeSelect
                            data={['On-site', 'Remote', 'Hybrid']}
                            placeholder="Pick one"
                            label="Location Requirement"
                            // description="This is anonymous"
                            {...form.getInputProps('location')}
                            withAsterisk
                        />
                    </div>
                    <div className='lg:w-2/5 m-2'>
                        <TextInput
                            withAsterisk
                            label="Your Email Address"
                            placeholder="So we can send a Receipt. Will not be public"
                            {...form.getInputProps('invoice_email')}
                        />
                    </div>
                    <div className='lg:w-2/5 m-2'>
                        <MultiSelect
                            data={data}
                            label="Tags,Keywords or Stack"
                            placeholder="Javascript, Photoshop, Blender"
                            {...form.getInputProps('keywords')}

                        />
                    </div>
                </section>
                <section className='p-3'>
                    <div className='lg:w-5/6 lg:mx-auto'>
                        <NativeSelect
                            data={['Software Development', 'Product Design', 'Data science', 'Blockchain', 'Cybersecurity', 'Artificial Intelligence', 'Cloud Computing', '2D/3D Animations', 'Graphics and Video', 'Visual Effects', 'Mixing and Sound']}
                            placeholder="Pick one"
                            label="Select the Job Category"
                            description="This is anonymous"
                            {...form.getInputProps('category')}
                            withAsterisk
                        />
                    </div>
                </section>
                <section className='p-3'>
                    <div className='lg:w-5/6 lg:mx-auto '
                    >
                        <div className='text-sm font-semibold py-1'>
                            Job Post Text
                        </div>
                        <RichTextEditor
                            style={{
                                minHeight: '300px'
                            }}
                            {...form.getInputProps('description')}

                        />
                    </div>
                </section>
                <section>
                    <button type='submit'
                        className='px-8 py-3 bg-green-700'
                    >
                        submit
                    </button>
                </section>
            </form>
        </div>
    )
}
export default NewJobForm