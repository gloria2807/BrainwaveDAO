import React from 'react';
import { FaBrain, FaChartBar } from 'react-icons/fa';
import { FaMoneyBills, FaTicket } from 'react-icons/fa6';


const FeaturesData = [
    {
        name: "Token-Gated Access",
        icon: (
            <FaTicket className="text-5xl text-primary duration-300" />
        ),
        description: "Let only your true supporters into your Discord, content hub, or live events.",
    },
    {
        name: "On-Chain Earnings",
        icon: (
            <FaMoneyBills className="text-5xl text-primary
        duration-300" />
        ),
        description: "Automated rewards and tipping through governance tokens or NFTs",
    },
    {
        name: "Member Analytics",
        icon: (
            <FaChartBar className="text-5xl text-primary
         duration-300" />
        ),
        description: "See who's most active, contributing, and repping your content.",
    },
    {
        name: "Co-Creation & Governance",
        icon: (
            <FaBrain className="text-5xl text-primary duration-300" />
        ),
        description: "Let your fans vote on collabs, drops, and future content directions.",
    },
];

const Features = () => {
  return (
    <>
   <div className='w-full flex flex-col items-center justify-center gap-[40px] py-[40px] bg-black'>
        <div data-aos='zoom-in-down' className="flex flex-col gap-5 items-center justify-center">
            <span className="text-primary px-3 min-w-[100px] h-[41px] rounded-[24px] border border-gray3 flex items-center justify-center text-sm">
                Built For You
            </span>
            <h1 data-aos='fade-up' duration="200"
            className='text-3xl font-semibold text-center text-white
            sm:text-4xl mb-3'>
                Your All-In-One Creator DAO Toolkit
            </h1>
            <p data-aos='fade-up' duration="400"
            className='text-xl text-center text-gray1 sm:text-2xl mb-12'>
                Scalable, secure and decentralized solutions for your digital assets.
            </p>
            <div data-aos='fade-up' duration="600" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-18">
                {FeaturesData.map((data, index) => (
                    <div key={index} data-aos='fade-up' data-aos-delay={data.aosDelay} className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-dark rounded-2xl border-b-2 border-green-400 bg-gray4">
                        <div className="grid place-items-center"> {data.icon} </div>
                        <h1 className='text-2xl text-white'>{data.name}</h1>
                        <p className='text-gray-200'>{data.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>
  );
};

export default Features;