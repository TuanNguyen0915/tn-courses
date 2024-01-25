'use client'

import React from 'react'
import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const NavItems = () => {
  const pathName = usePathname()

  return (
    <ul className='md:flex-between flex w-full flex-col items-start gap-5 md:flex-row'>
      {headerLinks.map((link) => (
        <Link key={link.label} href={link.route} className={`${pathName === link.route ? `text-primary-500` : ''}`}>
          {link.label}
        </Link>
      ))}
    </ul>
  )
}

export default NavItems
