'use client'

import React from 'react'
import {IoMdClose} from 'react-icons/io'
import { modalProps } from '@/types'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import img from '@/public/IMG_20240126_000152.png'

const Modal = ({isOpen, onChange, title, description,children}:modalProps) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange} >
      <Dialog.Portal>
        <Dialog.Overlay className='bg-neutral-900/10 backdrop-blur-sm fixed inset-0'>
          <Dialog.Content className='flex w-[80vw] drop-shadow-md h-[80vh] justify-between top-[50%] left-[50%] translate-x-[15%] translate-y-[15%]'>
            <div className='flex w-auto min-w-[40%] rounded-l-xl px-6 text-black flex-col justify-center items-center h-full bg-gray-300'>
                <Dialog.Title className='text-xl text-center font-bold'>
                  {title}
                </Dialog.Title>
                <Dialog.Description className='leading-normal text-sm text-center mb-2'>
                  {description}
                </Dialog.Description>
                <div>
                  {children}
                </div>
            </div>
            <div className='flex w-full flex-col h-full rounded-r-xl justify-center items-center bg-pink'>
              <div className='flex flex-col w-full h-full justify-center items-center'>
                <h1 className='font-bold capitalize text-black  text-3xl '>Team</h1>
                <h2 className='font-bold capitalize text-3xl text-black'>Abhedya</h2>
              </div>
              <Image src={img} width={400} alt='Team Abhedya'/>
              <p className='p-4 text-center text-gray-300 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda error atque ipsam reprehenderit? Blanditiis, illum nihil nam, sed rerum hic delectus, reiciendis voluptas sequi maiores sunt eligendi fuga quae ipsa!</p>
              <Dialog.Close asChild>
                <button type='button' className='absolute top-[10px] right-[10px] text-neutral-400 hover:text-white inline-flex cursor-pointer appearance-none rounded-full justify-center items-center focus:outline-none' aria-label="Close">
                  <IoMdClose color='black' size={20}/>
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal;

// <Dialog.Overlay className='bg-neutral-900/10 backdrop-blur-sm fixed inset-0'>
//           <Dialog.Content className='fixed drop-shadow-md border border-neutral-700 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-neutral-600 p-[25px] focus:outline-none'>
//             <Dialog.Title className='text-xl text-center font-bold mb-4'>
//               {title}
//             </Dialog.Title>
//             <Dialog.Description className='leading-normal text-sm text-center mb-5'>
//               {description}
//             </Dialog.Description>
//             <div>
//               {children}
//             </div>
//             <Dialog.Close asChild>
//               <button type='button' className='absolute top-[10px] right-[10px] text-neutral-400 hover:text-white inline-flex cursor-pointer appearance-none rounded-full justify-center items-center focus:outline-none' aria-label="Close">
//                 <IoMdClose/>
//               </button>
//             </Dialog.Close>
//           </Dialog.Content>
//         </Dialog.Overlay>