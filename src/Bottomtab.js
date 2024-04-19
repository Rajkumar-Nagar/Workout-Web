import React from 'react'
import { Link } from 'react-router-dom'

function Bottomtab() {
    return (
        <div className='select-none p-3 bg-[rgb(255,255,255)] relative  flex justify-between '>

            <div className='LeftPart flex gap-10'>
                <Link to={"/WorkOutTracker"}>
                    <img src="Vector300.png" className='h-[27px] w-[27px]' alt="reload" />
                </Link>
                <Link to={"/WorkOutSchedual"}>
                    <img src="Group3.png" className='h-[27px] w-[27px]' alt="reload" />
                </Link>
            </div>
            <div className='MiddlePart absolute left-[50%] top-[-32px] translate-x-[-50%] cursor-pointer'>
                <img src="Group5.png" alt="reload" className='h-[63px] w-[63px] m-auto' />
            </div>
            <div className='RightPart flex gap-10 cursor-pointer'>
                <img src="Vector31.png" className='h-[27px] w-[27px]' alt="reload" />
                <img src="Group4.png" alt="reload" className='h-[27px] w-[27px]' />
            </div>

        </div>
    )
}

export default Bottomtab