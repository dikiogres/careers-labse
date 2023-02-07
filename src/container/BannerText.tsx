import React from 'react'
import { MdPlayArrow } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import clsx from 'clsx';

export const BannerText = () => {
  return (
    <div>
        <div className='h-[84px] sm:h-[96px] md:h-[108px] lg:h-[144px] overflow-hidden'>
            <div className='words'>
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                    <span className='block h-full pl-2 py-4 text-red-500 font-bold text-[64px] sm:text-[72px] md:text-[84px] lg:text-[96px]'>Rekayasa</span>
                    <span className='block h-full pl-2 py-4 text-green-500 font-bold text-[64px] sm:text-[72px] md:text-[84px] lg:text-[96px]'>Perangkat</span>
                    <span className='block h-full pl-2 py-4 text-blue-500 font-bold text-[64px] sm:text-[72px] md:text-[84px] lg:text-[96px]'>Lunak</span>
                </h1>
            </div>
            </div>
            <div>
            <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-black dark:text-white">for everyone</h1>
                <p className="max-w-2xl mb-6 font-sm text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Find your future at RPL.</p>
                <div className='flex flex-col md:flex-row gap-3'>   
                    <div className='flex items-center justify-center rounded-lg bg-white border-2 shadow-lg border-red-500 duration-300 hover:scale-105 hover:shadow-2xl'>
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <a href="https://youtu.be/0EfF8IZ_VZw" target='_blank' className={clsx(
                            'inline-flex items-center justify-center px-5 py-3',
                            'text-base font-medium text-center text-red-500',
                            'dark:text-white dark:bg-red-500 dark:border-red-500',
                        )}>
                             <MdPlayArrow className="w-6 h-6 mr-2 -ml-1 flex-shrink-0"/>
                            <p>Record Pelatihan</p>
                        </a>
                    </div>
                    <div className='flex items-center justify-center rounded-lg transition duration-300 hover:scale-105 shadow-lg hover:shadow-2xl bg-[#5562EA] dark:bg-white'> 
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <a href="https://discord.gg/UBuk7Afy" target='_blank' className={clsx(
                            'inline-flex items-center justify-center px-5 py-3 rounded-md',
                            'text-base font-medium text-center text-white',
                            'dark:text-[#5562EA]',
                        )}>
                            <FaDiscord className="w-6 h-6 mr-2 -ml-1 flex-shrink-0"/>
                            <p>Join Our Discord Server!</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
