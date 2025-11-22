import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { MdFoodBank } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";



function NavBar() {
  return (
    <div>
    <div className=' flex items-center justify-between h-3 font-display text-lg p- py-5 bg-orange-400  rounded-b-lg shadow-2xl'>
        <h1 className='text-white pl-5 w-6 '>BiteBox.</h1>
        <nav>
            <ul className='flex items-center gap-6'>
                <li> <Link to="/"><MdFoodBank size={24} className='hover:text-white' /></Link> </li>
                 <li> <Link to="/Login"><IoPersonSharp size={24} className='hover:text-white' /></Link> </li>
                  <li> <Link to="/"><FaCartPlus size={24} className='hover:text-white' /></Link> </li>
                  <input type="text" placeholder='Find Your flavor' className='px-4 py-2 pr-5  rounded-3xl outline-none bg-amber-600 text-black placeholder-gray-600 shadow ' />
                 
            </ul>
        </nav>

    
    </div> 
    <Outlet />
    </div>
  )
}

export default NavBar