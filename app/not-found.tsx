import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='h-screen flex flex-col w-full items-center justify-center gap-10'>
      <h1 className='text-4xl font-bold text-center'>Sorry this page is not available</h1>
      <h2 className='text-xl font-bold text-center'>
        Back to{' '}
        <Link href='/' className='text-blue-800 duration-500 hover:text-blue-300'>
          HomePage
        </Link>
      </h2>
    </div>
  )
}

export default NotFound
