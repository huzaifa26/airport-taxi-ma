import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useRef } from "react";
import Slider from "react-slick";

export default function Trending(props){

    const forwardArrow=useRef();
    const slider1Arrow=useRef();

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
      };

    var settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
              }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false                
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
      };

    return(
        <div id="fleet" className="w-[calc(100vw - 100%)] mt-[30px]">
            <div className="xsm:hidden sm:hidden flex flex-col m-auto w-[87.13541666666667vw] min-h-[729px]">
                <div className="flex h-[140px]">
                    <h2 className="text-[#262626] text-[clamp(24px,3.3333333333333335vw,48px)] font-[600] leading-[4.861111111111111vw] xsm:leading-[36px] w-[533px]"><span className="text-[#F2B120]">Trending</span> Fleets Great & Fast <span className="text-[#006CB7]">This Week</span></h2>
                    <div className="h-full flex justify-end items-end py-[20px]">
                        <ul className="flex gap-[50px] items-center justify-end">
                            <li>See all cars</li>
                            <li><img src="./arrowleft.png"/></li>
                            <li>Sedan</li>
                            <li>Van</li>
                            <li>Minivan</li>
                            <li>Suburban </li>
                        </ul>
                    </div>
                </div>

                <Slider {...settings1} ref={slider1Arrow} className="flex gap-[20px]">
                    <div className="w-[26.805555555555557vw] min-w-[263.09px] h-[420px] bg-[#E7F5FF] rounded-[20px]">
                        <img src="./trendingimg1.png"/>
                        <div className="flex justify-around mt-[20px]">
                            <div>
                                <h3 className="text-[16px] leading-[178.5%] font-[500]">Compact Sedan</h3>
                                <p className="text-[12px] font-[200px] w-[16.11111111111111vw] min-w-[158.12px]">Compact Sedan for up-to 2-Passenger with 2 carry on Luggages | Economic & Spacious car.</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[24px] leading-[178.5%] font-[600]">$250</h3>
                                <button className="bg-[#F2B120] text-[10.9px] font-[600px] w-[80px] h-[29px] rounded-[7.84px] text-[#fff]">Book NOW</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[19.791666666666668vw] min-w-[194.25px] h-[271px] rounded-[4px]">
                        <img className="w-[315.69px] " src="./trendingimg2.png"/>
                        <div className="xsm:w-[18.32847222222222vw] sm:w-[18.32847222222222vw] w-[315.69px] min-w-[179.53px] m-auto relative top-[-60px] flex justify-around mt-[20px]">
                            <div>
                                <h3 className="text-[11.76px] leading-[178.5%] font-[500]">3-PAX SEDAN</h3>
                                <p className="text-[8.82px] font-[200px] w-[11.844444444444445vw] min-w-[116.25px]">Compact Sedan for up-to 2-Passenger with 2 carry on Luggages | Economic & Spacious car.</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[clamp(12px,1.225vw,17.64px)] font-[600]">$ 230</h3>
                                <button className="bg-[#F2B120] text-[10.9px] font-[600px] w-[74.99px] h-[27.2px] rounded-[7.35px] text-[#fff]">Book NOW</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[19.791666666666668vw] min-w-[194.25px] h-[271px] rounded-[4px]">
                        <img className="w-[315.69px] object-cover" src="./trendingimg3.png"/>
                        <div className="xsm:w-[18.32847222222222vw] sm:w-[18.32847222222222vw] w-[315.69px] min-w-[179.53px] m-auto relative top-[-60px] flex justify-around mt-[20px]">
                            <div>
                                <h3 className="text-[11.76px] leading-[178.5%] font-[500]">6/7-PAX MINIVAN</h3>
                                <p className="text-[8.82px] font-[200px] w-[11.844444444444445vw] min-w-[116.25px]">Compact Sedan for up-to 2-Passenger with 2 carry on Luggages | Economic & Spacious car.</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[clamp(12px,1.225vw,17.64px)] font-[600]">$ 350</h3>
                                <button className="bg-[#F2B120] text-[10.9px] font-[600px] w-[74.99px] h-[27.2px] rounded-[7.35px] text-[#fff]">Book NOW</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[19.791666666666668vw] min-w-[194.25px] h-[271px] rounded-[4px]">
                        <img className="w-[315.69px] " src="./trendingimg4.png"/>
                        <div className="xsm:w-[18.32847222222222vw] sm:w-[18.32847222222222vw] w-[315.69px] min-w-[179.53px] m-auto relative top-[-60px] flex justify-around mt-[20px]">
                            <div>
                                <h3 className="text-[11.76px] leading-[178.5%] font-[500]">4-PAX-MINIVAN</h3>
                                <p className="text-[8.82px] font-[200px] w-[11.844444444444445vw] min-w-[116.25px]">Compact Sedan for up-to 2-Passenger with 2 carry on Luggages | Economic & Spacious car.</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[clamp(12px,1.225vw,17.64px)] font-[600]">$ 550</h3>
                                <button className="bg-[#F2B120] text-[10.9px] font-[600px] w-[74.99px] h-[27.2px] rounded-[7.35px] text-[#fff]">Book NOW</button>
                            </div>
                        </div>
                    </div>

                    {/* <div className="w-[19.791666666666668vw] min-w-[194.25px] h-[271px] rounded-[4px]">
                        <img className="w-[315.69px]" src="./trendingimg4.png"/>
                        <div className="w-[18.32847222222222vw] min-w-[179.53px] m-auto relative top-[-60px] flex justify-around mt-[20px]">
                            <div>
                                <h3 className="text-[11.76px] leading-[178.5%] font-[500]">4-PAX-MINIVAN</h3>
                                <p className="text-[8.82px] font-[200px] w-[11.844444444444445vw] min-w-[116.25px]">Compact Sedan for up-to 2-Passenger with 2 carry on Luggages | Economic & Spacious car.</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[clamp(12px,1.225vw,17.64px)] font-[600]">$ 550</h3>
                                <button className="bg-[#F2B120] text-[10.9px] font-[600px] w-[74.99px] h-[27.2px] rounded-[7.35px] text-[#fff]">Book NOW</button>
                            </div>
                        </div>
                    </div> */}
                </Slider>
                <div className="flex gap-[38px] relative md:left-[53%] lg:left-[39%] left-[32%] top-[-62px]">
                    <img onClick={()=>{slider1Arrow.current.slickPrev();console.log(slider1Arrow.current.innerSlider.clickHander((e)=>{console.log(e)}))}} className="cursor-pointer" src="./arrowright.png"/>
                    <img onClick={()=>{slider1Arrow.current.slickNext();}} className="cursor-pointer" src="./arrowleft.png"/>    
                </div>

            </div>

            <div className="xsm:flex sm:flex hidden flex-col m-auto w-[87.13541666666667vw] min-h-[729px]">
                <div className="flex h-[90px]">
                    <h2 className="text-[#262626] text-[clamp(24px,3.3333333333333335vw,48px)] md:text-[32px] font-[600] leading-[70px] xsm:leading-[36px] sm:leading-[36px] w-[37.013888888888886vw] min-w-[267px]"><span className="text-[#F2B120]">Trending</span> Fleets Great & Fast <span className="text-[#006CB7]">This Week</span></h2>
                </div>

                <div className="flex justify-center relative">
                    <div className="relative w-[26.805555555555557vw] min-w-[263.09px] h-[356.26px] bg-[#E7F5FF] rounded-[20px]">
                        <div className="rotate-[-90deg] flex justify-start items-start py-[20px] absolute bottom-[40%] right-[50%]">
                            <ul className="flex gap-[30px] items-center justify-end">
                                <li>Sedan</li>
                                <li>Van</li>
                                <li>Minivan</li>
                                <li>Suburban </li>
                            </ul>
                        </div>
                            <img src="./trendingimg1.png"/>
                            <div className="flex justify-around mt-[20px]">
                                <div>
                                    <h3 className="text-[16px] leading-[178.5%] font-[500]">Compact Sedan</h3>
                                    <p className="text-[12px] font-[200px] w-[16.11111111111111vw] min-w-[158.12px]">Compact Sedan for up-to 2-Passenger with 2 carry on Luggages | Economic & Spacious car.</p>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <h3 className="text-[24px] leading-[178.5%] font-[600]">$250</h3>
                                    <button className="bg-[#F2B120] text-[10.9px] font-[600px] w-[80px] h-[29px] rounded-[7.84px] text-[#fff]">Book NOW</button>
                                </div>
                            </div>
                    </div>
                </div>

                <div className="flex flex-col mt-[20px]">

                    <div className="flex justify-between">
                        <ul className="flex items-center gap-[25px]">
                            <li>See all cars</li>
                            <li><img src="./arrowleft.png"/></li>
                        </ul>

                        <div className="flex items-center gap-[38px]">
                            <img onClick={()=>{forwardArrow.current.slickPrev();console.log(forwardArrow.current)}} className="cursor-pointer" src="./arrowright.png"/>
                            <img onClick={()=>{forwardArrow.current.slickNext();}} className="cursor-pointer" src="./arrowleft.png"/>
                        </div>
                    </div>
                    {/* <div className=""> */}
                <Slider className="flex gap-[20px]" {...settings} ref={forwardArrow}>
                        <div className="w-[19.791666666666668vw] min-w-[194.25px] h-[271px] rounded-[4px]">
                            <img className="w-[315.69px]" src="./trendingimg2.png"/>
                            <div className="w-[18.32847222222222vw] min-w-[179.53px] m-auto relative top-[-60px] flex justify-around mt-[20px]">
                                <div>
                                    <h3 className="text-[11.76px] leading-[178.5%] font-[500]">3-PAX SEDAN</h3>
                                    <p className="text-[8.82px] font-[200px] w-[11.844444444444445vw] min-w-[116.25px]">Compact Sedan for up-to 2-Passenger with 2 carry on Luggages | Economic & Spacious car.</p>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <h3 className="text-[clamp(12px,1.225vw,17.64px)] font-[600]">$ 230</h3>
                                    <button className="bg-[#F2B120] text-[10.9px] font-[600px] w-[74.99px] h-[27.2px] rounded-[7.35px] text-[#fff]">Book NOW</button>
                                </div>
                            </div>
                        </div>

                        <div className="w-[19.791666666666668vw] min-w-[194.25px] h-[271px] rounded-[4px]">
                            <img className="w-[315.69px]" src="./trendingimg3.png"/>
                            <div className="w-[18.32847222222222vw] min-w-[179.53px] m-auto relative top-[-60px] flex justify-around mt-[20px]">
                                <div>
                                    <h3 className="text-[11.76px] leading-[178.5%] font-[500]">6/7-PAX MINIVAN</h3>
                                    <p className="text-[8.82px] font-[200px] w-[11.844444444444445vw] min-w-[116.25px]">Compact Sedan for up-to 2-Passenger with 2 carry on Luggages | Economic & Spacious car.</p>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <h3 className="text-[clamp(12px,1.225vw,17.64px)] font-[600]">$ 350</h3>
                                    <button className="bg-[#F2B120] text-[10.9px] font-[600px] w-[74.99px] h-[27.2px] rounded-[7.35px] text-[#fff]">Book NOW</button>
                                </div>
                            </div>
                        </div>

                        <div className="w-[19.791666666666668vw] min-w-[194.25px] h-[271px] rounded-[4px]">
                            <img className="w-[315.69px]" src="./trendingimg4.png"/>
                            <div className="w-[18.32847222222222vw] min-w-[179.53px] m-auto relative top-[-60px] flex justify-around mt-[20px]">
                                <div>
                                    <h3 className="text-[11.76px] leading-[178.5%] font-[500]">4-PAX-MINIVAN</h3>
                                    <p className="text-[8.82px] font-[200px] w-[11.844444444444445vw] min-w-[116.25px]">Compact Sedan for up-to 2-Passenger with 2 carry on Luggages | Economic & Spacious car.</p>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <h3 className="text-[clamp(12px,1.225vw,17.64px)] font-[600]">$ 550</h3>
                                    <button className="bg-[#F2B120] text-[10.9px] font-[600px] w-[74.99px] h-[27.2px] rounded-[7.35px] text-[#fff]">Book NOW</button>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    {/* </div> */}
                
                </div>
            </div>

        </div>
    )
}
