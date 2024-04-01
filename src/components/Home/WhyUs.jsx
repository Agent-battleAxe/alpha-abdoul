import React from 'react'

import {GrUserExpert, GrBusinessService} from "react-icons/gr";
import {AiOutlineRise} from "react-icons/ai";
import {GiDiamondHard} from "react-icons/gi";


import { illustrations } from '../../config/images'

const WhyUS = () => {
  const reasons = [
    {
      name: 'Expertise de pointe',
      img : <GrUserExpert/>,
      desc : 'Notre équipe est composée de professionnels hautement qualifiés et expérimentés, garantissant des résultats de qualité supérieure à chaque projet.'
    },
    {
      name: 'Service personnalisé',
      img : <GrBusinessService />,
      desc : 'Nous nous engageons à comprendre les besoins uniques de chaque client et a fournir des solutions sur mesure qui dépassent leurs attentes.'
    },
    {
      name: "Engagement envers l’excellence ",
      img : <AiOutlineRise />,
      desc : 'Nous sommes déterminées à maintenir des normes les plus élevées en matière de qualité, de sécurité et de durabilité dans tout ce que nous entreprenons.'
    },
    {
      name: 'Fiabilité et transparence ',
      img : <GiDiamondHard />,
      desc : 'Nous croyons en la communication ouverte et en la transparence à chaque étape du processus, garantissant ains une relation de confiance.'
    }
  ]



  return (
    <div className='h-[90vh]'>
      <div className='pl-20'>
        <h1 className='text-[25px] font-light text-[#1F917E] pt-10'>Pourquoi Nous choisir?</h1>
        <div className='h-1 w-[10%] bg-[#1F917E] '></div>
      </div>
      <div className='flex items-center'>
        <div className='w-[35%] px-10 '>
          <img src={illustrations.un_2} className="h-[450px] w-[450px] pt-10 " alt="" />
        
        </div>
        <div className=' w-[65%] px-3 pb-12'>
          <div className='pl-5'>
            <h1 className='text-[35px] text-[#1F917E] font-bold '>Avec Alpha Abdoul</h1>
            <p className='text-[20px]> text-gray-400'> Votre satisfaction est notre priorité car nous vous offrons :</p>
          </div>
          

          <div className='pt-5'>

            <div className='flex items-center justify-center gap-2 text-white'>´
              {reasons.slice(0,2).map((item, i) =>{
                return(
                  <div key={i} className='flex w-[49%] gap-3 items-center px-2 py-2 bg-[#1F917E] hover:bg-white hover:text-black shadow-xl'>
                      <p className='text-[45px]'>{item.img}</p>
                      <div>
                        <h1 className='text-[20px] font-bold'>{item.name}</h1>
                        <p>{item.desc}</p>
                      </div>
                  </div>
                )    
              })}
             
            </div>

            <div className='flex items-center justify-center gap-2 pt-5'>´
              {reasons.slice(2,4).map((item, i) =>{
                return(
                  <div key={i} className='flex w-[49%]  gap-3 items-center px-2 py-2 bg-white  hover:bg-[#DF3027] hover:text-white rounded-sm shadow-xl'>
                      <p className='text-[45px]'>{item.img}</p>
                      <div>
                        <h1 className='text-[20px] font-bold'>{item.name}</h1>
                        <p>{item.desc}</p>
                      </div>
                  </div>
                )    
              })}
             
            </div>

          </div>

        </div>
      </div>
        
        
    </div>
  )
}

export default WhyUS