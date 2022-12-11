import React from 'react'
import {AiFillMedicineBox} from 'react-icons/ai'
import {IoPersonCircleOutline} from 'react-icons/io5'
const Navbar = () => {
  return (
    <div className='navbar flex flex-row justify-between items-center bg-[#6b0a0a] py-4 px-4'>
        <div className='logo-container flex flex-row gap-3 items-center justify-start'>
            <AiFillMedicineBox className="text-white text-xl"/>
            <h2 className='logo font-bold text-white text-xl'>Medical Darpan</h2>
        </div>
        <ul className='flex flex-row justify-between items-center gap-10'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Distributors</a></li>
            <li><a href="#">Manufacturers</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
        </ul>

        <div className='right-wrapper flex flex-row justify-end items-center gap-3' >
            <p className='text-white text-base'>Login</p>
            <IoPersonCircleOutline className='text-white text-xl'/>

        </div>

    </div>
  )
}

export default Navbar