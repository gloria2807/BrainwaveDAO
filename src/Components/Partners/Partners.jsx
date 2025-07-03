import React from 'react';
import { FaAddressBook, FaAmazon, FaFacebook, FaGoogle, FaOpera } from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';

const PartnersData = [
    {
        name: "Google",
        icon: (
            <FaGoogle className="text-5xl text-primary
            group-hover:text-black" />
        ),
       },
    {
        name: "Amazon",
        icon: (
            <FaAmazon className="text-5xl text-primary
            group-hover:text-black" />
        ),
       },
    {
        name: "Facebook",
        icon: (
            <FaFacebook className="text-5xl text-primary
            group-hover:text-black" />
        ),
    },
    {
        name: "Andernaline",
        icon: (
            <FaAddressBook className="text-5xl text-primary
            group-hover:text-black" />
        ),
       },
       {
        name: "Kanerl",
        icon: (
            <FaHouse className="text-5xl text-primary
            group-hover:text-black" />
        ),
       },
];

const Partners = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-[40px] py-[40px] bg-gray4'>
      <span className='text-gray1'>Satisfied Partners</span>
      <div className='w-full flex md:flex-row flex-col items-center justify-center gap-[72px]'>
    {
      PartnersData.map((data, index) => (
        <div key={index} className="">
                        <div className="grid place-items-center"> {data.icon}{data.name} </div>
                    </div>
      ))
    }
      </div>
    </div>
  )
}

export default Partners