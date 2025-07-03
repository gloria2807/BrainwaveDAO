import React from 'react';
import { SiHiveBlockchain } from 'react-icons/si';

const Hero = () => {
  return (
    <div className='w-full flex md:flex-row flex-col items-center justify-between md:px-[120px] px-5 md:h-[calc(100vh-80px)] relative md:pb-0 pb-20'>
        <div className='flex flex-col gap-6 md:mt-0 mt-5'>
            <div data-aos="fade-up" duration="200" className='flex items-center justify-center gap-2 border border-grayborder rounded-[24px] w-fit px-4 h-[37px]'>
                <span className='bg-primary w-[9px] h-[9px] rounded-full' />
                <span className='text-primary text-sm'>Decentralized</span>
            </div>
            <div data-aos="fade-up" duration="200" className='text-light font-bold md:text-[84px] text-[45px] max-w-[661px] md:leading-[80px]'>
                Unlock Access. Earn Your Influence.
            </div>
            <p data-aos="fade-up" duration="400" className='text-white text-[20px] max-w-[600px]'>
                Join the token-powered creator collective where your voice counts, your content matters, and your presence earns you perks.
            </p>
            <div data-aos="fade-up" duration="600" className="flex items-center gap-5">
                <button className='bg-primary text-black text-center cursor-pointer rounded-[40px] w-[150px] h-[50px]  hover:text-primary hover:bg-black hover:border-b-2 hover:border-amber-200'>
                    Join the DAO
                </button>
                <button className='text-white border-b-2 border-amber-100 text-center cursor-pointer rounded-[40px] w-[190px] h-[50px] hover:text-primary hover:bg-black hover:border-b-2 hover:border-primary'>
                    Learn How It Works
                </button>
            </div>
        </div>
        <div data-aos="fade-up" duration="200" className="md:w-[40%] w-[400px]">
                                <SiHiveBlockchain size={350} className="w-full pb-4"/>
                            </div>
    </div>
 
  )
}

export default Hero;