export default function Navbar(props){
    return(
        <nav className="flex justify-center items-center pt-[44px] xsm:pb-[44px] sm:pb-[44px] xsm:bg-[#474C56] sm:bg-[#474C56] gap-[8.2047vw]">
            <div className="xsm:flex-1 sm:flex-1 flex justify-start items-center">
                <img className="ml-[10.20vw]" src="./Logo.png"/>
            </div>

            <div className="xsm:flex sm:flex xsm:flex-1 sm:flex-1 hidden justify-end items-center">
                <img className="mr-[10.20vw]" src="./hamburger.png"/>
            </div>
            <div className="flex-1 xsm:hidden sm:hidden block">
                <ul className="flex justify-end text-[#FFFFFF] text-[18px] gap-[30px] font-[500]">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Service Area</li>
                    <li>Fleet</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="mr-[8%] xsm:hidden sm:hidden block">
                <button className="font-[500] w-[137px] h-[40px] rounded-[10px] bg-[#F0C854] text-[#313131] text-[18px] leading-[27px]">Login</button>
            </div>
        </nav>
    )
}