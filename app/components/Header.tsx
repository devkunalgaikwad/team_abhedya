"use client"

import useAuthModal from '@/hookes/useAuthModal'
import { useUser } from '@/hookes/useUser'
import { Button } from '@mui/material'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'
import { FaUserAlt } from 'react-icons/fa'

const Header = () => {
    const router = useRouter()
    const authModal = useAuthModal()
    const supabaseClient = useSupabaseClient()
    const user = useUser()
    const handleLogout = async()=>{
        const {error} = await supabaseClient.auth.signOut()
        
        router.refresh()
        if (error){
            toast.error(error.message)
        } else{
            toast.success('Logged out!')
        }
    }
    console.log(user)
  return (
    <div className='flex h-auto px-3 text-black bg-white border-b-2 items-center'>
        <div className='flex items-end w-full p-6'>
            {user.user ? (
                <div className='flex justify-between w-full'>
                    <h1 className='text-4xl gap-3'>Hi,{user.userDetails?.full_name ? `${user.userDetails.full_name}`: `Potenial Engineer`} <span className='text-lg text-neutral-700'>Guest user</span></h1>
                        <div className='flex gap-x-4 items-center'>
                            <Button onClick={handleLogout} className='flex my-2 justify-center lg:justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto' >
                                <h1 className="text-base hidden lg:flex text-gray-800 capitalize group-hover:text-white font-semibold ">Logout</h1>
                            </Button>
                            <Button  onClick={()=>router.push('/account')}>
                                <FaUserAlt size={22} className='text-pink-600'/>
                            </Button>
                        </div>
                </div>
               ):(
                <div className='flex justify-between w-full'>
                    <h1 className='text-4xl gap-3'>Hi, Potential Engineer <span className='text-lg text-neutral-700'>Guest user</span></h1>
                    <div className='flex justify-end'>
                        <div>
                            <Button onClick={authModal.onOpen} className='bg-transparent text-neutral-300 font-medium'>
                                Sign Up
                            </Button>
                        </div>
                        <div>
                            <Button onClick={authModal.onOpen} className='bg-white px-6 py-2'>
                                Log in
                            </Button>
                        </div>
                    </div>
                </div>
               )} 
        </div>
    </div>
  )
}

export default Header