import React from 'react'
import { Menu } from '@mantine/core';
import Link from 'next/link'
import ProfileMenu from './ProfileMenu';
function ProfileNav() {
    return (
        <nav className=" px-3 sm:px-4 py-4 sticky top-0 w-full z-20  left-0 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border-b border-gray-700  ">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link href='/'>
                    <a className="flex items-center">
                        <img src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/344/external-coding-internet-technology-vitaliy-gorbachev-blue-vitaly-gorbachev.png" className="mr-1 h-8 sm:h-10" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Gigz</span>
                    </a>
                </Link>
                <div className="flex md:order-2">
                    <ProfileMenu />
                </div>
            </div>
        </nav>
    )
}

export default ProfileNav