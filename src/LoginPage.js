import React, { useState } from 'react'
import RegisterBottomPart from './RegisterBottomPart';

function LoginPage() {


    const [showPassword, setshowPassword] = useState(false
    )


    const [resisteInformation, setresisteInformation] = useState({
        email: "",
        password: "",
    });

    const handleResisterForm = (text, field) => {
        setresisteInformation(prev => ({ ...prev, [field]: text }));
    };

    const handlePassword = () => {
        setshowPassword(!showPassword)
    }

    return (
        <div className='maincontainer mt-10 w-full'>

            <h1 className='text-[20px] text-[#2C2B2B
] font-[600] '>Welcome Back</h1>

            <div className="inputBox space-y-6 my-10 w-full">

                <input
                    type="text"
                    className='inputfield'
                    placeholder='Email'
                    value={resisteInformation.email}
                    onChange={(e) => handleResisterForm(e.target.value, 'email')}
                />

                <div className='relative flex items-center min-w-[280px]'>
                    <div className='absolute right-[30px]' onClick={handlePassword}>
                        <img src="eyeoff.png" alt="reload" className='w-[15px] h-[15px]' />
                    </div>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className='inputfield'
                        placeholder='Password'
                        value={resisteInformation.password}
                        onChange={(e) => handleResisterForm(e.target.value, 'password')}
                    />
                </div>

                <div className='checkbox'>

                    <p className='text-[12px] text-[#7F7F7F] font-[500] underline '>Forget Your Password</p>

                </div>
            </div>

            <RegisterBottomPart Login />
        </div>
    )
}

export default LoginPage