import React, { useEffect } from 'react'
import { FileButton, Button, Group, Text, Avatar } from '@mantine/core';
function LogoUpload({ file, setFile, preview, setPreview }) {
    useEffect(() => {
        if (file) return setPreview(URL.createObjectURL(file));
    }, [file])
    return (
        <>
            <Group position="center">
                <FileButton onChange={setFile} accept="image/png,image/jpeg">
                    {/* {(props) => <Button {...props}>Upload company logo</Button>} */}
                    {(props) => (
                        <Avatar {...props} src={preview ? preview : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80'}
                            alt="no image here"
                            size='xl'
                            radius=' xl'
                            className=' cursor-pointer'
                        />
                    )}

                </FileButton>
            </Group>
            {file && (
                <Text size="sm" align="center" mt="sm">
                    {file.name}
                </Text>
            )}
        </>
    )
}

export default LogoUpload