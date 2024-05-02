import React, { useState } from 'react'

const Navbar = (props) => {
    const [filt,setfilt]=useState();
  return (
    <div className='h-16 bg-slate-700 text-white font-bold flex items-center justify-between'>
        <h1 className='md:ml-10 max-md:ml-4 text-3xl font-extrabold'>Posten</h1>
        <div className='md:mr-20 max-md:mr-4'>
            <input type="text" value={filt} onChange={(e)=>{setfilt(e.target.value)}} placeholder='Add filter here....' className='mr-1 text-gray-800 rounded-md font-semibold pl-2 w-72 max-md:w-60 h-7' />
            <button className='w-6' onClick={(e)=>{
                props.Addfilter(filt)
                setfilt("");
                }}><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </div>
  )
}

export default Navbar