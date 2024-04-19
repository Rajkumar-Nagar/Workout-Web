import React from 'react'

function CommonButton({title,onClick}) {
    return (
        <div onClick={onClick} className='h-[50px] bg-[#697de4] rounded-[12px] justify-center items-center flex text-[#FFFFFF] text-[16px] font-[600] my-5 cursor-pointer hover:bg-[#4b63ed] focus:bg-slate-500     '>
          {title}
        </div>
    )
}

export default CommonButton