import React from "react";
import { useState } from "react";

const faqItems = [
  {
    question: "Do I need crypto to join?",
    answer:
      "Yes, but it’s easy. Just connect your wallet and you’ll see instructions to get $VIBE.",
  },
  {
    question: "Can I sell or transfer my token?",
    answer:
      "Absolutely. $VIBE is a fully tradable ERC-20 token.",
  },
  {
    question: "Is this secure?",
    answer: "100%. All interactions are smart contract–based, audited, and transparent.",
  },
  {
    question: "What happens if I lose access?",
    answer:
      "As long as you hold the token in your wallet, you’ll always retain access.",
  },
];

const Faq = () => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        setOpenIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };
    return (
       <div className="w-full flex flex-col gap-[80px] relative md:py-[120px] py-[80px] md:px-[120px] bg-black">
           <div className="flex flex-col gap-5 items-center justify-center">
            <span data-aos='zoom-out-down' className="text-primary px-3 min-w-[100px] h-[41px] rounded-[24px] border border-gray3 flex items-center justify-center text-sm">
                FAQ
            </span>
            <span data-aos='zoom-out-down' className='text-light md:text-[50px] text-[35px] max-w-[900px] text-center'>Still Got Questions?</span>
            <p data-aos='zoom-out-down' className="text-center md:max-w-[640px] max-w-[90%] text-gray1 text-lg">
                Find everything you need to know right here. Let us help you simplify the process and find the clarity you're looking
            </p>
        </div>
            <div className="w-full flex flex-col items-center justify-center gap-[30px]">
                {faqItems.map((item, index) => {
                    const isOpen = openIndexes.includes(index);
                    return (
                        <div key={index} className="w-full md:max-w-[800px] max-w-[85%] z-[1]">
                            <div
                                onClick={() => toggleItem(index)}
                                className="w-full flex items-center justify-between border border-gray3 px-5 h-[52px] cursor-pointer"
                            >
                                <span className="text-light">{item.question}</span>
                                <span className="text-light text-2xl">{isOpen ? "-" : "+"}</span>
                            </div>

                            <div
                                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] py-4 px-5' : 'grid-rows-[0fr] px-5'
                                    }`}
                            >
                                <div className="overflow-hidden text-gray1 text-sm">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[420px] rounded-full bg-overlay/7 blur-3xl" />
        </div>
    )
}

export default Faq