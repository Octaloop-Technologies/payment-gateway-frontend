import React from "react";
import Hero from "../components/home/Hero";
import UnLockBenefits from "../components/home/UnLockBenefits";
import UnLockRewards from "../components/home/UnLockRewards";
import BonusReward from "../components/home/BonusReward";

const Home = () => {
  return (
    <section>
    <Hero/>
    <UnLockBenefits/>
    <UnLockRewards/>
    <BonusReward/>
      
    </section>
  );
};

export default Home;
