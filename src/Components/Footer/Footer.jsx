import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';
import { SiHiveBlockchain } from 'react-icons/si';


const FooterLinks = [
    { id:1, title: 'Home', link: "/#" },
    { id:2, title: 'About', link: "/#" },
    { id:3, title: 'Contact', link: "/#" },
    { id:4, title: 'Blog', link: "/#" },
];
const FooterLinks1 = [
    { id:1, title: 'Help Center', link: "/#" },
    { id:2, title: 'FAQ', link: "/#" },
    { id:3, title: 'Forum', link: "/#" },
    { id:4, title: 'Community', link: "/#" },
];
const FooterLinks2 = [
    { id:1, title: 'Africa', link: "/#" },
    { id:2, title: 'Asia', link: "/#" },
    { id:3, title: 'Europe', link: "/#" },
    { id:4, title: 'North and South America', link: "/#" },
];

const Footer = () => {
  return (
    <>
    <div data-aos='fade-up' className="mt-14 rounded-t-3xl">
        <div className="container md:ml-30">
            <div className='absolute inset-0 flex justify-center items-center pointer-events-none select-none'>
                <h1 className='text-[10rem] font-bold text-white/5 tracking-widest'>
                EGO
                </h1>
            </div>
            <div className="grid md:grid-cols-3 py-4">
                <div className="py-8 px-4">
                    <div className="md:w-[40%] w-[80px]">
                        <SiHiveBlockchain size={50} className="w-full pb-4"/>
                    </div>
                    <h1 className='sm:text-3xl text-xl sm:text-left text-justify mb-3 flex items-center gap-3'>
                        Brainwave
                    </h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, deleniti?</p>
                    <br />
                    <div>
                        <div className="flex items-center gap-3">
                            <FaLocationArrow />
                            <p>Innovative Solutions</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaMobileAlt />
                            <p>+234-81*-***-****</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mt-6">
                    <a href='#'>
                        <FaFacebook className='text-3xl hover:text-primary duration-300' />
                    </a>
                    <a href='#'>
                        <FaInstagram className='text-3xl hover:text-primary duration-300'/>
                    </a>
                    <a href='#'>
                        <FaLinkedin className='text-3xl hover:text-primary duration-300'/>
                    </a>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                                <ul className='space-y-3'>
                                    {FooterLinks.map(({id, link, title}) => {
                                        return(
                                        <li
                                        key={id}
                                        className='hover:translate-x-1 duration-300'
                                        >
                                            <a href={link}
                                            className='cursor-pointer hover:text-primary'
                                            >
                                                {title}
                                            </a>
                                        </li>
                                        );
                                    })
                                    }
                                </ul>
                        </div>
                    </div>
                    <div>
                         <div className="py-8 px-4">
                            <h1 className="text-xl font-bold mb-3">Help</h1>
                                <ul className='space-y-3'>
                                    {FooterLinks1.map(({id, link, title}) => {
                                        return(
                                        <li
                                        key={id}
                                        className='hover:translate-x-1 duration-300'
                                        >
                                            <a href={link}
                                            className='cursor-pointer hover:text-primary'
                                            >
                                                {title}
                                            </a>
                                        </li>
                                        );
                                    })
                                    }
                                </ul>
                        </div>
                    </div>
                    <div>
                         <div className="py-8 px-4">
                            <h1 className="text-xl font-bold mb-3">Location</h1>
                                <ul className='space-y-3'>
                                    {FooterLinks2.map(({id, link, title}) => {
                                        return(
                                        <li
                                        key={id}
                                        className='hover:translate-x-1 duration-300'
                                        >
                                            <a href={link}
                                            className='cursor-pointer hover:text-primary'
                                            >
                                                {title}
                                            </a>
                                        </li>
                                        );
                                    })
                                    }
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full flex items-center justify-center text-[12px] text-gray1'>
            &copy; Ego 2025. All rights reserved
        </div>
    </div>
    </>
  );
};

export default Footer;