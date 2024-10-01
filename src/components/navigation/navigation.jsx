"use client";
import Link from 'next/link';
import { useState } from 'react';

const links = [
  { label: 'INICIO', route: '/' },
  { label: 'NUESTRA EMPRESA', route: '/#nosotros' },
  { label: 'PRODUCTOS', route: '/productos' },
  { label: 'ENVASES PERSONALIZADOS', route: '/envases-personalizados' },
  { label: 'CONTACTO', route: '/contacto' },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Cerrar el menú al hacer clic en un enlace
  };

  return (
    <nav className="bg-black fixed top-0 w-full z-50 shadow-sm">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto  p-4 sm:pl-10 sm:pr-10">
        <Link href="/">
          <p className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo-white.png" className="h-10" alt="ENVAPLASTIC Logo" />
          </p>
        </Link>
        <div className="flex xl:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            aria-controls="navbar-menu"
            aria-expanded={isMenuOpen}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div id="navbar-menu" className={`items-center justify-between w-full xl:flex xl:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col p-2 mt-4  rounded-lg bg-gray-900 xl:bg-black xl:flex-row xl:space-x-8 xl:mt-0 xl:border-0 ">
            {links.map(link => (
              <li key={link.route}>
                <Link href={link.route} passHref>
                  <p 
                    onClick={handleLinkClick} 
                    className='block text-md  text-white p-2 text-gray-900 rounded hover:bg-gray-800 xl:hover:bg-transparent xl:hover:text-blue-700 xl:p-0'
                  >
                    {link.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
