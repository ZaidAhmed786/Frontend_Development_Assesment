import React from 'react'
import Bannerimage from '../assets/Frame 5.png'
import Bannerimage2 from '../assets/Group 42.png'
function Banner() {
  return (
    <>
    <div className='grid grid-cols-10 items-start gap-4 px-10 '>
        <div className='md:col-span-7 col-span-12'>
            <img src={Bannerimage2} alt=""  />

        </div>
        <div className='md:col-span-3 col-span-12'>
            <img src={Bannerimage} alt="" style={{ width:"470px"}}/>
        </div>

    </div>
    </>
  )
}

export default Banner;