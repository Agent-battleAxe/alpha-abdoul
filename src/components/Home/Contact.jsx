import React, { useEffect,useRef} from 'react'


import { GoCommentDiscussion } from "react-icons/go";

import { SlBubbles } from "react-icons/sl";
import { IoIosChatbubbles,IoIosSend  } from "react-icons/io";

import { pictures } from '../../config/images'


const Contact = () => {


  
  return (
    <div className='h-[110vh]' style={{backgroundImage : `url(${pictures.im_2})`, backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat'}}>
        <div className='h-[inherit] bg-white/20 flex justify-end items-center pr-[50px]'>
            <div className='h-[600px] w-[40%] bg-white px-5 py-5' >
                <IoIosChatbubbles  className='text-[70px] text-[#DF3027] relative left-[50%] translate-x-[-50%] '/>
                <h1 className='font-bold text-center pt-2 text-[25px] capitalize text-black/60'>Vous avez des questions?</h1>
                <p className='pt-1 font-thin text-[13px] text-center'>Posez la ici dans ce formulaire s'il vous plait</p>
                
                <form action="" className='px-10 pt-8'>
                    <label className='font-bold text-gray-400 text-[14px]'>Nom Complet *</label>
                    <input type="text" className='w-full mt-2 mb-1.5 px-2 py-2 border border-gray-300 rounded-md' placeholder='John' />

                    <label  className='font-bold text-gray-400 text-[14px]'>Email *</label>
                    <input type="email" className='w-full mt-2  mb-1.5 px-2 py-2 border border-gray-300 rounded-md' placeholder='...@mail.co' />

                    <label  className='font-bold text-gray-400 text-[14px]'>Votre message *</label>
                    <textarea name="" id="" rows="5" className='w-full mt-2 px-2 py-2 border border-gray-300 rounded-md' placeholder='Salut, Entrez votre message ici'></textarea>
                    <button className='w-full flex justify-center gap-1 items-center py-3 rounded-md text-white bg-[#DF3027] border border-[#DF3027] font-semibold hover:bg-transparent hover:text-[#DF3027]'>
                         Envoyer <IoIosSend className='text-[25px]' /></button>
                </form>

            </div>
        </div>
    </div>
  )
}

export default Contact