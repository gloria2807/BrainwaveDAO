import React from "react";
import MarqueeRow from "./MarqueeRow";

const Testimonial = () => {
    return (
            <div className="w-full flex flex-col gap-[80px] relative md:py-[120px] py-[80px] md:px-[120px] bg-gray4">
           <div className="flex flex-col gap-5 items-center justify-center">
            <span data-aos='zoom-out-up' duration="200" className="text-primary px-3 min-w-[100px] h-[41px] rounded-[24px] border border-gray3 flex items-center justify-center text-sm">
                What Our Members Are Saying
            </span>
            <span data-aos='zoom-out-up' duration="300" className='text-light md:text-[50px] text-[35px] max-w-[900px] text-center'>Trusted By Innovators</span>
            <p data-aos='zoom-out-up' duration="500" className="text-center md:max-w-[640px] max-w-[90%] text-gray1 text-lg">
                Secure your digital assets with the peace of mind that comes from knowing you are protected by the best technology in the blockchain space.
            </p>
        </div>
            <div className="w-full flex flex-col gap-5 overflow-hidden">
                <MarqueeRow prefix="marquee1" />
                <MarqueeRow offset={200} prefix="rev" />
            </div>

             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[420px] rounded-full bg-overlay/7 blur-3xl" />
        </div>
    )
}

export default Testimonial