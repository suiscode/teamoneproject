import React from 'react'

function HomeHeader() {
  return (
    <div className='sticky top-0 z-30 bg-[#0D0D0D] h-[48px] border-b-2 items-center border-gray-500 w-full flex justify-center '>
        <div className='w-[1440px] flex justify-between'>
            <p>CAR RENT</p>
            <button>Log in</button>
        </div>
    </div>
  )
}

export default HomeHeader