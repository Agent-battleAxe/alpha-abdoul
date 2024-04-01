import React from 'react'

import { logo } from '../../config/images'
import { FaPhoneAlt } from 'react-icons/fa'

const Navigation = () => {
  return (
    <div>
         <nav className='fixed z-10 w-full bg-white flex justify-between items-center pl-40 pr-5 py-2 shadow'>
                <div>
                    <img src={logo.web_logo} className='h-[70px] w-[80px]' alt=""/>
                </div>
                <div>
                    <ul className='flex items-center gap-4 uppercase'>
                        <li className='hover:text-[#DF3027] hover:font-semibold'><a href="/">Acceuil</a></li>
                        <li className='hover:text-[#DF3027] hover:font-semibold'><a href="">A Propos</a></li>
                        <li className='hover:text-[#DF3027] hover:font-semibold'><a href="/equipe">Notre Equipe</a></li>
                        <li className='hover:text-[#DF3027] hover:font-semibold'><a href="/realisation">Nos Realisations</a></li>
                        <li className='hover:text-[#DF3027] hover:font-semibold'><a href="">Contact</a></li>
                        <li className='flex items-center text-white font-bold gap-4 px-5 py-2 bg-[#DF3027]'> <FaPhoneAlt className='text-white' />+237 692571246</li>
                    </ul>
                </div>
            </nav>
    </div>
  )
}

export default Navigation