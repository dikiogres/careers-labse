import React, {useState, useEffect} from 'react'
import Link from 'next/link'

import {useTheme} from 'next-themes'
import {MoonIcon, SunIcon} from '@heroicons/react/solid'
import Image from 'next/image'

import Logo from '~/Color.png'


const Header = () => {

    const {systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true);
    },[]);

    const renderThemeChanger = () => {
        if(!mounted) return null;
        
        const currentTheme = theme == 'system' ? systemTheme : theme;

        if(currentTheme == 'dark'){
            return(
                <SunIcon className="w-7 h-7" role="button" onClick={() => setTheme
                    ('light')
                }/>
            )
        }else{
            return(
                <MoonIcon className="w-7 h-7" role="button" onClick={() => setTheme
                    ('dark')
                }/>
            )
        }
    }

    return (
        <header className='sticky top-0 z-50 border-b  border-gray-300 dark:border-gray-700'>
        <div className='container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center'>
            <Link href='/' className='font-bold md:text-2xl hover:text-gray-600'>
                <div className='flex justify-center items-center'>
                <Image
                src={Logo}
                alt='logo'
                width={50}
            />
                <p className='pl-2'>LABSE</p>

                </div>
            </Link>

            {renderThemeChanger()}
        </div>
    </header>
    )
}

export default Header