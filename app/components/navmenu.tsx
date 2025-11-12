'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

export default function NavMenu() {
const [toggle, setToggle] = useState<boolean>(true);

    const toggleModal = () => {
      setToggle(!toggle);
      document.body.style.overflow = "hidden";
    };
  
    const closeModal = () => {
      setToggle(true);
      document.body.style.overflow = "auto";
    };

    return(
        <div>
          <div className="flex items-center bg-[#0e0e0e] w-full p-[20px] mt-[10px] h-[70px] md:w-full relative xl:px-[55px] sm:px-[50px]">
        
      <div className="w-screen flex items-center gap-[15px] pl-3">
        <Link href="/" className="logo"><span className="logo1">E</span><span className="logo2">E</span></Link>
        </div>
 
        <div className="hidden md:flex lg:gap-8 md:gap-6 text-white font-sans md:text-sm p-4">
          <Link className="hover:text-[#397eff]" href="/">Home</Link>
          <Link className="hover:text-[#397eff]" href="#about">About</Link>
          <Link className="hover:text-[#397eff]" href="#resume">Resume</Link>
          <Link className="hover:text-[#397eff]" href="#projects">Projects</Link>
          <Link className="hover:text-[#397eff]" href="#contact">Contact</Link>
        </div>

        <div className="w-[40px] md:hidden h-auto text-[25px]"><FontAwesomeIcon onClick={toggleModal} icon={faBars} /></div> 
        
        </div>


{!toggle ? 
    <div className="bg-[#160e16ad] absolute w-full top-0 right-0 left-0 bottom-0 flex justify-end">
    <div className="w-full h-full bg-[#0e0e0e] text-base font-bold text-white rounded-md backdrop-blur-[25px]">
      <div className="flex justify-between items-center bg-[#0e0e0e] w-full p-6 mt-[10px] h-[70px] relative rounded-md">
        <div className="px-2">
        <Link href="/" className="logo"><span className="logo1">E</span><span className="logo2">E</span></Link>
        </div>
        <div className="w-[40px] md:hidden h-auto text-[20px]"><FontAwesomeIcon onClick={closeModal} className="text-white p-4" icon={faXmark} /></div>
      </div>

      <div className="border border-0.5px-solid bg-white"></div>

    <div id="mobile-menu" className="w-full py-4 rounded-md shadow-lg bg-[#0e0e0e]">
      <div className="flex flex-col p-6 text-left text-white space-y-4 py-2 font-bold">
          <Link className="hover:text-[#397eff]" onClick={() => setToggle(!toggle)} href="/">Home</Link>
          <Link className="hover:text-[#397eff]" onClick={() => setToggle(!toggle)} href="#about">About</Link>
          <Link className="hover:text-[#397eff]" onClick={() => setToggle(!toggle)} href="#resume">Resume</Link>
          <Link className="hover:text-[#397eff]" onClick={() => setToggle(!toggle)} href="#projects">Projects</Link>
          <Link className="hover:text-[#397eff]" onClick={() => setToggle(!toggle)} href="#contact">Contact</Link>
      </div>
    </div>
    </div>
    </div>
    : ''}
     </div>
    )
}