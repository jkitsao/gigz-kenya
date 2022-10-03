import React from 'react'
import { Signin } from '../../components/Authentication'
import Auth_page from '../../components/layouts/Auth_page'

function login() {
    return (
        <Auth_page path="login">
            <Signin />
        </Auth_page>
    )
}

export default login