import React from 'react'
import CommonButton from './CommonButton'
import { Link, useNavigate } from 'react-router-dom'

function RegisterBottomPart({ Login }) {

    const naviagte = useNavigate()

    const onClick = () => {
        naviagte(!Login ? "/GoalPage" : "/WorkOutTracker")
    }
    return (
        <div>
            <CommonButton title={Login ? "Sign In" : "Creat an Account"} onClick={onClick} />

            <div className='w-[100%] border-b-[1px] border-[#7F7F7F] relative flex justify-center mt-8' >
                <h1 className='absolute top-[-12px] bg-white px-1'>Or</h1>
            </div>

            <div className="soicalMedia flex justify-center items-center space-x-6 my-5">
                <div className="socialBox  cursor-pointer w-[44px] h-[44px] border flex justify-center items-center bottom-1 rounded-[8px] ">
                    <img src="Google.png" alt="reload" className=' w-[20px] h-[20px]' />
                </div>
                <div className="socialBox w-[44px] cursor-pointer h-[44px] border bottom-1 rounded-[8px] flex items-center justify-center">
                    <img src="Fac.png" alt="reload" className=' w-[15px] h-[20px]' />
                </div>
            </div>

            <div className='flex items-center justify-center gap-1'>
                {
                    Login ? (
                        <p className='text-[#2C2B2B] font-[500] text-[12px]'>Don’t have an account yet? </p>
                    ) : (
                        <p className='text-[#2C2B2B] font-[500] text-[12px]'>Already have An Account ?</p>
                    )

                }

                {
                    !Login ? (
                        <Link to={"/LoginPage"} className='text-[#7B91FF] underline font-[500] text-[12px]'>Login</Link>
                    ) : (

                        <Link to={"/ResisterPage"} className='text-[#7B91FF] underline font-[500] text-[12px]'>Create an Account</Link>
                    )

                }


            </div>

        </div>
    )
}

export default RegisterBottomPart