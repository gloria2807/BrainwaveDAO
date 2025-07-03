import React from "react";

const Cta = () => {
    return (
        <div className="w-full flex flex-col gap-[80px] relative md:py-[120px] py-[80px] md:px-[120px] bg-gray4">
           <div className="flex flex-col gap-5 items-center justify-center">
            <span data-aos='slide-right' duration="100" className="text-primary px-3 min-w-[100px] h-[41px] rounded-[24px] border border-gray3 flex items-center justify-center text-sm">
                Web3 Reimagined
            </span>
            <span data-aos='slide-right' duration="100" className='text-light md:text-[50px] text-[35px] max-w-[900px] text-center'>Ready to Unlock Your Spot?</span>
            <p data-aos='slide-left' duration="200" className="text-center md:max-w-[640px] max-w-[90%] text-gray1 text-lg">
                Join VibeDAO, mint your token, and step into the future of creator-owned communities.
            </p>
            <div data-aos="fade-up" duration="600" className="flex items-center gap-5">
                <button className='bg-primary text-black text-center cursor-pointer rounded-[40px] w-[150px] h-[50px]  hover:text-primary hover:bg-black hover:border-b-2 hover:border-amber-200'>
                    Connect Wallet
                </button>
                <button className='text-white border-b-2 border-amber-100 text-center cursor-pointer rounded-[40px] w-[190px] h-[50px] hover:text-primary hover:bg-black hover:border-b-2 hover:border-primary'>
                    Explore the DAO
                </button>
            </div>
        </div>
           
        </div>
    )
}

export default Cta;