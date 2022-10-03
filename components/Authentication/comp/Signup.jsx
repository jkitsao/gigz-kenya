import React from 'react'
import { GoogleLoginButton, GithubLoginButton, TwitterLoginButton } from "react-social-login-buttons";
import { useAuth } from '../../../context/AuthUserContext'
function Signup() {
    const { signUpWithGoogle } = useAuth()
    return (
        <section className='p-3 lg:w-3/4 lg:mx-auto  flex items-center'
            style={{
                height: '60vh'
            }}
        >
            <div className='w-full'>
                <h2 className='text-xl  font-semibold py-2 text-gray-500 '>
                    Create an Account!
                </h2>
                <div className='w-full p-1 py-8 border border-gray-700'>
                    <div className='m-2'>
                        <GoogleLoginButton onClick={signUpWithGoogle}>
                            Register with Google
                        </GoogleLoginButton>
                    </div>
                    <div className='m-2'>
                        <GithubLoginButton>
                            Register with Github
                        </GithubLoginButton>
                    </div>
                    <div className='m-2'>
                        <TwitterLoginButton>
                            Register with Twitter
                        </TwitterLoginButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup