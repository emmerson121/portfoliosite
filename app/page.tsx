import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import Link from "next/link";
import cover3 from "./img/cover3.jpg"
import adane from "./img/adanetech.png"
import completeweb from "./img/completeweb.png"
import emmerson from "./img/emmerson.png";
import marat from "./img/marat.png";
import microgpt from "./img/microgpt.png";
import spiritweb from "./img/spiritWeb.png"
import image1 from "./img/image1.png"
import facebook1 from "./img/facebook1.png"
import face from "./img/face.png"
import links from "./img/links.png"
import x from "./img/x.png";
import instagram from "./img/instagram.png";
import instag from "./img/instag.jpeg"
import git from "./img/git.png"
import Socials from "./Socialhandles/page";
import Skills from "./Socialhandles/Skills/page";
import Contact from "./components/contact/page";
import ClientReviews from "./components/ClientsReviews";
import NavMenu from "./components/navmenu";
import AnimatedBubbles from "./components/AnimatedBubbles";
import AnimatedText from "./components/AnimatedText";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    
    <div className="max-w-screen m-auto">
      <AnimatedBubbles />
      <div className="bg-[#160e16ad] w-full fixed top-0 left-0 z-20 backdrop-blur-[100px]">
        {/* Navbar section */}
        <NavMenu />
        </div>

{/* Hero section begins here */}

{/* Home section */}
        <section data-aos='fade-up' data-aos-delay="200" className='wrap gap-[30px] md:flex md:justify-between p-4 md:p-16 w-full md:mt-8' id="home">
            <div className="w-full md:w-[45%] mb-[50px] mt-20">
              <div className="text-center">
          {/* <h1 className='w-full text-4xl xl:text-5xl mb-4 mt-10'>Hi, I'm Ebiefie Emmanuel</h1> */}
          <AnimatedText />
          <div className='w-full text-sm md:text-base'>I'm a Front-End Web Developer focused on building Websites and Mobile Applications, leading to the overall 
            success of projects.</div>
            </div>

            <div className="flex justify-center gap-4 items-center mt-6 md:m-auto w-full md:mt-8">
              <Link href='#projects' className="bg-[#397eff] border-[1px solid #000] p-3 rounded-[20px] text-[10px] md:text-xs w-[90px] md:w-[100px] h-[40px] text-center hover:bg-white hover:text-black">View projects</Link>
              <Link href='#contact' className="bg-white border-solid border-gray-400 text-black text-[10px] md:text-xs p-3 rounded-[20px] w-[90px] md:w-[100px] h-[40px] text-center hover:bg-[#397eff] hover:text-white">Contact Me</Link>
            </div>

            <Socials />
            </div>

        <div className="w-[100%] h-[320px] md:w-2/4 md:h-auto md:ml-0 hover:p-2 hover:m-2">
        <Image src={cover3} alt="" className="w-full h-full rounded-[10px]" />
        </div>
        </section>

        
{/* About section */}
    <section data-aos='fade-up' data-aos-delay="200" className="text-center p-4 md:py-8 md:px-16 mt-26 md:mt-36" id="about">
        <div className="text-xl md:text-3xl text-[#397eff] mb-6 font-bold"><span className="text-white">About</span> Me</div>
        
      <div data-aos='zoom-in-up' data-aos-delay="200" className="wrap gap-[30px] md:gap-[50px] md:flex md:justify-between w-full max-w-[1000px] m-auto mb-14 md:mb-22">
        <div className="w-full md:w-2/4 text-left text-xs md:text-base xl:text-lg">I'm a Front-End Web Developer dedicated towards creativity, building user-friendly UIs with 100% interactivity, and contributing to the success of innovative projects.</div>
       
<div data-aos='zoom-in-up' data-aos-delay="200" className="w-full md:w-2/4 text-xs md:text-base text-left mt-6 md:mt-0 xl:text-lg">
      Having being in the tech space for some years, I've 
        come across several projects, connected with leading 
        minds, and personalities. All of these 
        has helped to shape me, provide me with the necessary 
        experiences, and aided me in exploring various programming languages in 
        web development.
</div>
</div>

  <Skills />
    </section>


{/* Resume section */}
    <section data-aos='fade-up' data-aos-delay="200" className="text-center mt-28 md:mt-42" id="resume">
      <div className="text-xl md:text-3xl text-[#397eff] mb-6 font-bold"><span className="text-white">My</span> Resume</div>
    <div className="text-xs md:text-base mb-4">Professional qualifications and technical expertise</div>

      <div className="grid gap:[30px] lg:gap-[50px] md:flex w-full p-4 md:py-8 md:px-16 gap-8">
        <div className="w-full md:w-[50%]">
          <div className="flex items-center gap-2 mb-6">
            <div><svg className="w-[25px] md:w-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M80 259.8L289.2 345.9C299 349.9 309.4 352 320 352C330.6 352 341 349.9 350.8 345.9L593.2 246.1C602.2 242.4 608 233.7 608 224C608 214.3 602.2 205.6 593.2 201.9L350.8 102.1C341 98.1 330.6 96 320 96C309.4 96 299 98.1 289.2 102.1L46.8 201.9C37.8 205.6 32 214.3 32 224L32 520C32 533.3 42.7 544 56 544C69.3 544 80 533.3 80 520L80 259.8zM128 331.5L128 448C128 501 214 544 320 544C426 544 512 501 512 448L512 331.4L369.1 390.3C353.5 396.7 336.9 400 320 400C303.1 400 286.5 396.7 270.9 390.3L128 331.4z" fill="#fff"/></svg></div>
          <div className="text-left text-xl md:text-2xl font-bold">Education</div>
          </div>
        
        <div data-aos='zoom-in-up' data-aos-delay="200" className="bg-[#0e0e0e] rounded-md p-4 mb-8">
        <div className="text-left text-base md:text-lg font-bold mb-2">Diploma in Health, Safety, Security & Environment</div>
        <p className="text-left text-xs md:text-sm mb-[5px]">University of Uyo</p>
        <p className="text-left text-xs md:text-sm">2016 - 2017</p>
          </div>

          <div data-aos='zoom-in-up' data-aos-delay="200" className="bg-[#0e0e0e] rounded-md p-4 mb-8">
        <div className="text-left text-base md:text-lg font-bold mb-2">B.Sc Microbiology</div>
        <p className="text-left text-xs md:text-sm mb-[5px]">University of Uyo</p>
        <p className="text-left text-xs md:text-sm">2017 - 2022</p>
          </div>

          <div data-aos='zoom-in-up' data-aos-delay="200" className="bg-[#0e0e0e] rounded-md p-4 mb-8">
        <div className="text-left md:text-lg font-bold mb-2 text-base">JavScript Masters Course</div>
        <p className="text-left text-xs md:text-sm mb-[5px]">OGtech Network Ltd</p>
        <p className="text-left text-xs md:text-sm">November, 2023</p>
          </div>
        </div>

        <div className="w-full md:w-[50%]">
          <div className="flex items-center gap-2 mb-8">
            <div><svg className="w-[25px] md:w-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z" fill="#fff"/></svg></div>
          <div className="text-left text-xl md:text-2xl font-bold">Experience</div>
          </div>

    <div className="gap-[30px] w-full">
          <div data-aos='zoom-in-up' data-aos-delay="200" className="bg-[#0e0e0e] w-full h-auto md:h-[200px] rounded-md text-left p-4 mb-8">
            <div className="text-base md:text-lg font-bold mb-2">Front-End Developer</div>
            <div className="text-xs md:text-sm">Armaweb Technology</div>
            <div className="text-xs md:text-sm mb-2">2024 - Present</div>
            <div className="text-xs md:text-sm">Development of scalable & user-friendly projects with maximum responsiveness and output.</div>
          </div>

          <div data-aos='zoom-in-up' data-aos-delay="200" className="bg-[#0e0e0e] w-[full] h-auto md:h-[200px] rounded-md text-left p-4">
            <div className="text-base md:text-lg font-bold mb-2">Content Creator</div>
            <div className="text-xs md:text-sm">Coinstore Exchange &nbsp; |&nbsp; Numbers Protocol</div>
            <div className="text-xs md:text-sm mb-2">2022 - Present</div>
            <div className="text-xs md:text-sm">Promotion of contents with infographics and visually-appealing video contents.</div>
          </div>
          </div>
        </div>
      </div>
    </section>


{/* Project section */}
    <section data-aos='fade-up' data-aos-delay="200" className="text-center mt-28 md:mt-42" id="projects">
      <div className="text-2xl md:text-3xl text-[#397eff] mb-6 font-bold md:text-2xl">Projects</div>
      <p className="mb-4 text-xs md:text-base p-4">Below are various projects I've built, made up of personal and clients projects:</p>

      <div className="flex justify-center items-center flex-wrap w-[100%] gap-12 p-6">
        <div data-aos='fade-up' data-aos-delay="200" className="xl:w-[500px] lg:w-[400px] md:w-[320px]">
        <Link href="https://adiele.vercel.app">
          <Image className="w-full h-full rounded-xl" src={adane} alt="" />
        </Link>

        <div className="mt-6">
        <div className="text-left text-base md:text-[18px] font-bold mb-2">Adane Technology</div>
        <p className="text-left text-xs">A real-time project focused at blending technical expertise with artistic vision in turning digital dreams to reality.</p>
        </div>
        </div>

        <div data-aos='fade-up' data-aos-delay="200" className="xl:w-[500px] lg:w-[400px] md:w-[320px]">
        <Link href="https://mayweb.vercel.app/">
          <Image className="w-full h-full rounded-xl" src={completeweb} alt="" />
        </Link>

        <div className="mt-6">
        <div className="text-left text-base md:text-[18px] font-bold mb-2">First Tutorial Project</div>
        <p className="text-left text-xs">My beginner website that includes pricings for various website services as at 2023.</p>
        </div>
        </div>

        <div data-aos='fade-up' data-aos-delay="200" className="xl:w-[500px] lg:w-[400px] md:w-[320px]">
        <Link href="https://personalportfolio-beta-liart.vercel.app/">
          <Image className="w-full h-full rounded-xl" src={emmerson} alt="" />
        </Link>

        <div className="mt-6">
        <div className="text-left text-base md:text-[18px] font-bold mb-2">Emmerson Portfolio</div>
        <p className="text-left text-xs">A Portfolio website with modelled from Behance.com Gallery with contents gotten from same source, 2024.</p>
        </div>
        </div>

        <div data-aos='fade-up' data-aos-delay="200" className="xl:w-[500px] lg:w-[400px] md:w-[320px]">
        <Link href="https://neyenwa.vercel.app">
          <Image className="w-full h-full rounded-xl" src={marat} alt="" />
        </Link>

        <div className="mt-6">
        <div className="text-left text-base md:text-[18px] font-bold mb-2">Marat Education Platform</div>
        <p className="text-left text-xs">Marat Education is dedicated to transforming ideas into compelling online experiences. Purchase your online courses made up of trendy topics for effective growth.</p>
        </div>
        </div>

        <div data-aos='fade-up' data-aos-delay="200" className="xl:w-[500px] lg:w-[400px] md:w-[320px]">
        <Link href="">
          <Image className="w-full h-full rounded-xl" src={microgpt} alt="" />
        </Link>

        <div className="mt-6">
        <div className="text-left text-base md:text-[18px] font-bold mb-2">Microgpt</div>
        <p className="text-left text-xs">A replica of microgpt.io as at November, 2024 </p>
        </div>
        </div>

        <div data-aos='fade-up' data-aos-delay="200" className="xl:w-[500px] lg:w-[400px] md:w-[320px]">
        <Link href="">
          <Image className="w-full h-full rounded-xl" src={spiritweb} alt="" />
        </Link>

        <div className="mt-6">
        <div className="text-left text-base md:text-[18px] font-bold mb-2">The Spirit Media</div>
        <p className="text-left text-xs">Your sure plug for foreign numbers, airtime, data, utility subscriptions, etc.</p>
        </div>
        </div>
      </div>
    </section>


{/* Clients Review section */}
    <ClientReviews />


{/* Contact section */}
    <section data-aos='fade-up' data-aos-delay="200" className="text-center mt-28 md:mt-42" id="contact">
      <div className="text-2xl text-[#397eff] mb-2 font-bold md:text-3xl"><span className="text-white">Contact</span> Me</div>

  <div className="grid gap-[30px] md:flex md:justify-around items-center p-2 md:py-8 md:px-8 lg:gap-8 md:p-6 md:gap-8">
    <div data-aos='fade-up' data-aos-delay="200" className="w-full md:w-[50%] p-4">
      <div className="text-lg md:text-2xl font-bold text-left mb-8 md:text-xl md:mb-4">Let's Build For You</div>
    <p className="text-xs text-left md:text-base">Looking forward to turning your innovative ideas to real-time project, got a new or existing business and want to enhance its visibility? You're at the right place.</p>
    <p className="text-left text-lg font-bold md:text-xl mt-6 mb-10 md:text-base">Let's talk!</p>
      <div className="flex items-center mb-4 gap-4">
        <div className="bg-[#397eff] hover:bg-[#1e1eefe3] w-[25px] md:w-[40px] h-[25px] rounded-[8px] pt-[8px] pb-[24px] pr-[24px] pl-[12px] m-0"><svg className="w-[14px] md:w-[18px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M61.4 64C27.5 64 0 91.5 0 125.4 0 126.3 0 127.1 .1 128L0 128 0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256-.1 0c0-.9 .1-1.7 .1-2.6 0-33.9-27.5-61.4-61.4-61.4L61.4 64zM464 192.3L464 384c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-191.7 154.8 117.4c31.4 23.9 74.9 23.9 106.4 0L464 192.3zM48 125.4C48 118 54 112 61.4 112l389.2 0c7.4 0 13.4 6 13.4 13.4 0 4.2-2 8.2-5.3 10.7L280.2 271.5c-14.3 10.8-34.1 10.8-48.4 0L53.3 136.1c-3.3-2.5-5.3-6.5-5.3-10.7z" fill="#fff" /></svg></div>
       
        <div className="text-left">
          <div className="text-xs md:text-sm">Email</div>
          <div className="text-sm font-bold md:text-base">emmanuelebiefie7@gmail.com</div>
        </div>
      </div>

      <div className="flex items-center mb-4 gap-4">
        <div className="bg-[#397eff] hover:bg-[#1e1eefe3] w-[25px] md:w-[40px] h-[25px] rounded-[8px] pt-[8px] pb-[24px] pr-[24px] pl-[12px] m-0"><svg className="w-[14px] md:w-[18px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z" fill="#fff"/></svg></div>
        
        <div className="text-left">
          <div className="text-xs md:text-sm">Phone</div>
          <div className="text-sm font-bold md:text-lg">+2348103813014</div>
        </div>
      </div>

      <div className="flex items-center mb-4b gap-4">
        <div className="bg-[#397eff] hover:bg-[#1e1eefe3] w-[25px] md:w-[40px] h-[25px] rounded-[8px] pt-[8px] pb-[24px] pr-[24px] pl-[12px] m-0"><svg className="w-[10px] md:w-[12px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" fill="#fff"/></svg></div>
        
        <div className="text-left">
          <div className="text-xs md:text-sm">Location</div>
          <div className="text-sm font-bold md:text-lg">Port Harcourt, Nigeria.</div>
        </div>
      </div>
      </div>

      <div>
        <Contact />
        {/* <form className="wrap">
          <div className="bg-[#0e0e0e] p-8 rounded-lg">

            <div className="text-2xl font-bold text-left mb-6">Get in touch</div>

          <div className="pb-6">
          <input className="p-2 w-[360px] h-auto border rounded-md border-white" type="text" placeholder="Enter name" name="name" required/>
          </div>
          

          <div className="pb-6">
          <input className="p-2 w-[360px] h-auto border rounded-md border-white" type="email" placeholder="Enter email" required/>
          </div>

          <div className="pb-6">
          <input className="p-2 w-[360px] h-auto border rounded-md border-white" type="tel" maxLength={11} placeholder="Phone" required/>
          </div>

          <div className="pb-6">
          <textarea className="p-2 w-[360px] h-[100px] border rounded-md border-white" placeholder="Enter message..." required></textarea>
          </div>

          <div className="">
          <button className="bg-[#1e1eefe3] p-2 w-[100px] h-auto rounded-md" id="send">Send</button>
          </div>

          </div>
        </form> */}
      </div>
      </div>
    </section>


{/* Footer section */}
    <footer className="bg-[#0e0e0e] w-full md:w-full h-auto p-[20px] mt-28 md:mt-42 xl:px-[60px]">
      <div className="flex justify-between items-center pl-3">
      <div className="font-sans text-lg md:text-2xl font-bold relative logo"><span className="absolute">E</span><span className="font-mono text-[#397eff] font-bold text-3xl md:text-4xl ml-[-10px]">E</span></div>

        <div className="flex justify-between items-center gap-2.5 md:gap-4">
          <div className="p-1.5 md:p-2 rounded-full bg-white/10 transition-all hover:bg-[#397eff]"><a href="mailto:emmanuelebiefie7@gmail.com"><svg className="w-[17px] md:w-[22px] h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z" fill="white"/></svg></a></div>
          {/* <Link href="https://mail.google.com/mail/u/0/#inbox?compose=new"><svg className="w-[20px] md:w-[25px] h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z" fill="white"/></svg></Link> */}
        <div className="p-1.5 md:p-2 rounded-full bg-white/10 transition-all hover:bg-[#397eff]"><Link href="https://www.facebook.com/emmerson.ebiefie"><svg className="w-[17px] md:w-[22px] h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z" fill="#fff" stroke="blue"/></svg></Link></div>
        <div className="p-1.5 md:p-2 rounded-full bg-white/10 transition-all hover:bg-[#397eff]"><Link href="https://x.com/emmerson017"><svg className="w-[17px] md:w-[22px] h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" fill="#fff"/></svg></Link></div>
        <div className="p-1.5 md:p-2 rounded-full bg-white/10 transition-all hover:bg-[#397eff]"><Link href="https://ng.linkedin.com/in/emmanuel-ebiefie-51522625a"><svg className="w-[15px] md:w-[20px] h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z" fill="#fff"/></svg></Link></div>
        <div className="p-1.5 md:p-2 rounded-full bg-white/10 transition-all hover:bg-[#397eff]"><Link href="https://github.com/emmerson121"><svg className="w-[17px] md:w-[22px] h-full " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" fill="#fff"/></svg></Link></div>
        {/* <div className="p-2 rounded-full bg-white/10 transition-all hover:bg-[#397eff]"><Link href="https://www.instagram.com/emmerson150/"><svg className="w-[17px] md:w-[22px] h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" fill="#fff"/></svg></Link></div> */}
        </div>
      </div>

      <br />

      {/* <div className="border border-1px-solid-white mt-10 mb-10 w-full"></div> */}

      <div className="text-center text-[8px] mt-4 md:mt-2 md:font-[200]">Designed & Built by <span className="font-bold text-sm md:text-[16px]">Emmanuel <span className="text-[#397eff]">Ebiefie</span></span> - Front-End Developer</div>
      {/* <p className="text-center text-xs">&copy; 2025 Emmanuel Ebiefie. All rights reserved.</p> */}
    </footer>
    </div>

  );
}
