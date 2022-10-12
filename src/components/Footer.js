export default function Footer(props){
    return(
        <div className="w-[calc(100vw - 100%)] mt-[40px] bg-[#1A0D08]">
        <div className="flex flex-col items-center m-auto w-[91.94444444444444vw] relative">
            <div className="xsm:mt-[30px] mt-[48px] flex flex-col items-center">
                <h2 className="w-[48.263888888888886vw] min-w-[263px] text-center text-[clamp(18px,2.7777777777777777vw,40px)] font-[600] text-[#fff] xsm:leading-[21.4px] leading-[50px]">Traveling to Gatwick airport from your <span className="font-[700] text-[#F5B100]">Location ?</span></h2>
                <p className="mt-[24px] min-w-[316px] w-[58.888888888888886vw] text-center text-[#656565] text-[clamp(8px,1.1111111111111112vw,16px)] font-[400] leading-[28px] xsm:leading-[12px]">If you need a taxi for Heathrow airport from towns like Sevenoaks, Dorking, Godstone, Reigate, Redhill just give us a call. To reach Gatwick from areas like West Malling, Tonbridge contact us for a hassle free luxury journey. We also have our taxi service and Getwick minibus hire in Maidstone, Canterbury and Ashford.</p>
                <button className="mt-[38px] min-w-[104.71px] w-[11.458333333333334vw] h-[52px] rounded-[104px] bg-[#FFB000] text-[clamp(12,1.25vwf,18px)] text-[#fff] font-[500]">Book NOW</button>
            </div>

            <div className="mt-[48px] flex flex-wrap items-center justify-between w-full">
                <ul className="xsm:flex-1 xsm:flex xsm:flex-col xsm:items-center xsm:place-content-around text-[16px] text-[rgba(255,255,255,0.6)] leading-[28px]">
                    <li className="flex justify-center"><img src="./Logo.png"/></li>
                    <li className="xsm:mt-[38px] xsm:mb-[30px] w-[241px] xsm:w-[286px] text-center">Book a Gatwick taxi and save time, effort and resources!!</li>
                </ul>
                <div className="flex flex-1 self-start justify-around xsm:w-[100%] sm:w-[100%]">
                    <ul className="flex flex-col gap-[16px] text-[16px] text-[rgba(255,255,255,0.6)] leading-[28px] self-start">
                        <li className="text-[rgba(255,255,255,1)] font-[600] mb-[8px]">Buy with us</li>
                        <li>FAQ’s</li>
                        <li>About us</li>
                        <li>Reviews</li>
                    </ul>

                    <ul className="flex flex-col gap-[16px] text-[16px] text-[rgba(255,255,255,0.6)] leading-[28px] self-start">
                        <li className="text-[rgba(255,255,255,1)] font-[600] mb-[8px]">Categories</li>
                        <li>School Transport </li>
                        <li>Car Daily</li>
                        <li>Electric Car</li>
                        <li>Modern Car</li>
                    </ul>

                    <ul className="flex flex-col gap-[16px] text-[16px] text-[rgba(255,255,255,0.6)] leading-[28px] self-start">
                        <li className="text-[rgba(255,255,255,1)] font-[600] mb-[8px]">Contact us</li>
                        <li>Contact us</li>
                        <li>Cookies Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                <ul className="xsm:mt-[30px] xsm:flex-1 flex flex-col gap-[16px] text-[16px] text-[rgba(255,255,255,1)] leading-[28px] self-start">
                    <li className="text-[rgba(255,255,255,1)] font-[600] xsm:mb-0 mb-[8px]">Get in toch</li>
                    <li className="w-[24.51388888888889vw] min-w-[313px]"><span className="font-[700]">Office:</span> Concord Airport Taxi & Car Services 300 Baker Avenue, Concord, MA 01742</li>
                    <li><span className="font-[700]">Phone:</span> 978-371-2224</li>
                    <li><span className="font-[700]">Email:</span> info@concordairporttaxi.com</li>
                    <li className="flex-1 flex xsm:justify-center gap-[24px] xsm:mt-0 mt-[20px]">
                        <img src="./facebook.png"/>
                        <img src="./twitter.png"/>
                        <img src="./instagram.png"/>
                    </li>
                </ul>

                
            </div>
            <p className="mb-[30px] text-[#fff] text-[12px] font-[400] leading-[26px]">Copyright © 2022 <span className="font-[700]">jewelcars</span>. All Rights Reserved</p>

        </div>
    </div>
    )
}