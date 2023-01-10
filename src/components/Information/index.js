import React from 'react'

const Information = ({icon, text}) => {
  return (
    <div className='flex w-auto items-center'>
        <img className='w-[16px] h-[18px] mr-[8px]' src={icon} alt='' />
        <p className='font-roboto font-normal text-[20px] text-[#000000B2]'>{text}</p>
    </div>
  )
}

export default Information