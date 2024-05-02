import React from 'react'

const Filcard = (props) => {
  return (
   <div className='min-w-16 h-10 cursor-pointer rounded-md shadowm flex bg-slate-100 justify-center items-center m-2'>
<div className='w-4/5 ml-2 font-semibold'>{props.name}</div>
<button className='w-1/5 ml-5 mr-2 font-extrabold' onClick={(e)=>props.delete(props.index)}>X</button>
   </div>
  )
}

export default Filcard