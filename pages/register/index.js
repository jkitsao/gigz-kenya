import React from 'react'
import { Signup } from '../../components/Authentication'
import Auth_page from '../../components/layouts/Auth_page'

function register() {
    return (
        <Auth_page path='register'>
            <Signup />
        </Auth_page>
    )
}

export default register