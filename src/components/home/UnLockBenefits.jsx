import React from 'react'
import rewardplaneImg from "../../assets/images/home/rewardplane.svg"
import Input from '../shared/input'
import { Link } from 'react-router-dom'
import whatsappicon from "../../assets/images/home/whattsapp.svg"
import facebookicon from "../../assets/images/home/facebook.svg"
import twittericon from "../../assets/images/home/twitter.svg"
import mailicon from "../../assets/images/home/mail.svg"
const UnLockBenefits = () => {
  return (
    <div className='mt-16 flex flex-col gap-16 items-center '>
        {/* title top  */}
         <div className="flex flex-col items-center gap-4">
         <h3 className='font-semibold text-2xl text-primary-text '>Unlock Benefits, Win Big!</h3>
           <p className="text-secondary-text">
           For every successful referral, you’ll earn a 10% discount on your first investment** 
           </p>
           <h3 className='mt-4 font-semibold text-2xl text-primary-text '> Bonus Rewards!</h3>
           <p className="text-secondary-text">
           Every referral gets you an extra entry into our exclusive £10,000 cash raffle
           </p>
         </div>
         {/* plane image  */}
         <div>
            <img src={rewardplaneImg} alt="" />
         </div>
         {/* links sections  */}
         <div className="flex flex-col gap-8 items-center w-full">
            <Input type='text' label="Share your link" className='w-full max-w-[450px]' wrapperClass='mt-2' copyicon={true} placeholder="http;//testpropertrees/dhgaSOdsfaagi..."  />
            {/* social links  */}
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
            <p className='text-black-text text-xl flex items-center gap-2'>So far you’ve referred <span className='text-3xl font-medium'>0</span> friends.</p>
         </div>

    </div>
  )
}

export default UnLockBenefits