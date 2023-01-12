import React from 'react'

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
                <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-black dark:text-white">for everyone</h1>
                <p className="max-w-2xl mb-6 font-sm text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Find your future at RPL.</p>
                <a href="https://forms.gle/YC5CtWP2E4JAi55t8" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-white border-2 border-black hover:bg-black hover:text-white dark:text-white dark:bg-gray-900 dark:border-white dark:hover:bg-white dark:hover:text-black transform duration-500 hover:scale-105 hover:shadow-2xl">
                    Pelatihan
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-400 bg-gray-300 rounded focus:outline-none cursor-not-allowed">
                    Oprec Camin
                </a>
        </div>
    )
}
