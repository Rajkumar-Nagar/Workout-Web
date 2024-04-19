import React, { useState } from 'react';
import RegisterBottomPart from './RegisterBottomPart';

function ResisterPage() {
    const [resisteInformation, setresisteInformation] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const handleResisterForm = (text, field) => {
        setresisteInformation(prev => ({ ...prev, [field]: text }));
    };

    return (
        <div className='maincontainer px-5 mt-10 '>

            <h1 className='text-[20px] text-[#2C2B2B
] font-[600] '>Create an account</h1>

            <div className="inputBox space-y-6 my-10">
                <input
                    type="text"
                    className='inputfield'
                    placeholder='First Name'
                    value={resisteInformation.firstName}
                    onChange={(e) => handleResisterForm(e.target.value, 'firstName')}
                />
                <input
                    type="text"
                    className='inputfield'
                    placeholder='Last Name'
                    value={resisteInformation.lastName}
                    onChange={(e) => handleResisterForm(e.target.value, 'lastName')}
                />
                <input
                    type="text"
                    className='inputfield'
                    placeholder='Email'
                    value={resisteInformation.email}
                    onChange={(e) => handleResisterForm(e.target.value, 'email')}
                />
                <input
                    type="text"
                    className='inputfield'
                    placeholder='Password'
                    value={resisteInformation.password}
                    onChange={(e) => handleResisterForm(e.target.value, 'password')}
                />

                <div className='checkbox flex gap-2 items-center '>
                    <input type="checkbox" className='w-[22px] h-[22px]' />
                    <h1 className='text-[12px] text-[#7F7F7F] font-[500] '>By proceeding, I agree to all </h1>
                    <h1 className='text-[12px] text-[#95BEFF] font-[500] underline '>T&C</h1>
                    <h1 className='text-[12px] text-[#2C2B2B] font-[500] '>And</h1>
                    <h1 className='text-[12px] text-[#95BEFF] font-[500] underline '>Privacy</h1>
                </div>
            </div>

            <RegisterBottomPart />
        </div>
    );
}

export default ResisterPage;
