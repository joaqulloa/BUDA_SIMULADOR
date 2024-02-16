import React from 'react';
import { useState } from 'react';
import buda from '../assets/buda.png';
import {navLinks} from '../constants'

const NavBar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='bg-[#032647] w-full flex py-6 justify-between items-center navbar'>
        <a href='/'><img src={buda} alt="feedbacker" className='w-[120px] h-[45px]'/></a>
        
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
                <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-black ${index == navLinks.length - 1? 'mr-0' : 'mr-10'} `}
                >
                    <a href={`/${nav.id}`} className='text-white'>
                        {nav.title}
                    </a>
                </li>
            ))}
        </ul>


        </nav>
    )
}

export default NavBar;