import React from 'react'
import alramicon from "../../assets/images/home/timeicon.svg"

const UnLockRewards = () => {
  return (
    <div className='mt-16 bg-light-blue rounded-primary py-8 px-4 shadow-primary flex flex-col items-center gap-6  '>
        <h3 className='font-semibold text-2xl text-black-text'>Unlock <span className='text-primary-text'>Rewards</span></h3>
        <div className='bg-white rounded-primary p-4 shadow-primary w-full'>
            slider
        </div>
        {/* remianing  */}
        <div className="bg-orange-dark rounded-xl px-6 shadow-primary h-12 flex items-center gap-3">
            <img src={alramicon} alt="" />
           <span>Remaining</span>
           <span className='font-bold text-xl'>29</span>
           <span>days</span>
        </div>
        {/* invite box  */}
        <div className="bg-white rounded-primary p-1 shadow-primary w-full">
            <div className="bg-[#F4F4F4] rounded-primary px-4 py-16 flex flex-col gap-6 items-center">
            <h3 className='font-semibold text-xl text-black-text'> <span className='text-primary-text'>Invite</span> your friends to earn extra raffle entries and unlock an amazing discount! </h3>
           <div className="text-center">
           <p className="text-secondary-text text-base">Share your referral link to start earning raffle entries and unlock amazing discounts!
           </p>
           <p className="text-secondary-text text-base mt-2">
           The more you refer, the better the rewards!</p>
           </div>

            </div>
        </div>

    </div>
  )
}

export default UnLockRewards