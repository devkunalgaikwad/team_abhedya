"use client"

import { sideBarProps } from '@/types'
import React from 'react'
import { BsCalendar2Event } from 'react-icons/bs'
import { CiCreditCard1 } from 'react-icons/ci'
import { GrAchievement, GrHomeRounded, GrStorage } from 'react-icons/gr'
import { HiClipboardList } from 'react-icons/hi'
import { IoIosMore } from 'react-icons/io'
import { TiGroup } from 'react-icons/ti'
import { Popper } from '@mui/base/Popper';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { styled } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import MenuList from '@mui/joy/MenuList';
import MenuItem from '@mui/joy/MenuItem';
import TeamNav from './Nav/TeamNav'
import { useUser } from '@/hookes/useUser'
import GuestNav from './Nav/GuestNav'
import PublicNav from './Nav/PublicNav'

const Popup = styled(Popper)({
  zIndex: 1000,
});

const SideBar = ({children}:sideBarProps) => {
  const user = useUser()
  const userStatus = user.userDetails?.approved  
  return (
    <div>
        <div className='flex h-[100vh]'>
        <div className='hidden md:flex flex-col gap-y-2 h-full w-[15vw] p-2 bg-slate-50'>
            <nav className='flex flex-col h-full justify-between text-black py-3'>
              {user.user ? (userStatus ? <TeamNav/> : < GuestNav/>) : <PublicNav/>}
            </nav>
        </div>
          <main className='h-full flex-1 w-full overflow-y-auto'>
              {children}
          </main>
        </div>
    </div>
  )
}

export default SideBar

