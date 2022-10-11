import React, { useState } from 'react'
import { TextInput, MultiSelect, Select, NativeSelect } from '@mantine/core';
import { useForm } from '@mantine/form';
import RichTextEditor from '../../Editor';
import { isValidUrl } from '../../../utils/helpers/validations';
import LogoUpload from './LogoUpload';
import { useAxiosPost } from '../../../hooks/useAxiosPost';
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
    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const postData = useAxiosPost()
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
                logo: undefined,
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
    // custom submit handler
    const handlesubmit = async (e) => {
        e.preventDefault()
        console.table(form.values)
        const values = form.values
        try {
            postData('/api/jobs', values)
        }
        catch (error) {
            console.error(error)
        }
    }
    return (
        <div className='shadow-lg  py-8 mx-4 sm:mx-auto sm:w-5/6  lg:mx-auto border border-blue-900 rounded-md'>
            <form onSubmit={handlesubmit}>
                <section className='p-3'>
                    <div className='lg:w-5/6 lg:mx-auto'>
                        <LogoUpload file={file} setFile={setFile} preview={preview} setPreview={setPreview} form={form} />
                    </div>
                </section>
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
                <section className='p-3 lg:p-0 sticky bottom-0'>
                    <div className='lg:w-5/6 lg:mx-auto '>
                        <button type='submit'
                            className='px-8 py-6 w-full bg-gray-900 hover:bg-gray-800 active:border-blue-100 active:bg-blue-800 transition-all duration-200 border rounded-xl border-blue-800 text-white font-semibold'
                        >
                            Submit Job
                        </button>
                    </div>
                </section>
            </form>
        </div>
    )
}
export default NewJobForm