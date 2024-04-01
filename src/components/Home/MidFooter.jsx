import React from 'react'

import { MdOutlineAddTask } from "react-icons/md";
import { IoMdHappy } from "react-icons/io";
import { PiPlugsConnectedFill } from "react-icons/pi";


const MidFooter = () => {
  return (
    <div className='h-[27vh] bg-[#DF3027] px-5'>
        <h1 className='text-white text-center text-[40px] font-extralight'>Avec nous,  c'est plus de...</h1>
        <div className='flex items-center gap-7 justify-center'>
            <div className='flex gap-3 items-center pt-7'>
                <MdOutlineAddTask className='text-[70px] text-white' />
                <div className='text-start'>
                    <h1 className='text-white font-bold text-[30px]'>100</h1>
                    <h3 className='text-white text-[15px] font-semibold '>Projets Réalisés</h3>
                </div>
            </div>
            <div className='w-0.5 h-[50px] bg-white '></div>

            <div className='flex gap-3 items-center pt-5'>
                <IoMdHappy className='text-[70px] text-white' />
                <div className='text-start'>
                    <h1 className='text-white font-bold text-[30px]'>120</h1>
                    <h3 className='text-white text-[15px] font-semibold '>Clients Satisfaits</h3>
                </div>
            </div>
            <div className='w-0.5 h-[50px] bg-white '></div>

            <div className='flex gap-3 items-center pt-5'>
                <PiPlugsConnectedFill className='text-[70px] text-white' />
                <div className='text-start'>
                    <h1 className='text-white font-bold text-[30px]'>100%</h1>
                    <h3 className='text-white text-[15px] font-semibold '>Guarantie</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MidFooter