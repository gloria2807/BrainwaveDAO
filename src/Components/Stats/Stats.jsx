import React from 'react';

const statsData = [
  { title: "Max Supply", value: "10,000,000 VIBE" },
  { title: "Transactions", value: "500k+" },
  { title: "Countries", value: "35+" },
];

const Stats = () => {
  return (
    <div className="w-full flex flex-col gap-[80px] relative md:py-[120px] py-[80px] md:px-[120px] bg-gray4">
           <div data-aos='zoom-in-down' className="flex flex-col gap-5 items-center justify-center">
            <span className="text-primary px-3 min-w-[100px] h-[41px] rounded-[24px] border border-gray3 flex items-center justify-center text-sm">
                Tokenomics
            </span>
            <span className='text-light md:text-[50px] text-[35px] max-w-[900px] text-center'>Completely Leverage Product</span>
            <p className="text-center md:max-w-[640px] max-w-[90%] text-gray1 text-lg">
                $VIBE Token — Fueling the Community Economy
            </p>
        </div>
    <div data-aos='zoom-in' className="w-full flex md:flex-row flex-col items-center justify-center gap-[72px]">
              {statsData.map((item, index) => (
                    <div key={index} className="flex flex-col gap-5 items-center justify-center">
                        <span className="text-primary text-[50px]">{item.value}</span>
                        <span className="text-gray1 text-[20px]">{item.title}</span>
                    </div>
                ))}
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[420px] rounded-full bg-overlay/7 blur-3xl" />
        </div>
  )
}

export default Stats