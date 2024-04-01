import React from 'react'

import { Navigation } from '../components'


const NotFound = () => {
  return (
    <div>
        <div><Navigation /></div>
        <div className='flex h-[100vh] justify-center items-center'>
            <div className=''>
                <h1 className='text-[#DF3027] text-[80px] font-extrabold'>404</h1>
                <h1 className=' text-[50px] font-bold text-gray-600 mt-[-20px]'>Not Found.</h1>
                <p className='font-light'>L'adresse entrée est introuvable sur ce site</p>
            </div>
            
        </div>
    </div>
  )
}

export default NotFound