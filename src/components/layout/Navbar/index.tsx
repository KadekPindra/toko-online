"use client";
import Image from "next/image";
// import logo from "../image/logo-MK.png"
import Link from "next/link";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faCircle, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Sidebar = ({ isOpen, onClose } : any) => {
const [isClosing, setIsClosing] = useState(false);

  const handleAnimationEnd = () => {
    if (isClosing) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setIsClosing(true)}
    >
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onAnimationEnd={handleAnimationEnd}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 focus:outline-none"
          onClick={() => onClose()}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <ul className="p-8 space-y-4">
          <li><a href="#">Beranda</a></li>
          <li><a href="#">Tentang Kami</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Ulasan</a></li>
        </ul>
      </div>
      
    </div>
  );
};

const Navigation = () => {
    const { data } = useSession();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isBlurred, setIsBlurred] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
      const handleScroll = () => {
          const scrollTop = window.scrollY;
          const blurThreshold = 50;

          if (scrollTop > blurThreshold) {
              setIsBlurred(true);
          } else {
              setIsBlurred(false);
          }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
          window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return(
        <>
            <nav className={`w-full bg-white px-8 py-4 flex justify-between md:justify-center md:items-center md:gap-5 fixed transition-all duration-500 ${isBlurred ? 'bg-transparent backdrop-filter backdrop-blur-lg' : ''}`}>
            <div className="md:flex justify-start items-center hidden ">
                  <FontAwesomeIcon 
                    icon={faUser} 
                    style={{
                        color: "#000",
                        width: 40,
                        height: 40,
                    }} 
                   />
                   <button className="ml-5 bg-blue-500 px-4 py-3 font-semibold rounded-lg text-white" onClick={() => (data ? signOut() : signIn())}>
                        {data ? 'Logout' : 'Login'}
                   </button>
                </div>
                <div className="text-xl gap-10 md:flex hidden md:ml-auto">
                    <Link href="/">
                        <h1 className={`text-xl hover:border-slate-400 border-b-2 border-transparent ${isBlurred ? 'border-transparent hover:border-blue-800' : ''}`}>
                            Beranda
                        </h1>
                    </Link>
                    <Link href="/">
                        <h1 className={`text-xl hover:border-slate-400 border-b-2 border-transparent ${isBlurred ? 'border-transparent hover:border-blue-800' : ''}`}>
                            Tentang
                        </h1>
                    </Link>
                </div>
                <div className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 md:mx-10">
                   {/* <Image
                   className="rounded-2xl"
                   src={logo}
                   alt="Mek Komang"
                   /> */}
                </div>
                <div className="text-xl gap-10 md:flex hidden">
                    <Link href="/">
                        <h1 className={`text-xl hover:border-slate-400 border-b-2 border-transparent ${isBlurred ? 'border-transparent hover:border-blue-800' : ''}`}>
                            Menu
                        </h1>
                    </Link>
                    <Link href="/">
                        <h1 className={`text-xl hover:border-slate-400 border-b-2 border-transparent ${isBlurred ? 'border-transparent hover:border-blue-800' : ''}`}>
                            Ulasan
                        </h1>
                    </Link>
                    
                </div>
                <div className="md:flex justify-start items-start hidden md:ml-auto ">
                  <FontAwesomeIcon 
                    icon={faCartShopping} 
                    style={{
                        color: "#000",
                        width: 40,
                        height: 40,
                    }} 
                   />
                </div>
                <div className="flex items-center justify-center gap-10 md:hidden">
                <FontAwesomeIcon 
                    icon={faCartShopping} 
                    style={{
                        color: "#000",
                        width: 25,
                    }} 
                />
                <FontAwesomeIcon 
                    icon={faBars} 
                    style={{
                        color: "#000",
                        width: 20,
                    }} 
                    onClick={toggleSidebar}
                />
                </div>
                <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
            </nav>
        </>
    );
}

export default Navigation;