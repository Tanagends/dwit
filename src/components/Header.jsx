import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import { useState } from 'react';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const openMenu = () => {
      setMenuOpen(!menuOpen);
  }
  return (
    <header className='overflow-x-hidden w-full'>
    <nav id='navbar' className="bg-[#5d8e97] font-bold shadow-sm flex sm:text-xl sm:gap-2 py-2 overflow-x-hidden w-full">
      <Link className='p-2 mr-auto text-main-700' to="/Contacts">DWT<i class="text-white">web<i className="text-xs text-main-700">and</i>graphic</i></Link>
      <Link className='p-2 translate-x-96 contacts w-40 text-center text-white border-2 rounded-full border-white  hidden sm:block' to='/'>Home</Link>
      <Link className='p-2 translate-x-96 contacts w-40 text-center text-white border-2 rounded-full border-white  hidden sm:block' to='/Web Design'>Web</Link>
      <Link className='p-2 translate-x-96 contacts w-40 text-center text-white border-2 rounded-full border-white  hidden sm:block' to='/Graphic Design'>Graphic</Link>
      <Link className='p-2 translate-x-96 contacts text-white bi bi-house-fill sm:hidden' to='/'></Link>
      <button className='px-4 py-2 translate-x-96 contacts text-white bi bi-menu-button-wide-fill sm:hidden' onClick={ openMenu }></button>
    </nav>
    {menuOpen && (
            <nav className="sidebar contacts z-50 fixed h-full bg-main-600 w-[40%] right-0 rounded-s-2xl top-[0] translate-x-96 opacity-0 shadow-xl text-white">
                <div className="w-full flex py-4 flex-col font-bold text-center">
                    <button className="h-full w-full bi bi-chevron-right pl-4 active:bg-white text-start text-xl" onClick={openMenu}></button>
                    <Link onClick={ openMenu } className="active:bg-white w-full side-nav-item p-2 border-y-2" to='/'>Home</Link>
                    <Link onClick={ openMenu } className="active:bg-white w-full side-nav-item p-2 border-b-2" to="/Graphic Design">Graphic Design</Link>
                    <Link onClick={ openMenu } className="active:bg-white w-full side-nav-item p-2 border-b-2" to="/Web Design">Web Design</Link>
                    <Link onClick={ openMenu } className="active:bg-white w-full side-nav-item p-2 border-b-2bi-phone-fill" to='/Contacts'>Contacts</Link>
                </div>
            </nav> )}
    </header>
  );
};
export default Header;

