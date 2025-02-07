import { CirclePlay } from "lucide-react";

export const Hero = () => {
    return (
        <section className="flex flex-col mt-[96px] items-center min-h-screen text-center px-6">

            {/* Container */}
            <div className="max-w-5xl mx-auto flex flex-col gap-12">

                <div className="flex flex-col gap-1">
                    {/* Feature Badge */}
                    <div className="flex justify-between py-1 pl-1 pr-3 items-center w-[355px] bg-[#f27f7b] bg-opacity-5 text-[#E63F3A] rounded-full border border-[#e9bfbe] mx-auto">
                        <span className="bg-white px-[10px] py-[2px] rounded-2xl text-sm font-normal border border-[#ebacaa]">
                            New Feature
                        </span>
                        <span className="text-sm font-normal">Check out the team dashboard →</span>
                    </div>

                    {/* Heading */}
                    <div className="mt-4 mb-6">
                        <h1 className="text-5xl font-semibold text-gray-900">
                            Beautiful analytics to grow smarter
                        </h1>
                    </div>

                    {/* Subtext */}
                    <div>
                        <p className="text-xl font-light text-center text-gray-600">
                            Powerful, self-serve product and growth analytics to help you convert, engage,
                            <br />
                            and retain more users. Trusted by over 4,000 startups.
                        </p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="md:flex justify-center gap-3">
                    <button className="flex justify-center items-center gap-2 h-[48px] w-full md:w-[114px] border border-gray-400 text-gray-700 text-base mb-3 md:mb-0 font-semibold rounded-full hover:bg-gray-100 transition">
                        <span><CirclePlay className="size-5" /></span>
                        <span>Demo</span>
                    </button>
                    <button className=" flex justify-center items-center bg-red-500 text-white w-full h-[48px] md:w-[99px] font-medium text-base rounded-full hover:bg-red-600 transition">
                        Sign up
                    </button>
                </div>
            </div>

            {/* Image Section */}
            <div className="flex items-center justify-center mt-12 px-8">
                <img
                    src="https://s3-alpha-sig.figma.com/img/77d8/9fa1/a69b18701253a32f7e394acfc433d49b?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZA~SdEl53nLcfsE6LzTwCveIangt5PHstAWH72IU0f6LTAuSVtQ0s3-HH4qzi5ub4TxPEhRSUtyzYCL9aG-yboIGRX4RvsNFW3J3FPzB4J9NSUDMQBEPpyeRIqVsnHj2GgcADC1WfeoIukuYr7-a~3DImldidknaeux8fm0x-qkQPb1nwvrssQ01FX03PrEcIhdhg8av6024vZm--AcoZNdvSkxBLq2D70acpW05t60WoThMDT5BdgehIAqjiugHxGyRFTischUCJsYVYwUXpnHuY~fGZVHkS9XKFj-wmRXbgpGi5nttQM9TLGW0llwwISQWxBjedCeP8~vEajVyuw__"
                    alt="Dashboard Preview"
                    className="w-5/6 border-[8px] border-[#101828] rounded-xl"
                />
            </div>
            

        </section>
    );
};
