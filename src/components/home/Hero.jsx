import React from 'react'
import Heroimg from "../../assets/images/home/heroimg.svg"

const Hero = () => {
  return (
    <div className='bg-white rounded-primary p-4 shadow-primary flex items-center justify-between '>
        <div className="flex-1 ">
            <h3 className='font-semibold text-3xl text-primary-text'>Congratulations</h3>
            <h3 className='font-semibold text-3xl text-black-text'>Your are in<span className='text-primary-text'>!</span></h3>
          <div className="max-w-[300px] text-secondary-text mt-2">
            <p>You are on the list to join the future of financial investment.</p>
            <p> Spread the word and get a headstart into the game.</p>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end  ">
            <img src={Heroimg} alt=""  />
        </div>

    </div>
  )
}

export default Hero