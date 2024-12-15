import React from 'react'
import { IoWallet } from "react-icons/io5";

function Today() {
  return (
    <main>
      <section>
        <div className='grid grid-cols-4 gap-2'>
          <div className='w-[382px] px-[21px] rounded-lg py-[21px] h-[80px] border flex bg-gradient-to-r from-[#060B26BD] to-[#1A1F3780]'>
            <div className='flex-1'>
              <p className='text-[#A0AEC0] text-[12px]'>Today’s Money</p>
              <div className='flex gap-[5px]'>
              <p className='text-[18px] text-[#fff]'>$53,000</p>
              <p className='text-[18px] text-[#01B574]'>+55%</p>
              </div>
            </div>
            <button className='px-[11px] bg-[#0075FF] rounded-md text-[22px]'><IoWallet/></button>
          </div>
          <div className='w-[382px] px-[21px] rounded-lg py-[21px] h-[80px] border flex bg-gradient-to-r from-[#060B26BD] to-[#1A1F3780]'>
            <div className='flex-1'>
              <p className='text-[#A0AEC0] text-[12px]'>Today’s Money</p>
              <div className='flex gap-[5px]'>
              <p className='text-[18px] text-[#fff]'>$53,000</p>
              <p className='text-[18px] text-[#01B574]'>+55%</p>
              </div>
            </div>
            <button className='px-[11px] bg-[#0075FF] rounded-md text-[22px]'><IoWallet/></button>
          </div>
          <div className='w-[382px] px-[21px] rounded-lg py-[21px] h-[80px] border flex bg-gradient-to-r from-[#060B26BD] to-[#1A1F3780]'>
            <div className='flex-1'>
              <p className='text-[#A0AEC0] text-[12px]'>Today’s Money</p>
              <div className='flex gap-[5px]'>
              <p className='text-[18px] text-[#fff]'>$53,000</p>
              <p className='text-[18px] text-[#01B574]'>+55%</p>
              </div>
            </div>
            <button className='px-[11px] bg-[#0075FF] rounded-md text-[22px]'><IoWallet/></button>
          </div>
          <div className='w-[382px] px-[21px] rounded-lg py-[21px] h-[80px] border flex bg-gradient-to-r from-[#060B26BD] to-[#1A1F3780]'>
            <div className='flex-1'>
              <p className='text-[#A0AEC0] text-[12px]'>Today’s Money</p>
              <div className='flex gap-[5px]'>
              <p className='text-[18px] text-[#fff]'>$53,000</p>
              <p className='text-[18px] text-[#01B574]'>+55%</p>
              </div>
            </div>
            <button className='px-[11px] bg-[#0075FF] rounded-md text-[22px]'><IoWallet/></button>
          </div>
         
        </div>
      </section>
    </main>
  )
}

export default Today