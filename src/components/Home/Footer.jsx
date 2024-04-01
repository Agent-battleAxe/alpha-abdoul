import React from 'react'

import { FaPhoneAlt,FaFacebook,FaInstagram,FaTwitterSquare,FaWhatsapp,FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import { logo } from '../../config/images'

const Footer = () => {
  return (
    <div className='bg-slate-100 '>
      <div className='flex pt-10 pb-7 justify-center'>
        <div className='w-[25%]'>
          <img src={logo.web_logo} alt="" className='h-[100px] w-[120px] ' />
          <div className='pt-3 w-[90%] text-[14px] font-bold'>Faite nous confiance car nous sommes des leader dans l'industrie de la construction</div>
        </div>

        <div className='w-[20%]'>
          <h1 className='font-light text-[30px] text-gray-500 '>Explorer Plus</h1>
          <div className='w-[50%] bg-slate-400 h-0.5'></div>
          <ul className='text-[17px] font-semibold pt-9'>
            <li className='hover:text-[#DF3027] hover:font-bold'><a href="">Acceuil</a></li>
            <li className='hover:text-[#DF3027] hover:font-bold'><a href="">A Propos</a></li>
            <li className='hover:text-[#DF3027] hover:font-bold'><a href="">Notre Equipe</a></li>
            <li className='hover:text-[#DF3027] hover:font-bold'><a href="">Nos Realisation</a></li>
            <li className='hover:text-[#DF3027] hover:font-bold'><a href="">Contact</a></li>
          </ul>
        </div>

        <div className=' w-30%'>
          <h1 className='px-14 py-3 border-2 border-[#1F917E] font-bold text-[25px] text-[#1F917E] '>Rejoignez Nous</h1>

          <div className='pt-5'>
            <p className='text-[18px] '>Situé a Bastos, Yaounde</p>
            <p className='text-[18px]'>CAMEROUN</p>

            <p className='pt-3 flex items-center gap-3 text-[17px] '>
              <FaPhoneAlt />
              +237 692571246
            </p>

            <p className='pt-1 flex items-center gap-3 text-[17px]'>
              <MdOutlineEmail className='text-[20px]' />
              ousmanououmarou@gmail.com
            </p>

            <div className='pt-4 flex items-center  gap-5 text-[25px]'>
              <FaFacebook className='hover:text-[#1F917E] cursor-pointer ' />
              <FaInstagram className='hover:text-[#1F917E] cursor-pointer '/>
              <FaWhatsapp className='hover:text-[#1F917E] cursor-pointer ' />
              <FaTwitterSquare className='hover:text-[#1F917E] cursor-pointer ' />
              <FaLinkedinIn className='hover:text-[#1F917E] cursor-pointer ' />
            </div>
          </div>
        </div>
        
      </div>
      <div className='text-center font-semibold py-3 bg-slate-200'>&#169; Copyright 2024 Alpha-Abdoul, Tous droits reservés</div>
    </div>
  )
}

export default Footer