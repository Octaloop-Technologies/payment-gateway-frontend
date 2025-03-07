import React from 'react'
import bonusrewardimg from "../../assets/images/home/bonusreward.svg"
import Input from '../shared/input'
const BonusReward = () => {
  return (
    <div className='mt-16 bg-blue-dark rounded-primary shadow-primary px-4 py-8 flex flex-col gap-6 items-center'>
        <h3 className='text-2xl font-semibold text-white'>Bonus Rewards</h3>
        <div >
            <img src={bonusrewardimg} alt="" />
        </div>
      <div className="text-center text-white">
      <p className="">You get one cash raffle ticket for each successful referral. </p>
      <p>Increase your chances of winning our £10,000 prize!</p>
      </div>
      <div className="w-full bg-orange-dark rounded-2xl py-6 px-4 text-center">
        <p>So far you’ve referred 0 friends</p>
        <p>You have 1 cash raffle ticket</p>
      </div>
      <Input type='text' label="Share your link" className='w-full' wrapperClass='mt-2' copyicon={true} placeholder="http;//testpropertrees/dhgaSOdsfaagi..."  />
       <div className="flex items-center gap-4">
                      <Link to="">
                      <img src={whatsappicon} alt="" />
                      </Link>
                      <Link to="">
                      <img src={facebookicon} alt="" />
                      </Link>
                      <Link to="">
                      <img src={twittericon} alt="" />
                      </Link>
                      <Link to="">
                      <img src={mailicon} alt="" />
                      </Link>
                  </div>
    </div>
  )
}

export default BonusReward