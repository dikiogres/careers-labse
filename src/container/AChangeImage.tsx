import Image from 'next/image'
import React, { useState, useEffect } from 'react';

import image1 from '~/career/CAREER1.jpg'
import image2 from '~/career/CAREER2.jpg'
import image3 from '~/career/CAREER3.jpg'
import image4 from '~/career/CAREER4.jpg'
import image5 from '~/career/CAREER5.jpg'
import image6 from '~/career/CAREER6.jpg'
import image7 from '~/career/CAREER7.jpg'

const images:any = [image1, image2, image3, image4, image5, image6, image7];


export const AChangeImage = () => {

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((currentImage + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }, [currentImage]);
  
  return (
    <div className="relative h-[256px] w-[256px] md:h-[384px] md:w-[384px] rounded-full overflow-hidden shadow-lg transition duration-500 hover:scale-105 hover:shadow-2xl ">
    <Image src={images[currentImage]} className="animation-fade duration-1000 ease-in-out absolute inset-0 h-full w-full object-cover" alt="img" />
  </div>
  )
}
