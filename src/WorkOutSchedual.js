import React from 'react'
import Bottomtab from './Bottomtab'

function WorkOutSchedual() {

    const Data = [
        {
            "time": "06:00 AM",
            "task": "Ab Workout, 7:30am"
        },
        {
            "time": "07:00 AM",
        },
        {
            "time": "08:00 AM",
            "task":"Upperbody Workout, 9am"
        },
        {
            "time": "09:00 AM",
        },
        {
            "time": "10:00 AM",
        },
        {
            "time": "11:00 AM",
        },
        {
            "time": "12:00 PM",
        },
        {
            "time": "01:00 PM",
        },
        {
            "time": "02:00 PM",
            "task": "Lowerbody Workout, 3pm"
        },
        {
            "time": "03:00 PM",
        },
        {
            "time": "04:00 PM",
        },
        {
            "time": "05:00 PM",
        }
    ];


    return (
        <div className='flex flex-col h-full maincontainer px-5 relative overflow-hidden'>
            <div className='flex items-center gap-4 mt-5'>
                <Link to="/WorkOutTracker" className='w-[22px] h-[22px] rounded-[3px] bg-[#F1F1F1] flex justify-center items-center'>
                    <img src="/Vector32.png" width={8} height={10} alt="" />

                </Link>
                <h1 className='text-[20px] text-[#2C2B2B] font-[600]'>Workout Schedule</h1>
            </div>

            <div className="flex-1 overflow-y-auto">
                <div className='flex items-center justify-center space-x-2 my-5'>
                    <img src="Vector32.png" alt="reload" className='w-[10px] h-[10px]' />
                    <h1 className='font-[600] text-[#2C2B2B] text-[12px]'>Feb 2024</h1>
                    <img src="Vector33.png" alt="reload" className='w-[10px] h-[10px]' />
                </div>

                <div className='daycontainer flex justify-between items-center my-5'>

                    <div className="daybox w-[16%] h-[78px] flex flex-col justify-center items-center">
                        <h1 className='font-[600] text-[#454545] text-[12px]'>Sun</h1>
                        <h1 className='font-[600] text-[#454545] text-[28px]'>5</h1>
                    </div>
                    <div className="daybox w-[16%] bg-[#8DA4FF] rounded-[10px] h-[78px] flex flex-col justify-center items-center">
                        <h1 className='font-[600] text-[#FFFFFF] text-[12px]'>Mon</h1>
                        <h1 className='font-[600] text-[#FFFFFF] text-[28px]'>6</h1>
                    </div>
                    <div className="daybox w-[16%] h-[78px] flex flex-col justify-center items-center">
                        <h1 className='font-[600] text-[#454545] text-[12px]'>Tue</h1>
                        <h1 className='font-[600] text-[#454545] text-[28px]'>7</h1>
                    </div>
                    <div className="daybox w-[16%] h-[78px] flex flex-col justify-center items-center">
                        <h1 className='font-[600] text-[#454545] text-[12px]'>Wed</h1>
                        <h1 className='font-[600] text-[#454545] text-[28px]'>8</h1>
                    </div>
                    <div className="daybox w-[16%] h-[78px] flex flex-col justify-center items-center">
                        <h1 className='font-[600] text-[#454545] text-[12px]'>Thu</h1>
                        <h1 className='font-[600] text-[#454545] text-[28px]'>9</h1>
                    </div>

                </div>

                <div className="">
                    {Data.map(({ time, task }) => (
                        <div key={time} className="color-[#2C2B2B] w-full py-3 px-3 border-b border-b-[0.5] border-b-[#7F7F7F] flex gap-5">
                            {time} {task && <span className='bg-[#D3A4F4] px-3 py-1 text-white rounded-full text-[12px]'>{task}</span>}
                        </div>
                    ))}
                </div>

            </div>

            <div className='Bottomtab'>
                <Bottomtab />
            </div>
        </div>
    )
}

export default WorkOutSchedual