import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import sakkiz from "@/assets/sakkiz.png"
import "./Back.css"
import scrn from "@/assets/screen.png"

function Back() {
  return (
    <main>
        <section className='mt-[25px]'>
          <div className='flex gap-[30px]'>
            <div className='relative'>
                <img src={sakkiz} alt=""  className='rounded-2xl'/>
                <div className='absolute top-[36px] left-8'>
                    <p className='text-[14px] text-[#A0AEC0] mb-[12px]'>Welcome back,</p>
                    <p className='text-[28px] font-bold'>Mark Johnson</p>
                    <p className='max-w-[168px] mt-[18px] text-[16px] text-[#A0AEC0] mb-[120px]'>Glad to see you again!
                    Ask me anything.</p>
                    <div className='flex items-center gap-[4px]'>
                    <p className='text-[12px]'>Tap to record</p>
                    <FaArrowRightLong className='text-[12px]'/>
                    </div>
                </div>
            </div>
            <div id='linee' className=' rounded-md w-[350px] px-[27px] py-[26px]'> 
              <p className='text-[17px] mb-1'>Satisfaction Rate</p>
              <p className='text-[14px] text-[#A0AEC0] mb-[10px] '>From all projects</p>
              <div>
                <img className='rounded-3xl' src={scrn} alt="" />
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}

export default Back