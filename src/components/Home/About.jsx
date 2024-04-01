import React from 'react'


import { images_bg,service,pictures, illustrations } from '../../config/images'

const About = () => {

  const desc = [
    {
      name: 'Batiments',
      image : service.house_1,
      desc : "Spécialisé dans la construction de bâtiments résidentiels, commerciaux et industriels. Notre équipe compétente et dévouée crée des structures innovantes et durables, en mettant l'accent sur la qualité, la sécurité et la satisfaction du client. Que ce soit pour une maison, un bureau ou un entrepôt, nous sommes là pour transformer vos visions en réalité"
    },
    {
      name: 'Routes',
      image :service.road_1,
      desc : "Alpha-Abdoul excelle dans la construction de routes et d'infrastructures routières de qualité supérieure. Grâce à notre expertise technique et à notre engagement envers l'efficacité, nous assurons la création de routes durables, sûres et fonctionnelles."
    },
    {
      name: 'Fournitures Services',
      image : service.service_1,
      desc : "Alpha-Abdoul offre une gamme complète de services dans le domaine de la construction, incluant la conception, la gestion de projet, la construction et la rénovation. Notre équipe qualifiée et expérimentée travaille en étroite collaboration avec nos clients pour fournir des solutions personnalisées répondant à leurs besoins spécifiques."
    },

  ]

  return (
    <div className='pb-14'>
      <div className='flex relative justify-center gap-7 top-[-70px]'>
        {desc.map((item, i) =>{
          return(
            <div key={i} className='h-[400px] w-[22%] bg-white shadow-2xl rounded-md px-3 py-4  '>
              <img src={item.image} className = 'h-[100px] w-[100px] rounded-full relative left-[50%] translate-x-[-50%] ' alt="" />
              <h1 className='text-center pt-2 font-bold text-[17px] text-[#1F917E] uppercase '>{item.name}</h1>
              <div className='mt-1 h-[0.065rem] w-full bg-gray-300'></div>
              <p className='text-gray-500 font-semibold text-[13px] pt-4 text-justify'>{item.desc}</p>
              
            </div>


            // bg-[#1F917E]

          )
        })}
       
      </div>
      {/* <div className='pt-10' style={{backgroundImage : `url(${images_bg.design_bg})`, backgroundPosition : 'center', backgroundSize : 'cover',  backgroundRepeat : 'no-repeat'}}> */}
      <div>  
        <div  className='flex justify-center gap-16 items-center w-full'>
          <div className='border-4 border-[#1F917E] h-[500px] w-[35%]'>
            <img src={pictures.im_5} alt="" className='h-[inherit] w-full relative top-3 left-4' />
          </div>
          <div className='w-[35%]'>
            <div>
              <h1 className='capitalize font-bold text-[35px] text-right'>A Propos</h1>
              <div className='h-1 w-[40%] bg-[#ED206F] relative left-[100%] translate-x-[-100%]'></div>
              <h3 className='pt-5 uppercase w-[70%] font-semibold'>Nous sommes des leader dans l'industrie de la construction</h3>
            </div>
            <div className='text-justify pt-3 text-gray-500 font-semibold'>
                Alpha Abdoul, votre partenaire de confiance dans le domaine de la construction. Forts de notre expertise et de notre engagement envers l'excellence, 
                nous nous efforçons de fournir des services de construction de haute qualité, allant de la conception à la réalisation. 
                Notre équipe expérimentée est dédiée à la satisfaction de nos clients, en offrant des solutions sur mesure et en veillant à ce que chaque projet soit 
                réalisé avec précision, dans les délais et selon les normes les plus élevées. Que ce soit pour des projets résidentiels, commerciaux ou industriels, 
                nous sommes là pour transformer vos idées en réalité. Faites confiance à Alpha Abdoul pour des constructions solides et durables.
            </div>
          </div>
        </div>
    
      </div>
    </div>
    
  )
}

export default About