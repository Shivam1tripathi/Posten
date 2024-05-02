import React from 'react'

const Card = (props) => {
  return (
    <div className='w-3/5 max-md:w-5/6 min-h-40 mt-8'>
        <div className='h-2/6 bg-slate-700 font-bold text-2xl max-md:text-xl flex justify-between items-start p-2 '>
            <h1>{props.title}</h1>
            <div className='flex w-2/4 justify-end flex-wrap'>
              <h1 className='text-base mr-4'>Tags:-</h1>
            {props.tags.map((e)=>{return <h1 className='text-sm mr-3 text-zinc-300'> #{e}</h1>})}
            </div>
        </div>
        <div className='min-h-4/6 bg-gray-500 p-3 font-semibold '>
            {props.body}
        </div>
    </div>
  )
}

export default Card