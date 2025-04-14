import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import AppLayout from '@Layout';
import { navLinks } from '@Constants';
import { INavLink } from '@Interfaces';

/**
 * Navigation Link Component
 *
 * Renders a navigation link with optional styling for active/inactive states.
 *
 * @param {Object} props - The component props.
 * @param {string} props.href - The URL the link points to.
 * @param {string} props.children - The text content of the link.
 * @param {boolean} [props.isActive=false] - Whether the link is currently active.
 */
const NavLink = ({ href, children, isActive = false, isMobile = false, onClick }: INavLink) => {
  const baseClasses = `${isMobile ? 'p-[10px]' : 'p-[20px]'}  cursor-pointer`;
  const activeClasses = 'text-black';
  const inactiveClasses = 'text-[#A6A6A6] hover:text-black';

  const classes = `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;

  return (
    <a href={href} className={classes} onClick={onClick}>
      {children}
    </a>
  );
};

/**
 * Button Component
 *
 * Renders a button with customizable styling.
 *
 * @param {Object} props - The component props.
 * @param {string} props.children - The text content of the button.
 * @param {string} props.className - Additional CSS classes for the button.
 */
const Button = ({ children, className }: { children: React.ReactNode; className: string }) => {
  return <button className={`h-[62px] rounded-[40px] ${className}`}>{children}</button>;
};

/**
 * Header Component
 *
 * Renders the main header section of the application, including navigation and mobile drawer.
 */
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id='header' className='h-[68px] sm:h-[86px] relative z-50'>
      <AppLayout className='flex items-center justify-between h-full'>
        <h3 id='title' className='text-[#54BD95] text-[24px] sm:text-[38.4px] font-[700]'>Biccas</h3>

        {/* Desktop Nav - visible only on large screens */}
        <div id='desktop-nav-container' className='hidden lg:flex justify-between gap-0 items-center xl:gap-[130px]'>
          <ul className='flex h-full list-none justify-end text-[16px] font-medium'>
            {navLinks.map((link) =>
              <NavLink key={link.label} href={link.to} isActive={link.active} >
                {link.label}
              </NavLink>
            )}
          </ul>

          <ul className='flex h-full list-none items-center gap-[12px]'>
            <a className='p-[20px] min-w-fit h-[40px] text-[#A6A6A6] flex items-center justify-center cursor-pointer hover:bg-[#54BD95] hover:text-white hover:rounded-[10px] transition-all duration-300 ease-in'>Login</a>
            <a className='p-[20px] min-w-fit h-[40px] text-white bg-[#54BD95] flex items-center justify-center cursor-pointer rounded-[10px]'>
              Sign Up
            </a>
          </ul>
        </div>

        {/* Hamburger Icon - visible below lg */}
        <GiHamburgerMenu size={32} className='lg:hidden cursor-pointer' onClick={toggleDrawer} />
      </AppLayout>

      {/* Mobile Drawer - visible only when isOpen is true */}
      <div
        id='mobile-drawer'
        className={`fixed top-0 right-0 z-40 h-full w-[75%] transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='flex justify-between items-center p-4 border-b'>
          <h3 className='text-[#54BD95] text-[24px] font-bold'>Biccas</h3>
          <IoMdClose size={28} className='cursor-pointer' onClick={toggleDrawer} />
        </div>

        <ul className='flex flex-col gap-2 p-6 text-[16px] font-medium'>
          {navLinks.map((link) =>
            <NavLink key={link.label} href={link.to} isActive={link.active} isMobile={true} onClick={toggleDrawer}>
              {link.label}
            </NavLink>
          )}
        </ul>

        <div className='mt-6 flex flex-col gap-4 px-6'>
          <Button className='border border-[#A6A6A6] text-[#A6A6A6]'>Login</Button>
          <Button className='bg-[#54BD95] text-white'>Sign Up</Button>
        </div>
      </div>

      {/* Backdrop - visible only when isOpen is true */}
      {isOpen && (
        <div id='toggle-drawer' className='fixed inset-0 z-30 bg-opacity-40 backdrop-blur-xs' onClick={toggleDrawer}></div>
      )}
    </header>
  );
};

export default Header;
