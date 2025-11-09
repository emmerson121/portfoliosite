import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import image1 from "/public/img/image1.png";

export default function Skills() {

    return(
        <div data-aos="zoom-in-up" data-aos-delay="200" className="text-center">
            <div className="text-lg md:text-2xl font-medium mb-6">My Skills</div>
            <p className="text-xs md:text-base mb-4">For an effective and responsive website, I'm proficient at utilizing:</p>   
            
            <div className="bg-[#0e0e0e] flex flex-wrap justify-center text-left md:text-center w-full h-auto md:h-[100px] rounded-md gap-2 p-8">
  <div className="text-sm md:text-lg">
    HTML
    {/* <img className="hidden md:block w-full h-full" src="/img/image1.png" alt="HTML" /> */}
  </div>
  &nbsp; |&nbsp;

  <div className="text-sm md:text-lg">
    {/* <img className="hidden md:block w-full h-full" src="/img/image2.png" alt="CSS" /> */}
  CSS
  </div>
  &nbsp; |&nbsp;

  <div className="text-sm md:text-lg">
    {/* <img className="hidden md:block w-full h-full" src="/img/image3.png" alt="Tailwind" /> */}
  Tailwind
  </div>
  &nbsp; |&nbsp;

  <div className="text-sm md:text-lg">
    {/* <img className="hidden md:block w-full h-full" src="/img/image4.jpeg" alt="JavaScript" /> */}
  JavaScript
  </div>
  &nbsp; |&nbsp;

  <div className="text-sm md:text-lg">
    {/* <img className="hidden md:block w-full h-full" src="/img/image5.png" alt="TypeScript" /> */}
  Typescript
  </div>
  &nbsp; |&nbsp;

  <div className="text-sm md:text-lg">
    {/* <img className="hidden md:block w-full h-full" src="/img/image6.png" alt="React" /> */}
  React
  </div>
  &nbsp; |&nbsp;

  <div className="text-sm md:text-lg">
    {/* <img className="hidden md:block w-full h-full" src="/img/image7.jpeg" alt="Next.js" /> */}
  Next.js
  </div>
</div>

        </div>
    )
}