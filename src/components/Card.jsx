import React from 'react'
import tablet from '../assets/tablet.png'
import { FaTelegramPlane } from 'react-icons/fa'
const Card = () => {
  return (
    <div className='flex flex-col items-center rounded-lg h-fit w-80 py-2 px-2 bg-white border-b-8 border-[#6b0a0a]'>
        <img src={tablet} alt="Tablet Image" className='w-full rounded-lg'/>
        <div className='upper-wrapper my-4 px-4'>
        <h1 className='font-bold text-base text-center'>Favipiravir 400 mg (Fabiflu) Tablets</h1>
        <p className='price font-bold text-2xl text-[#6b0a0a] text-center'>Rs 1,775<span className='text-gray-400 text-base'> / stripe</span></p> 
        </div>

        <div className='lower-wrapper px-4'>
            <p className='font-bold text-base text-center'>Glenmark Pharmaceutical Limited</p>
            <p className='text-gray-400 text-center'>PARVAT PATIYA, SURAT, GUJARAT</p>
        </div>

        <div className='card-footer flex flex-row gap-4 items-center justify-center border-t-2 w-full py-2'>
            <FaTelegramPlane className='text-xl text-[#00a69a]'/>
            <a href="#" className='text-xl font-bold text-[#00a69a] text-center'>Contact Supplier</a>

        </div>
        

    </div>
  )
}

export default Card