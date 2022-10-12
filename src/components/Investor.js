export default function Investor(props){
    return(
    <div id="blog" className="w-[calc(100vw - 100%)] mt-[40px]">
        <div className="flex xsm:flex-col sm:flex-col items-center justify-center m-auto w-[88.88888888888889vw] relative">
            <div className="w-[27.77777777777778vw] min-w-[375px] xsm:h-[700px] sm:h-[700px] h-[720px] bg-[#006CB7] flex justify-end items-center">
                <div className="relative xsm:left-0 sm:left-0 md:left-0 lg:left-0 left-[13%]">
                    <img src="./jack.png"/>
                    <h3 className="mt-[20px] text-[28px] text-[#FAFAFA] leading-[32px] font-[800]">Jack Nitzsche</h3>
                    <p className="mt-[8px] text-[16px] text-[#FAFAFA] font-[400]">Investor Group Coordinator</p>
                    <div className="mt-[70px] self-end place-content-end mr-[25px]">
                        <ul className="xsm:flex sm:flex hidden items-center justify-end gap-[20px] text-[12.02px] font-[400]">
                            <li className="text-[#FFB000]">01</li>
                            <li><div className="w-[100px] h-[3px] bg-[#EBEBEB]"></div></li>
                            <li className="text-[#EBEBEB]">02</li>
                            <li className="text-[#EBEBEB]">03</li>
                            <li className="text-[#EBEBEB]">04</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="flex-1 min-w-[301.54px] w-[27.77777777777778vw] h-full xsm:mt-[40px] sm:mt-[40px]">
                <div className="flex flex-col justify-center min-w-[301.54px] w-[41.80555555555556vw] h-full m-auto">
                    <img className="xsm:hidden sm:hidden block w-[56.05px] h-[33.02px] mb-[43px]" src="./topQuotation.png"/>
                    <h3 className="text-[clamp(24.04px,3.3333333333333335vw,48px)] text-[#FFB000] xsm:leading-[28.1px] sm:leading-[28.1px] leading-[56px] font-[800]">Absolutely wonderful!</h3>
                    <p className="xsm:mt-[10px] sm:mt-[10px] mt-[30px] text-[clamp(12.52px,1.7361111111111112vw,25px)] text-[#656565] xsm:leading-[23px] sm:leading-[23px] leading-[46px] font-[400] space-[10px]">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    <img className="self-end xsm:w-[28.08px] xsm:h-[14.45px] sm:w-[28.08px] sm:h-[14.45px] w-[56.05px] h-[33.02px] mt-[13px]" src="./bottomQuotation.png"/>
                    <div className="mt-[70px] self-end">
                        <ul className="xsm:hidden sm:hidden flex items-center gap-[20px] text-[22px] font-[400]">
                            <li className="text-[#202020]">01</li>
                            <li><div className="w-[100px] h-[3px] bg-[#202020]"></div></li>
                            <li className="text-[#EBEBEB]">02</li>
                            <li className="text-[#EBEBEB]">03</li>
                            <li className="text-[#EBEBEB]">04</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}