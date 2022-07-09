import React from 'react';
import { NavLink } from 'react-router-dom';
import {AiOutlineClose} from 'react-icons/ai';
import {HiMenuAlt2} from 'react-icons/hi';

const Navbar = () => {

  const [open, setOpen] = React.useState(false);

    const MenuItems = [
      { name: 'Home', path: '/' },
      { name: 'Shop', path: '/shop' },
      { name: 'Blog', path: '/blog' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Register', path: '/register' },
    ]

  return (
    <div>
        <nav className='py-5 bg-white px-5 fixed w-full z-20 top-0'>
          <div className="flex justify-between items-center">
            <div className="logo text-2xl font-semibold">FURNITURE</div>

            <div className="bar cursor-pointer md:hidden block " onClick={()=>setOpen(!open)}>

              {open ? <AiOutlineClose className="text-black text-3xl" /> : <HiMenuAlt2 className="text-black text-3xl" />}
              
            </div>
            <ul className='hidden md:block'>
              {MenuItems.map(item => (
                  <NavLink to={item.path} className="py-1 px-2 font-semibold rounded uppercase"> {item.name}</NavLink>
              ))}
            </ul>
            
          </div>
          <ul className={`${!open ? "hidden" : "block duration-1000" }`}>
              {MenuItems.map(item => (
                  <NavLink to={item.path} className="block px-3 py-2 text-[17px] uppercase font-[arial]" onClick={()=>setOpen(!open)} > {item.name}</NavLink>
              ))}
            </ul>
        </nav>

    </div>
  );
};

export default Navbar ;