import React from 'react'
import { sideBarProps } from '@/types'
import { BsCalendar2Event } from 'react-icons/bs'
import { CiCreditCard1 } from 'react-icons/ci'
import { GrAchievement, GrHomeRounded, GrStorage } from 'react-icons/gr'
import { HiClipboardList } from 'react-icons/hi'
import { IoIosMore } from 'react-icons/io'
import { TiGroup } from 'react-icons/ti'
import { Popper as Popup } from '@mui/base/Popper';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { styled } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import MenuList from '@mui/joy/MenuList';
import MenuItem from '@mui/joy/MenuItem';


const TeamNav = () => {
    const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleListKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Tab') {
      setOpen(false);
    } else if (event.key === 'Escape') {
      buttonRef.current!.focus();
      setOpen(false);
    }
  };
  return (
    <div className='hidden md:flex flex-col gap-y-2 h-full w-[15vw] p-2 bg-slate-50'>
            <nav className='flex flex-col h-full justify-between text-black py-3'>
              <div>
                <h1 className="text-lg text-center cursor-pointer font-bold text-blue-900 border-b-2 pb-4 w-full">
                  Team Abhedya
                </h1>
                <div className="flex my-2 justify-center lg:justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <GrHomeRounded className="text-2xl text-gray-600 group-hover:text-white " />
                  <h3 className="text-base hidden lg:flex text-gray-800 group-hover:text-white font-semibold ">
                    Home
                  </h3>
                </div>
                <div className="flex my-2 justify-center lg:justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <TiGroup className="text-2xl text-gray-600 group-hover:text-white " />
                  <h3 className="text-base hidden lg:flex text-gray-800 group-hover:text-white font-semibold ">
                    My Team
                  </h3>
                </div>
                <div className="flex my-2 justify-center lg:justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <HiClipboardList className="text-2xl text-gray-600 group-hover:text-white " />
                  <h3 className="text-base hidden lg:flex text-gray-800 group-hover:text-white font-semibold ">
                    Dashboard
                  </h3>
                </div>
                <div className="flex my-2 justify-center lg:justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <CiCreditCard1 className="text-2xl text-gray-600 group-hover:text-white " />
                  <h3 className="text-base hidden lg:flex text-gray-800 group-hover:text-white font-semibold ">
                    Installment
                  </h3>
                </div>
                <div className="flex my-2 justify-center lg:justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <GrAchievement className="text-2xl text-gray-600 group-hover:text-white " />
                  <h3 className="text-base hidden lg:flex text-gray-800 group-hover:text-white font-semibold overflow-hidden ">
                    Achievenment
                  </h3>
                </div>
                <div className="flex my-2 justify-center lg:justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <BsCalendar2Event className="text-2xl text-gray-600 group-hover:text-white " />
                  <h3 className="text-base hidden lg:flex text-gray-800 group-hover:text-white font-semibold ">
                    Season Detail
                  </h3>
                </div>
              </div>
              <div>
                <div className="border-b border-gray-100 pb-4">
                <div>
      <Button
        ref={buttonRef}
        aria-controls={'composition-menu'}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        color="neutral"
        onClick={() => {
          setOpen(!open);
        }}
        className="flex my-2 border-none w-full justify-center lg:justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
      >
        <IoIosMore className="text-2xl text-gray-600 group-hover:text-white " />
        <h3 className="text-base text-gray-800 group-hover:text-white hidden lg:flex font-semibold ">
          More
        </h3>
      </Button>
      <Popup
        role={undefined}
        id="composition-menu"
        open={open}
        anchorEl={buttonRef.current}
        disablePortal
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 4],
            },
          },
        ]}
      >
        <ClickAwayListener
          onClickAway={(event) => {
            if (event.target !== buttonRef.current) {
              handleClose();
            }
          }}
        >
          <MenuList
            variant="outlined"
            onKeyDown={handleListKeyDown}
            sx={{ boxShadow: 'md' }}
            
          >
            <MenuItem onClick={handleClose}>Waiting List</MenuItem>
            <MenuItem onClick={handleClose}>Authroity</MenuItem>
            <MenuItem onClick={handleClose}>Etc</MenuItem>
          </MenuList>
        </ClickAwayListener>
      </Popup>
    </div>
                  <div className="flex mb-2 justify-center lg:justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <GrStorage className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 group-hover:text-white hidden lg:flex font-semibold ">
                      Storage
                    </h3>
                  </div>
                </div>
              </div>
            </nav>
          </div>
  )
}

export default TeamNav