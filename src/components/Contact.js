export default function Contact(props){
    return(
    <div className="w-[calc(100vw - 100%)] mt-[40px]">
        <div className="flex items-center justify-center m-auto xsm:w-[100%] sm:w-[90%] w-[89.1673611111111vw] h-[591px] relative">

            <div className="flex xsm:justify-center sm:justify-center items-center rounded-[31.7px] xsm:rounded-[10px] xsm:pl-0 sm:rounded-[10px] sm:pl-0 pl-[6.458333333333333vw] xsm:min-w-[234px] sm:min-w-[234px] w-[100%] h-[335.27px] bg-[#0D3DE5] relative">
                <div className="xsm:flex xsm:flex-col xsm:items-center sm:flex sm:flex-col sm:items-center flex-1">
                    <h2 className="min-w-[234px] w-[25.76388888888889vw] text-[#fff] text-[clamp(24px,2.638888888888889vw,38px)] font-[600]">Have any question about us?</h2>
                    <div className="flex gap-[18px]">
                        <button className="rounded-[5.55px] w-[12.054166666666667vw] min-w-[98.67px] h-[47.56px] bg-white text-[#0D3DE5] text-[clamp(10px,0.9722222222222222vw,14px)] font-[500]">978-371-2224</button>
                        <button className="rounded-[5.55px] w-[12.054166666666667vw] min-w-[98.67px] h-[47.56px] bg-[#0D3DE5] text-[#fff] text-[clamp(10px,0.9722222222222222vw,14px)] font-[500] border-[1px] border-[#fff]">Contact Us</button>
                    </div>
                </div>
                <img className="xsm:w-[48px] sm:w-[48px] absolute xsm:top-[10%] sm:top-[10%] top-[58px] xsm:left-[10%] sm:left-[10%] left-[42.5vw]" src="./circleElement.png"></img>
                <img className="xsm:w-[50px] sm:w-[50px] absolute xsm:top-[15%] sm:top-[15%] top-[290px] xsm:left-[80%] sm:left-[80%] left-[43.541666666666664vw]" src="./circle.png"></img>
            </div>

            <img className="xsm:w-[350px] xsm:h-[250px] sm:w-[350px] sm:h-[250px] w-[601.71px] h-[635.79px] absolute top-0 right-[calc(50%-601.71pxpx)] xsm:mr-0 sm:mr-0 mr-[6.041666666666667vw]" src="/contactimg.png" alt=""/>
        </div>
    </div>
    )
}