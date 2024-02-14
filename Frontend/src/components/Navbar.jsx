import React from 'react'
import {Routes, Route,Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full text-[16px] p-3 flex justify-around border-b-slate-100 items-center  '>
        <div className='font-bold '>
         <Link to='/'>Auth App</Link>
        </div>
        <div>
          <ul className='flex gap-4'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/sign-in'>Sign in</Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
