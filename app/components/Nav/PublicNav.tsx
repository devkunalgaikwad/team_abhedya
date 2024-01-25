import React from 'react'
import { FiLogIn } from "react-icons/fi";

const PublicNav = () => {
  return (
    <>
    <h1 className="text-lg text-center cursor-pointer font-bold text-blue-900 border-b-2 pb-4 w-full">
      Team Abhedya
    </h1>
    <div className='w-full h-full justify-center flex flex-col text-center gap-6'>
      <div className='justify-center flex'>
        <FiLogIn color='pink' size={100}/>
      </div>
      <div>
        <h2 className='flex text-2xl font-semibold'>
          Please Login to your account
        </h2>
        <p className='text-gray-500 text-sm'>At top most left corner Login button is available</p>
      </div>
    </div>
  </>
  )
}

export default PublicNav