import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import './../../bootstrap-icons/font/bootstrap-icons.css'


const Header = () => {
  return (
    <header className='w-full m-0 p-0'>
    <nav className="flex flex-row gap-4 font-sans font-bold w-full m-0 bg-sky-400 my-2">
      <Link className="contacts mr-auto transition-all ease-in duration-100 hover:ring-4 ring-main-300 block border-2 border-main-600 bg-opacity-30 rounded-full text-main-600 text-xs h-fit p-2" to="/Contacts">DWT<i class="text-white">web<i class="text-main-600">and</i>graphic</i></Link>
      <Link class="home block -translate-y-96" to="/"><i class="bi bi-house-fill block relative text-2xl sm:text-3xl text-white"></i></Link>
      <i className='bi bi-menu-button-fill home bi-display -translate-y-96 text-2xl sm:text-3xl text-white ml-4'></i>
    </nav>
    </header>
  );
};
export default Header;

