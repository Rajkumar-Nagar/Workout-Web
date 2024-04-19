import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function InitaialScreen() {

    const IntailScreendata = [
        {
            title: "Track Your Goal",
            description: "Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals",
            imgsource: '/image13.png'
        },
        {
            title: "Get Burn",
            description: "Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever",
            imgsource: '/image16.png'
        },
    ]
    const naviagte = useNavigate()

    const [index, setindex] = useState(0)

    const handleScreen = () => {
        if (index < 1) {
            setindex(index + 1)
        }
        else {
            console.log(index)
            naviagte('/ResisterPage')
        }
    }

    return (
        <div className='maincontainer relative h-full '>
            <Link className="Header flex justify-end p-3" to={"/ResisterPage"} >
                <h1 className="text-[16px] text-[#9FB2FF] font-medium underline">Skip</h1>
            </Link>

            <div className="middle flex justify-center my-10">
                <img src={IntailScreendata[index].imgsource} width={282} height={282} alt="reload" />
            </div>

            <div className="bottom px-3 space-y-3 mt-14">
                <h1 className="text-[20px] text-[#2C2B2B
] font-medium " >{IntailScreendata[index].title}</h1>
                <h2 className="text-[16px] text-[#787878
] font-medium ">{IntailScreendata[index].description}</h2>
            </div>

            <div onClick={handleScreen} className="bottombutton flex justify-end px-3 absolute bottom-8 right-0">
                <img src="/Group1.png" width={60} height={60} alt="reload" />
            </div>
        </div>
    )
}

export default InitaialScreen