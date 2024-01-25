import React from 'react'
import { RiErrorWarningLine } from "react-icons/ri";

const GuestNav = () => {
  return (
    <>
      <h1 className="text-lg text-center cursor-pointer font-bold text-blue-900 border-b-2 pb-4 w-full">
        Team Abhedya
      </h1>
      <div className='w-full h-full justify-center flex flex-col text-center gap-6'>
        <div className='justify-center flex'>
          <RiErrorWarningLine color='red' size={100}/>
        </div>
        <div>
          <h2 className='flex text-2xl font-semibold'>
            Your are not Team Member
          </h2>
          <p className='text-gray-500 text-sm'>Contant to team Captain to promote you as part of team</p>
        </div>
      </div>
    </>
  )
}

export default GuestNav