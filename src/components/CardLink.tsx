import clsx from 'clsx'
import React from 'react'

import { CardLinkProps } from '@/types/entities/cardLink'

const CardLink = ({product}:{product:CardLinkProps}) => {
  return (
    <div>
    {/* eslint-disable-next-line react/jsx-no-target-blank */}
    <a href={product.link} target='_blank'>
      <div className={clsx(
        "flex justify-between",
        "py-3 px-5 rounded-full text-white  bg-gray-700",
        "dark:text-gray-900 dark:bg-gray-200",
        "transition duration-500",
        "hover:bg-gray-600 hover:scale-95 hover:dark:bg-gray-300"
      )}>
        <p className="font-medium">{product.title}</p>
        {product.icon}
      </div>
    </a>
  </div>
  )
}

export default CardLink