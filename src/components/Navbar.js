import { useState } from "react"


export default function Navbar(props){

    let [showNav,setShowNav]=useState(false);

    const mobileNavbarHandler=()=>{
        setShowNav(!showNav);
    }

    return(
        <div className="flex flex-col justify-center xsm:bg-[#474C56] sm:bg-[#474C56]">
            <nav className="relative z-20 flex justify-center items-center pt-[44px] xsm:pb-[44px] sm:pb-[44px] xsm:bg-[#474C56] sm:bg-[#474C56] gap-[8.2047vw]">
                <div className="xsm:flex-1 sm:flex-1 flex justify-start items-center">
                    <img className="ml-[10.20vw]" src="./Logo.png"/>
                </div>

                <div className="xsm:flex sm:flex xsm:flex-1 sm:flex-1 hidden justify-end items-center">
                    <img onClick={mobileNavbarHandler} className="mr-[10.20vw]" src="./hamburger.png"/>
                </div>
                <div className="flex-1 xsm:hidden sm:hidden block">
                    <ul className="flex justify-end text-[#FFFFFF] text-[18px] gap-[30px] font-[500]">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#service">Service Area</a></li>
                        <li><a href="#fleet">Fleet</a></li>
                        <li><a href="blog">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="mr-[8%] xsm:hidden sm:hidden block">
                    <button className="font-[500] w-[137px] h-[40px] rounded-[10px] bg-[#F0C854] text-[#313131] text-[18px] leading-[27px]">Login</button>
                </div>
            </nav>
            
            <ul style={showNav === false ?{maxHeight:0}:{maxHeight:"500px",borderTop:"1px solid white",padding:"10px 0"}}  className="relative z-10 xsm:flex transition-all ease-in-out delay-[0.1s] duration-500 sm:flex hidden flex-col items-center justify-end text-[#FFFFFF] text-[18px] gap-[30px] font-[500]">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#service">Service Area</a></li>
            <li><a href="#ho">Fleet</a></li>
            <li><a>Blog</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>

        </div>
    )
}