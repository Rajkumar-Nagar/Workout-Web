import React from 'react'
import Bottomtab from './Bottomtab'
import { Link } from 'react-router-dom'

function WorkOutTracker() {

    return (
        <div className='flex flex-col h-full maincontainer px-5 relative overflow-hidden'>
            <div className='flex mt-4 items-center gap-4'>
                <Link to={"/GoalPage"} className='w-[22px] h-[22px] rounded-[3px] bg-[#F1F1F1] flex justify-center items-center'>
                    <img src="/Vector32.png" width={8} height={10} alt="" />

                </Link>
                <h1 className='text-[20px] text-[#2C2B2B] font-[600]'>What are your Goals?</h1>
            </div>

            <div className='flex-1 overflow-y-auto'>

                <div className="chart mt-12">
                    <img src="Value.png" alt="reload" className='w-[100%]' />
                </div>

                <div className="warning mt-7 flex space-x-4 items-center px-4 h-[55px] rounded-[10px] bg-gradient-to-r from-[#819DFF] to-[#FFFFFF]  ">
                    <div>
                        <img src="alert.png" alt="reload" className='w-[20px] h-[20px]' />
                    </div>
                    <div>
                        <h1 className='font-[500] text-[13px] text-[#2C2B2B]'>You've burned fewer calories than</h1>
                        <h1 className='font-[500] text-[13px] text-[#2C2B2B]'>yesterday. Time to get moving! </h1>
                    </div>
                </div>

                <div className='upcomingworkOut my-12'>

                    <div className='flex justify-between'>
                        <h1 className='font-[600] text-[16px] text-[#2C2B2B]'>Upcoming WorkOut</h1>
                        <h1 className='font-[500] text-[12px] text-[#7F7F7F]'>See more</h1>
                    </div>

                    <div className="workoutContaienr space-y-5 mt-5">
                        <div className="workOutBox h-[75px] items-center flex justify-between shadow-2xl rounded-[12px] px-5 ">
                            <div className="left flex space-x-5">
                                <img src="Ellipse53.png" alt="reload" className='w-[50px] h-[50px]' />
                                <div className='flex justify-center flex-col gap-2'>
                                    <h1 className='font-[500] text-[12px] text-[#2C2B2B]'>Full Body Workout</h1>
                                    <h1 className='font-[500] text-[10px] text-[#7F7F7F]'>Today 3pm</h1>
                                </div>
                            </div>
                            <div className="Right">
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" />
                                    <div class="relative w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

                                </label>
                            </div>
                        </div>

                        <div className="workOutBox h-[75px] items-center flex justify-between shadow-2xl rounded-[12px] px-5 ">
                            <div className="left flex space-x-5">
                                <img src="Ellipse54.png" alt="reload" className='w-[50px] h-[50px]' />
                                <div className='flex justify-center flex-col gap-2'>
                                    <h1 className='font-[500] text-[12px] text-[#2C2B2B]'>Upper Body Workout</h1>
                                    <h1 className='font-[500] text-[10px] text-[#7F7F7F]'>Today 5pm</h1>
                                </div>
                            </div>
                            <div className="Right">
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" />
                                    <div class="relative w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

                                </label>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='space-y-5'>
                    <h1 className='font-[600] text-[16px] text-[#2C2B2B]'>What Do You Want to Train</h1>

                    <div className='h-[125px] rounded-[12px] bg-[#8CB1FF] w-[100%] p-5 flex justify-between'>
                        <div className='space-y-2'>
                            <h1 className='font-[500] text-[12px] text-[#2C2B2B]'>Full Body WorkOut</h1>
                            <h1 className='font-[500] text-[10px] text-[#2C2B2B]'>Upcoming WorkOut</h1>
                            <h1 className='font-[500] text-[10px] text-[#2C2B2B]'>Chest</h1>
                        </div>

                        <div className='flex justify-center items-center '>

                            <img src="Ellipse55.png" alt="" className='w-[100px] h-[100px] ' />

                        </div>


                    </div>
                </div>
            </div>

            <div className='Bottomtab'>
                <Bottomtab />
            </div>


        </div>
    )
}

export default WorkOutTracker