import React from 'react';
import Logo from '../../assets/blogo.png';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';


const NavLinks = [
  {
    id: 1,
    name: 'Home',
    link: '#',
  },
  {
    id: 2,
    name: 'Features',
    link: '#',
  },
  {
    id: 3,
    name: 'Tokenomics',
    link: '#',
  },
  {
    id: 4,
    name: 'Process',
    link: '#',
  },
  {
    id: 5,
    name: 'FAQ',
    link: '#',
  },
]

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
  <div data-aos='fade-up' className='w-full flex items-center justify-between h-[80px] px-5'>
    <div className="w-full">
       <img src={Logo} alt='' className='h-16'/><p className='text-parisienne'>BRAINWAVE</p>
    </div>
      <div className="hidden w-full lg:flex items-center justify-center gap-[40px]">
        <ul className='flex items-center gap-10'>
              {
                NavLinks.map(({
                  id, name, link
                }) => {
                  return(
                    <li key={id} className='py-4'>
                      <a href={link} className='text-gray1 font-medium w-[120px] h-[40px] pb-1 rounded-[4px] text-center hover:text-primary hover:border-b-2 hover:border-amber-200 transition-colors duration-500'>
                        {name}
                      </a>
                    </li>
                  );
                })
              }
            </ul>
            </div>
        <div className='w-full flex items-center justify-end gap-5'>
          <a href='#' className='text-white hover:text-primary w-[60px] h-[20px] pb-6 rounded-[40px] text-center hover:border-b-2 hover:border-amber-200'>Join In</a>
          <button className='text-black bg-primary w-[141px] h-[40px] rounded-[40px] text-center cursor-pointer hover:text-primary hover:bg-black hover:border-b-2 hover:border-amber-200'>
            Connect Wallet
          </button>
        <div>{/*
          <nav className='hidden md:block'>
            
          </nav>
          <div className='md:hidden block'>
            <div className='flex items-center gap-4'>
            {
              showMenu ? <HiMenuAlt1 onClick={toggleMenu}
              className='cursor-pointer' size={30}/> : 
              <HiMenuAlt3 onClick={toggleMenu} 
              className='cursor-pointer' size={30}/>
            }
            </div>
           </div> */}
        </div>
      </div>
    </div>

  );
};

export default Navbar;