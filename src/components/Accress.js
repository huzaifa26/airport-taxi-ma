

export default function Accress(props){

    

    return(
        <div className="w-[calc(100vw - 100%)] mt-[30px]">
            <div className="flex m-auto w-[88.27986111111112vw]">
                <div>
                    <h2 className="w-[42.47222222222222vw] min-w-[241.14px] text-[clamp(20px,3.3333333333333335vw,48px)] leading-[140%] text-[#1B1A1B] font-[600]">Get all access in your hands now</h2>
                    
                    <div className="flex flex-col gap-[30px] mt-[37px]">
                        <div>
                            <div className="flex gap-[22px] items-center">
                                <img className="xsm:w-[27.97px] sm:w-[40.97px] self-start" src="./access1.png" alt=""></img>
                                <div className="flex flex-col gap-[15px]">
                                    <h2 className="text-[clamp(12px,1.25vw,18px)] font-[500] xsm:leading-[15px] leading-[152.2%] text-[#000000]">Deals for every budget</h2>
                                    <p className="w-[26.805555555555557vw] min-w-[168px] text-[clamp(8px,0.9722222222222222vw,14px)] font-[300] leading-[180%] xsm:leading-[15px] text-[#464646]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex gap-[22px] items-center">
                                <img className="xsm:w-[27.97px] sm:w-[40.97px] self-start" src="./access2.png" alt=""></img>
                                <div className="flex flex-col gap-[15px]">
                                    <h2 className="text-[clamp(12px,1.25vw,18px)] font-[500] leading-[152.2%] xsm:leading-[15px] text-[#000000]">Best price guaranteed</h2>
                                    <p className="w-[26.805555555555557vw] min-w-[168px] text-[clamp(8px,0.9722222222222222vw,14px)] font-[300] leading-[180%] xsm:leading-[15px] text-[#464646]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex gap-[22px] items-center">
                                <img className="xsm:w-[27.97px] sm:w-[40.97px] self-start" src="./access3.png" alt=""></img>
                                <div className="flex flex-col gap-[15px]">
                                    <h2 className="text-[clamp(12px,1.25vw,18px)] font-[500] leading-[152.2%] xsm:leading-[15px] text-[#000000]">Support 24/7</h2>
                                    <p className="w-[26.805555555555557vw] min-w-[168px] text-[clamp(8px,0.9722222222222222vw,14px)] font-[300] leading-[180%] xsm:leading-[15px] text-[#464646]">Juis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                                </div>
                            </div>
                        </div>

                        <div className="xsm:hidden sm:hidden flex gap-[50px] mt-[74px]">
                            <img src="./googleplay.png"></img>
                            <img src="./applestore.png"></img>
                        </div>
                    </div>
                </div>
                <div className="xsm:flex xsm:justify-center xsm:items-center xsm:relative xsm:left-[-10%] sm:flex sm:justify-center sm:items-center sm:relative sm:left-[-2%]">
                    <img className="xsm:min-w-[187px] sm:min-w-[217px]" src="./mobile.png"/>
                </div>
            </div>
        </div>
    )
}