'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

export default function NavMenu() {
const [toggle, setToggle] = useState<boolean>(true);

    return(
        <div>
          <div className="flex items-center bg-[#0e0e0e] w-full p-[20px] mt-[10px] h-[70px] md:w-full relative xl:px-[80px]">
        
      <div className="w-full flex items-center gap-[15px] pl-3 md:pl-0">
        <Link href="/" className="logo"><span className="logo1">E</span><span className="logo2">E</span></Link>
        </div>
 
       

        <div className="w-[40px] md:hidden h-auto text-[25px]"><FontAwesomeIcon onClick={() => setToggle(!toggle)} icon={faBars} /></div> 
         <div className="hidden md:flex lg:gap-8 md:gap-6 text-white font-sans md:text-sm">
          <Link className="hover:text-[#397eff]" href="/">Home</Link>
          <Link className="hover:text-[#397eff]" href="#about">About</Link>
          <Link className="hover:text-[#397eff]" href="#resume">Resume</Link>
          <Link className="hover:text-[#397eff]" href="#projects">Projects</Link>
          <Link className="hover:text-[#397eff]" href="#contact">Contact</Link>
        </div>
        </div>


{!toggle ? 
    <div className="bg-[#160e16ad] absolute flex w-full top-0 right-0 left-0 bottom-0 flex justify-end">
    <div className="w-full h-full bg-[#0e0e0e] text-base font-bold text-white rounded-md backdrop-blur-[25px]">
      <div className="flex justify-between items-center bg-[#0e0e0e] w-full p-6 mt-[10px] h-[70px] relative rounded-md">
        <div className="px-2">
        <Link href="/" className="logo"><span className="logo1">E</span><span className="logo2">E</span></Link>
        </div>
        <div className="w-[40px] md:hidden h-auto text-[20px]"><FontAwesomeIcon onClick={() => setToggle(true)} className="text-white p-4" icon={faXmark} /></div>
      </div>

      <div className="border border-0.5px-solid bg-white"></div>

    
      <ul onClick={() => setToggle(!toggle)} className="flex flex-col p-6 text-left text-white space-y-4 py-4 font-bold bg-[#0e0e0e]">
          <li><Link className="hover:text-[#397eff]" href="/">Home</Link></li>
          <li><Link className="hover:text-[#397eff]" href="#about">About</Link></li>
          <li><Link className="hover:text-[#397eff]" href="#resume">Resume</Link></li>
          <li><Link className="hover:text-[#397eff]" href="#projects">Projects</Link></li>
          <li><Link className="hover:text-[#397eff]" href="#contact">Contact</Link></li>
      </ul>
  
    </div>
    </div>
    : ''}
     </div>
    )
}