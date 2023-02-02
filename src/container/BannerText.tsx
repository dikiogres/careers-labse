import React from 'react'
import { MdPlayArrow } from "react-icons/md";

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
                <div className='flex gap-3'>
                    <div className=''>
                        <a href="https://youtu.be/0EfF8IZ_VZw" className="inline-flex items-center justify-center px-5 py-3  text-base font-medium text-center text-red-500 rounded-lg bg-white border-2 border-red-500 hover:bg-red-500 hover:text-white dark:text-white dark:bg-red-500 dark:border-red-500 dark:hover:bg-white dark:hover:text-red-500 transform duration-500 hover:scale-105 hover:shadow-2xl">
                            <MdPlayArrow className="w-6 h-6 mr-2 -ml-1"/>
                            <p>Record Pelatihan</p>
                        </a>
                    </div>
                    <div className='shadow rounded-lg transition duration-500 hover:scale-105 '>
                        <a href="https://forms.gle/tPpCxjYjFzoLFq8GA" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white dark:text-gray-900 bg-gray-900 dark:bg-white rounded focus:outline-none transition duration-500">
                            Oprec Camin
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
