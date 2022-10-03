import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
function Navigation() {
    const [path, setPath] = useState('/register')
    const [btnText, setBtnText] = useState('Create Account')
    //detect route and update component
    // Calling useRouter() hook
    const router = useRouter()
    useEffect(() => {
        // alert(router.pathname)
        if (router.pathname == '/register') {
            setPath('/login')
            setBtnText('Login')
        } else {
            setPath('/register')
            setBtnText('Create Account')
        }
    }, [router])
    return (
        <>
            <nav className=" px-3 sm:px-4 py-4 sticky top-0 w-full z-20  left-0 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60  ">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link href='/'>
                        <a className="flex items-center">
                            <img src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/344/external-coding-internet-technology-vitaliy-gorbachev-blue-vitaly-gorbachev.png" className="mr-1 h-8 sm:h-10" alt="Flowbite Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Gigz</span>
                        </a>
                    </Link>
                    <div className="flex md:order-2">
                        <button type="button" className="text-white  focus:ring-4 focus:outline-none  font-semibold rounded text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-blue-500 hover:bg-blue-700 focus:ring-blue-800">
                            <Link href={`${path}`}>
                                <a>
                                    {btnText}
                                </a>
                            </Link>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation