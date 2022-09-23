import Navbar from "./Navbar";
import { useState } from "react";

export default function Main(){

    const [firstBtn,setFirstBtn]=useState(true);
    const [secondBtn,setSecondBtn]=useState(false);

    let style1={
        background:"white",
        color:"#006CB7"

    }
    return(
        <>
        <div className="xsm:block sm:block hidden">
            <Navbar></Navbar>
        </div>
        <div className="background w-[calc(100vw - 100%)]">
            <div className="xsm:hidden sm:hidden block">
                <Navbar></Navbar>
            </div>

            <div className="h-[calc(100%-84px)] flex xsm:flex-col xsm:ml-0 sm:flex-col sm:ml-0 ml-[10.208vw] xsm:h-[1024px] sm:h-[1024px] xsm:mt-[0px] sm:mt-[0px] mt-[60px] xsm:pt-[100px] sm:pt-[100px]">
                <div className="flex flex-col justify-center items-center gap-[27px] xsm:mb-[50px] sm:mb-[50px]">
                    <h1 className="max-w-[48.125vw] min-w-[327px] text-[clamp(33.03px,4.861111111111111vw,70px)] text-[#FFFFFF] xsm:leading-[50px] sm:leading-[50px] leading-[105px] !font-[600]">
                        Get A <span className="text-[#FFB000]">Rental Car</span> At A Very Cheap Price
                    </h1>
                    <p className="max-w-[48.125vw] min-w-[319.92px] text-[clamp(9.44px,1.3888888888888888vw,20px)] text-[#FFFFFF] xsm:leading-[14px] sm:leading-[14px] leading-[30px] font-[400]">
                        There are many choices of very cool cars from various famous brands in the world, you can rent this cool car at a very affordable price for all people.
                    </p>
                </div>

                <div className="xsm:ml-0 sm:ml-0 ml-[3.888888888888889vw] flex flex-col justify-center items-center">

                    <div className="flex flex-col items-center w-[26.666666666666668vw] min-w-[340px] h-[555px] bg-[#fff] rounded-[20px]">
                        <div className="mt-[30px] flex justify-start items-center w-[23.055555555555557vw] min-w-[293.96px] min-h-[60px] bg-[#006CB7] border-[1px] border-[#006CB7] rounded-[30px]">
                            <button onClick={()=>{setFirstBtn(true);setSecondBtn(false)}} style={firstBtn===true?style1:{}} className="flex-1 h-full rounded-[30px] text-[#fff] text-[14px] leading-[25px] font-[600]">FROM AIRPORT</button>
                            <button onClick={()=>{setFirstBtn(false);setSecondBtn(true)}} style={secondBtn===true?style1:{}} className="flex-1 h-full rounded-[30px] text-[#fff] text-[14px] leading-[25px] font-[600]">TO AIRPORT</button>
                        </div>

                        <div className="flex pl-[12px] flex-row  mt-[22px] w-[23.875vw] min-w-[293.96px] min-h-[114px] border-[1px] border-[#C4EDF8] rounded-[9px]">
                            <div className="flex divide-y divide-[#C4EDF8] flex-col flex-1">
                                    <input className="input1background indent-[32px] flex-1 text-[12px] leading-[18px] font-[400] text-[#AAAAAA]" placeholder="Boston Logan International Airport"></input>
                                    <input className="input2background indent-[32px] flex-1 text-[12px] leading-[18px] font-[400] text-[#AAAAAA]" placeholder="Drop Your Address"></input>
                            </div>
                                <img className="w-[17px] place-items-center self-center ml-[9px] mr-[19px]" src="./interchangeicon.png"></img>
                        </div>

                        <div className="w-[23.875vw] min-w-[293.96px] grid  grid-cols-2 gap-[16px] my-[15px]">
                            <input className="input3background min-w-[141.67px] border-[1px] border-[#C4EDF8] h-[48px] rounded-[9px] indent-[16px] w-[11.11111111111111vw] text-[12px] leading-[18px] font-[400] text-[#AAAAAA]" type={"text"} placeholder="Pick Up Date"></input>
                            <input className="input4background min-w-[141.67px] border-[1px] border-[#C4EDF8] h-[48px] rounded-[9px] indent-[16px] w-[11.11111111111111vw] text-[12px] leading-[18px] font-[400] text-[#AAAAAA]" type={"text"} placeholder="Pick up Time"></input>
                            <input className="input5background min-w-[141.67px] border-[1px] border-[#C4EDF8] h-[48px] rounded-[9px] indent-[16px] w-[11.11111111111111vw] text-[12px] leading-[18px] font-[400] text-[#AAAAAA]" type={"number"} placeholder="1"></input>
                            <input className="input6background min-w-[141.67px] border-[1px] border-[#C4EDF8] h-[48px] rounded-[9px] indent-[16px] w-[11.11111111111111vw] text-[12px] leading-[18px] font-[400] text-[#AAAAAA]" type={"number"} placeholder="0"></input>
                        </div>

                        <div className="w-[23.875vw] min-w-[293.96px] flex flex-col gap-[4px] my-[15px]">
                            <h2 className="text-[#656565] text-[14px] tracking-[0.5] font-[400] leading-[25px]">Add Child & Infant Seats</h2>
                            <input className="border-[1px] border-[#C4EDF8] !h-[48px] rounded-[9px] indent-[18px] text-[12px] leading-[18px] font-[400] text-[#AAAAAA]" type={"text"} placeholder="How many guests?"></input>
                        </div>

                        <div className="w-[23.875vw] min-w-[293.96px] flex flex-col gap-[4px] mb-[30px] mt-[9px]">
                            <button className="bg-[#006CB7] !h-[48px] rounded-[9px] text-[14px] leading-[18px] font-[600] text-[#FFFFFF]">Get A Quote</button>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img src="./payments.png"></img>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}