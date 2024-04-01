import React from 'react'


import { FaPhoneAlt } from "react-icons/fa";

// image import 
import { logo,pictures } from '../../config/images'

const Header = () => {
  


    return (
        <div className=''>
            {/* Navigation section */}
            {/* <nav className='fixed z-10 w-full bg-white flex justify-between items-center pl-40 pr-5 py-2 shadow'>
                <div>
                    <img src={logo.web_logo} className='h-[60px] w-[75px]' alt=""/>
                </div>
                <div>
                    <ul className='flex items-center gap-4 uppercase'>
                        <li className='hover:text-[#ED206F] hover:font-semibold'><a href="">Acceuil</a></li>
                        <li className='hover:text-[#ED206F] hover:font-semibold'><a href="">A Propos</a></li>
                        <li className='hover:text-[#ED206F] hover:font-semibold'><a href="/equipe">Notre Equipe</a></li>
                        <li className='hover:text-[#ED206F] hover:font-semibold'><a href="/realisation">Nos Realisations</a></li>
                        <li className='hover:text-[#ED206F] hover:font-semibold'><a href="">Contact</a></li>
                        <li className='flex items-center text-white font-bold gap-4 px-5 py-2 bg-[#ED206F]'> <FaPhoneAlt className='text-white' />+237 692571246</li>
                    </ul>
                </div>
            </nav> */}
            
            <div style={{backgroundImage : `url(${pictures.im_1})`, backgroundPosition : 'center', backgroundSize : 'cover', backgroundAttachment : 'fixed', backgroundRepeat : 'no-repeat'}} className='h-[100vh]  w-full'>
                <div className='h-[inherit] w-[inherit] flex justify-center items-center bg-black/50 '>
                    <div className='w-[60%] relative '>
                        <h1 className='text-white uppercase text-[65px] font-bold '>Bienvenue</h1>
                        <h2 className='text-[40px] text-white font-bold'><span className='text-[#DF3027] uppercase'>Alpha</span>-<span>Abdoul </span></h2>
                        <h3 className='text-white font-semibold w-[40%]'>Votre partenaire de confiance pour des constructions solides et innovantes.</h3>
                        <button className='mt-5 px-3 py-2 font-semibold text-white italic rounded-sm bg-[#1F917E]'>Decouvrir nos projets</button>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Header