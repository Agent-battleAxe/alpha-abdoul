import React from 'react'


import { FaPhoneAlt,FaFacebook,FaInstagram,FaTwitterSquare,FaWhatsapp,FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import { Navigation, Footer } from '../components'
import { pictures,images_bg } from '../config/images'




const Team = () => {

  const teamPresentation = [
    {
      name: 'James Smith',
      img : pictures.im_5,
      title : 'Ingénieur Batiment',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae officiis, eos blanditiis repellat esse reiciendis quod tenetur nisi, architecto sapiente possimus velit repudiandae ratione quas veritatis quos, enim cupiditate. Dolorem.', 
      contact : '+237 642458645'
    },
    {
      name: 'James Smith',
      img : pictures.im_5,
      title : 'Ingénieur Batiment',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae officiis, eos blanditiis repellat esse reiciendis quod tenetur nisi, architecto sapiente possimus velit repudiandae ratione quas veritatis quos, enim cupiditate. Dolorem.', 
      contact : '+237 642458645'
    },
    {
      name: 'James Smith',
      img : pictures.im_5,
      title : 'Ingénieur Batiment',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae officiis, eos blanditiis repellat esse reiciendis quod tenetur nisi, architecto sapiente possimus velit repudiandae ratione quas veritatis quos, enim cupiditate. Dolorem.', 
      contact : '+237 642458645'
    },
    {
      name: 'James Smith',
      img : pictures.im_5,
      title : 'Ingénieur Batiment',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae officiis, eos blanditiis repellat esse reiciendis quod tenetur nisi, architecto sapiente possimus velit repudiandae ratione quas veritatis quos, enim cupiditate. Dolorem.', 
      contact : '+237 642458645'
    },
    {
      name: 'James Smith',
      img : pictures.im_5,
      title : 'Ingénieur Batiment',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae officiis, eos blanditiis repellat esse reiciendis quod tenetur nisi, architecto sapiente possimus velit repudiandae ratione quas veritatis quos, enim cupiditate. Dolorem.', 
      contact : '+237 642458645'
    },
    {
      name: 'James Smith',
      img : pictures.im_5,
      title : 'Ingénieur Batiment',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae officiis, eos blanditiis repellat esse reiciendis quod tenetur nisi, architecto sapiente possimus velit repudiandae ratione quas veritatis quos, enim cupiditate. Dolorem.', 
      contact : '+237 642458645'
    },
    {
      name: 'James Smith',
      img : pictures.im_5,
      title : 'Ingénieur Batiment',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae officiis, eos blanditiis repellat esse reiciendis quod tenetur nisi, architecto sapiente possimus velit repudiandae ratione quas veritatis quos, enim cupiditate. Dolorem.', 
      contact : '+237 642458645'
    },
  ]

  return (
    <div>
      {/* Navigation Menu */}
      <div><Navigation /></div>

      <div style={{backgroundImage : `url(${pictures.im_3})`, backgroundPosition : 'center', backgroundSize : 'cover', backgroundAttachment : 'fixed', backgroundRepeat : 'no-repeat'}} className='h-[70vh]  w-full'>
        <div className='bg-black/50 h-[inherit] flex justify-center items-center'>
          <div>
            <h1 className='text-white font-bold text-[45px]'>Rencontrez notre equipe</h1>
            <div className='bg-white w-[45%] h-0.5'></div>
          </div>
        </div>
      </div>
      <div className='flex h-[500px] w-[55%] relative mt-[-110px] left-[50%] translate-x-[-50%] bg-white shadow-2xl'>
            <div className='w-[40%] bg-[#1F917E]'>
              <img src={images_bg.director} className='h-[85%] w-full' alt="director" />
              <div className='text-center text-white pt-2'>
                <h1 className='text-[20px] font-bold'>Abdoul Alpha</h1>
                <small>Directeur Général</small>
              </div>
            </div>

            <div className='px-5 py-2 w-[55%]'>
              <h1 className='font-bold text-[22px] text-black/40 underline'>Directeur Général </h1>
              <p className='pt-10 text-justify'>Alpha Abdoul, Directeur Général de ETS Alpha-Abdoul, incarne l'esprit de leadership et d'innovation au cœur de notre entreprise. 
                Avec une expérience extensive dans l'industrie de la construction, Alpha apporte une vision stratégique et un dévouement sans faille à chaque projet. 
                Son engagement envers l'excellence et sa passion pour offrir des solutions de pointe ont été les moteurs de notre succès. 
                En tant que leader inspirant, Alpha guide notre équipe vers l'atteinte de nouveaux sommets, tout en veillant à ce que chaque 
                client bénéficie d'un service exceptionnel et personnalisé</p>
            </div>
      </div>
      <h2 className='pl-10 pt-10 text-[25px] font-medium text-[#1F917E] text-center'>Rencontrez toute mon equipe</h2>
      <div className='text-center pt-7'>
        {teamPresentation.map((item, i) =>{
          return (
            <div key={i} className='w-[25%] bg-white shadow-2xl hover:bg-[#1F917E] hover:text-white group mt-2 mx-1 py-5 px-5 inline-block'>
              <img src={item.img} className='h-[200px] w-[200px] rounded-full relative left-[50%] translate-x-[-50%] ' alt="" />

              <h1 className='pt-3 font-bold text-gray-500 text-[20px] group-hover:text-white '>{item.name}</h1>
              <small>{item.title}</small>

              <div>
                <h2 className='text-[#ED206F] font-bold text-[17px] text-start pt-2'>A Propos</h2>
                <div className='bg-[#ED206F] h-0.5 w-[25%] '></div>
                <p className='text-justify text-[13px] font-semibold text-black/50 group-hover:text-white '>{item.desc}</p>
              </div>
              <div className='flex items-center pt-5 gap-3 justify-center text-[20px] text-[#ED206F]'>
                <MdOutlineEmail className='text-[25px]'/>
                <FaFacebook />
                <FaPhoneAlt />
              </div>
            </div>
          )
        })}
      </div>
      <div className='pt-4'>
        <Footer />
      </div>
     
    </div>
  )
}

export default Team