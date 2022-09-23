export default function Services(props){
    return(
        <div className="w-[calc(100vw - 100%)] mt-[50px]">
            <div className="m-auto xsm:min-w-[336px] xsm:max-w-[336px] sm:max-w-[336px] w-[87.13541666666667vw] min-h-[627px]">
                <p className="text-[clamp(12px,1.1111111111111112vw,16px)] font-[400] text-center">services & advantages</p>
                <h2 className="mt-[10px] text-[clamp(18px,2.9166666666666665vw,42px)] text-[#FFB000] font-[700] uppercase text-center">Service we provide</h2>

                <div className="flex xsm:flex-col sm:flex-col justify-between xsm:mt-[25px] mt-[53px]">

                    <div className="xsm:hidden sm:hidden flex flex-col justify-center items-center self-center w-[14px] h-[227.01px]">
                        <div className="bg-[#D9D9D9] h-[160px] w-[2px]">
                            <div className="w-[100%] h-[50%] bg-[#006CB7]"></div>
                        </div>
                        <p className="mt-[40px] rotate-[-90deg] text-[9px] text-[#656565]">02/06</p>
                    </div>

                    <div className="min-w-[336px] xsm:mt-[17px] sm:mt-[17px]">
                        <div className="relative min-w-[336px]">
                            <img src="./service1.png"/>
                            <p className="flex justify-center items-center absolute w-[58px] h-[60px] bg-[#FFB000] rounded-bl-[10px] bottom-0 text-[23px] text-[#fff] font-[500]">01</p>
                        </div>
                        <h3 className="uppercase text-[clamp(16px,1.6666666666666667vw,24px)] text-[#010101] font-[500] text-center mt-[15px]">Intercity rides</h3>
                    </div>

                    <div className="min-w-[336px] xsm:mt-[17px] sm:mt-[17px]">
                        <div className="relative min-w-[336px] h-[425px] rounded-[10px] bg-[#006CB7]">
                            <div className="h-full flex flex-col justify-center items-center">
                                <h3 className="text-[14px] text-[#fff] font-[600] uppercase">chauffeur hailing</h3>
                                <div className="mt-[4px] min-w-[84px] min-h-[1px] bg-[#fff]"></div>
                                <p className="mt-[23px] w-[236px] text-[14px] leading-[25px] font-[300] text-center text-[#fff]">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                            </div>
                            <p className="flex justify-center items-center absolute leading-none text-[76px] text-[#fff] font-[600] top-0">02</p>
                        </div>
                        <h3 className="uppercase text-[clamp(16px,1.6666666666666667vw,24px)] text-[#010101] font-[500] text-center mt-[15px]">chauffeur hailing</h3>
                    </div>

                    <div className="min-w-[336px] xsm:mt-[17px] sm:mt-[17px]">
                        <div className="relative min-w-[336px]">
                            <img src="./service3.png"/>
                            <p className="flex justify-center items-center absolute w-[58px] h-[60px] bg-[#FFB000] rounded-bl-[10px] bottom-0 text-[23px] text-[#fff] font-[500]">03</p>
                        </div>
                        <h3 className="uppercase text-[clamp(16px,1.6666666666666667vw,24px)] text-[#010101] font-[500] text-center mt-[15px]">Airport transfers</h3>
                    </div>

                    <div className="xsm:hidden sm:hidden flex flex-col gap-[10px] justify-end mb-[80px]">
                        <img src="./arrowtop.png"/>
                        <img src="./arrowdown.png"/>
                    </div>

                </div>
            </div>
        </div>
    )
}