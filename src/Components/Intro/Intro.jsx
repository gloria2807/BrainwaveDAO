import React from "react";
import { FaLockOpen, FaPoll, FaWallet } from "react-icons/fa";
import { GiCrossedAxes } from "react-icons/gi";
import { SiHiveBlockchain } from "react-icons/si";

const introItems = [
  {
    title: "Connect Your Wallet",
    description:
      "Use MetaMask, WalletConnect, or Coinbase Wallet.",
    icon: (
                <FaWallet className="text-9xl text-primary" />
            ),
    duration: "500",
  },
  {
    title: "Mint or Buy $VIBE",
    description:
      "Grab tokens on our site or supported DEXs.",
    icon: (
                <GiCrossedAxes className="text-9xl text-primary" />
            ),
    duration: "600",
  },
  {
    title: "Unlock the Platform",
    description:
      "Your token lets you into gated chats, drops, and creator hubs.",
    icon: (
                <FaLockOpen className="text-9xl text-primary" />
            ),
    duration: "700",
  },  
  {
    title: "Participate & Earn ",
    description:
      "Vote, comment, or create — earn rewards and level up your status.",
    icon: (
                <FaPoll className="text-9xl text-primary" />
            ),
    duration: "700",
  },
];

const Intro = () => {
    return (
        <div className="w-full flex flex-col gap-[80px] relative py-[60px] md:px-[120px]">
           <div className="flex flex-col gap-5 items-center justify-center">
            <span data-aos='fade-right' duration="200" className="text-primary px-3 min-w-[100px] h-[41px] rounded-[24px] border border-gray3 flex items-center justify-center text-sm">
                How It works
            </span>
            <span data-aos='fade-right' duration="200" className='text-light md:text-[50px] text-[35px] max-w-[900px] text-center'>How to Join VibeDAO</span>
            <p data-aos='fade-left' duration="300" className="text-center md:max-w-[640px] max-w-[90%] text-gray1 text-lg">
               Step-by-step timeline:
            </p>
        </div>
            <div className="w-full flex md:flex-row flex-col items-center justify-between">
                <div data-aos='flip-left' duration="500" className="md:w-[40%] w-[400px]">
                    <SiHiveBlockchain size={350} className="w-full pb-4"/>
                </div>
                <div className="flex md:w-[45%] w-[80%] flex-col gap-[40px]">
                    {introItems.map((item, index) => (
                        <div data-aos="flip-down" data-aos-delay={item.duration} className="w-full bg-gray4 rounded-[20px] px-5 py-[30px] flex items-start gap-[24px] border border-grayborder" 
                        key={index}>
                            {item.icon}
                            <div className="flex flex-col gap-[8px]">
                                <div className="text-light text-[20px]">{item.title}</div>
                                <p className="text-gray1">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[420px] rounded-full bg-overlay/7 blur-3xl" />

        </div>
    );
};

export default Intro;