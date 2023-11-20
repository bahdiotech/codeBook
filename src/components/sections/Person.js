import React from 'react'
import './person.css'
import { Link } from 'react-router-dom'

export const Person = () => {
  return (
    <div className=' persons block  items-center  absolute z-20 float-right bg-slate-300 dark:bg-slate-300 h-[10rem] other:m-3 slide mx-auto focus:outline-none  
    right-[10rem] w-[100px] sm:w-[100px] lg:w-[170px] '>
        <div className='mx-auto text-xl'>
        <Link to='/products' className='block'>All eBooks</Link>
        <Link className='block'>Login</Link>
        <Link className='block'>Register</Link>
        </div>
    </div>
  )
}
