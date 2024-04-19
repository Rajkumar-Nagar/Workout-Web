import React, { useState } from 'react';
import CommonButton from './CommonButton';
import { useNavigate } from 'react-router-dom';

function GoalBox({ Goal, selectedGoals, setSelectedGoals }) {
    const handleCheckboxChange = (e) => {
        const { checked } = e.target;
        if (checked) {
            setSelectedGoals([...selectedGoals, Goal]);
        } else {
            setSelectedGoals(selectedGoals.filter((goal) => goal !== Goal));
        }
    };

    return (
        <div className='GoalBox h-[50px] rounded-[12px] bg-[#F1F1F1] flex items-center justify-between px-5'>

            <h1 className='font-[600] text-[#2C2B2B] text-[13px]'>
                {Goal}
            </h1>

            <input
                type="checkbox"
                name={Goal}
                id={Goal}
                className='w-[22px] h-[22px]'
                checked={selectedGoals.includes(Goal)}
                onChange={handleCheckboxChange}
            />
        </div>
    );
}

function GoalPage() {
    const naviagte=useNavigate()
    const [selectedGoals, setSelectedGoals] = useState([]);

    return (
        <div className='maincontainer px-5 mt-10 relative '>
            <div className='flex justify-center'>
                <h1 className='text-[20px] text-[#2C2B2B] font-[600]'>What are your Goals?</h1>
            </div>

            <div className="GoalContainer space-y-5 my-16">
                <GoalBox Goal={"Weight Loss"} selectedGoals={selectedGoals} setSelectedGoals={setSelectedGoals} />
                <GoalBox Goal={"Muscle Gain"} selectedGoals={selectedGoals} setSelectedGoals={setSelectedGoals} />
                <GoalBox Goal={"Flexibility and Mobility"} selectedGoals={selectedGoals} setSelectedGoals={setSelectedGoals} />
                <GoalBox Goal={"General Fitness"} selectedGoals={selectedGoals} setSelectedGoals={setSelectedGoals} />
                <GoalBox Goal={"Event-specific training"} selectedGoals={selectedGoals} setSelectedGoals={setSelectedGoals} />
                <GoalBox Goal={"Mindfulness and Mental Health"} selectedGoals={selectedGoals} setSelectedGoals={setSelectedGoals} />
            </div>

            <div className='mt-10'>

                <CommonButton title={"Confirm"} onClick={()=>{naviagte("/WorkOutTracker")}}/>
            </div>


        </div>
    );
}

export default GoalPage;
