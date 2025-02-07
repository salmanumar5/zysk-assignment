import { useState } from "react";

const faqs = [
    {
        question: "Is there a free trial available?",
        answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
        question: "Can I change my plan later?",
        answer: "Yes, you can upgrade or downgrade your plan at any time."
    },
    {
        question: "What is your cancellation policy?",
        answer: "You can cancel your subscription at any time. There are no cancellation fees."
    },
    {
        question: "Can other info be added to an invoice?",
        answer: "Yes, you can add custom information to your invoices, such as purchase orders or additional notes."
    },
    {
        question: "How does billing work?",
        answer: "Billing is done on a monthly or annual basis, depending on the plan you choose. You will be charged automatically at the end of each billing cycle."
    },
    {
        question: "How do I change my account email?",
        answer: "You can change your account email from the account settings page in your dashboard."
    }
];
const Faq = () => {
    const [openIndices, setOpenIndices] = useState([]);

    

    const toggleAnswer = (index) => {
        setOpenIndices(openIndices.includes(index) ? openIndices.filter(i => i !== index) : [...openIndices, index]);
    };

    return (
        <div className="mx-auto py-16 px-6 sm:px-12 md:px-20 lg:px-28 max-w-[1440px]">
            <div className="flex flex-col items-center gap-12 border-b">
                {/* Title Section */}
                <div className="flex flex-col gap-6 text-center">
                    <h1 className="text-3xl sm:text-4xl font-semibold">Frequently asked questions</h1>
                    <p className="text-lg sm:text-xl font-light tracking-wide text-gray-600">
                        Everything you need to know about the pricing and billing.
                    </p>
                </div>

                {/* FAQ Section */}
                <div className="w-full max-w-3xl">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200 py-6">
                            <button onClick={() => toggleAnswer(index)} className="w-full flex justify-between items-center text-left focus:outline-none">
                                <span className="text-lg font-medium">{faq.question}</span>
                                <span className="text-2xl">{openIndices.includes(index) ? '-' : '+'}</span>
                            </button>
                            {openIndices.includes(index) && (
                                <div className="mt-2 text-gray-600 tracking-wide font-light">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Still Have a Question Section */}
                <div className="w-full bg-[#F9FAFB] rounded-2xl py-10 px-6 sm:px-12 text-center">
                    {/* Images */}
                    <div className="flex items-center justify-center gap-1 relative">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-300">
                            <img src="https://s3-alpha-sig.figma.com/img/a48e/1aea/866434aa73c311701a963ddc75997754?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r7-NZU2B2VJrh5k~iZJQGZLPJbwjB3SD~Fb17VlfmUN4l~zFirvCjWVhlT7~5fP011~YbjQEGq9NYFR1ctcJE4gj~S0IGvl1ZnD-ez3SKCWkpsaiaDlFrvBCFu~GbD2tvxYKWCBYmJR1m1yuDxXm9yuB~48GHSZxrwqJTdgmwAvw0ZsuDz2to8kkacZceCFj16nE4JUFUUdt5nhNj4DelvD8yQRyhQ6dSrKvmSKvthGirVVHQ8LJO0hJSt1LKu6nw7HWH3xGifo0tbgbmvQbaYcWBcHCeGvACxX1AMOjazOD7IzIOOGtdDTDy7g32IX6mCEQW8ulNQYHPsSEw6bocQ__" alt="Left Person" className="w-full h-full object-cover" />
                        </div>

                        <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-300 z-10 -mx-6 border-2 border-[#F9FAFB]">
                            <img src="https://s3-alpha-sig.figma.com/img/27a8/497d/5cb712a39a846f3d49443b8283852dca?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jjIKbEW5PkHa-AmvjYbnvCbgrnx9bTMcIkDokbGU0SgnBlj3R-Q649VAMUihPCjICHeWuzWiE4FkrZ3bTonoUDjVpXYbPNqH06n3VJUdTOAMTbLBCYXAcfvs3kUVvjcBV5UsPpa7lVO7PiL0sLeoPbX~t5av6ZTC2NeJam3NaRydNDOxgBnVBmS534A-h0BFV0kaMCsdZ1BnS~udq6QVbcpzM5CWTsWoAXFyuljyzMY9QhMEilwltDtG6Th7LbuDKEChQMxE~V3YeBV3cnejY5edfARmpnuDRDxUEINTkbqhJlv~yoAW8tb-HBSrmk6EnQ5~djVczoxMHTTGqO2phw__" alt="Middle Person" className="w-full h-full object-cover" />
                        </div>

                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-300">
                            <img src="https://s3-alpha-sig.figma.com/img/7ab6/3dcb/71188af6aa830e9296f62671157262d1?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ra1Xbdm-fpPJGHpWFU-7Q4CQdVyrLxR7DMvzHZozVdm76L1CQ4GvddNnqW8~2NxblwlFgRGDH~Zn5VOPt4GE8MUxgyW1b3fkexCAMXEd9SrzPLz6c7UJn1Th04FuGWeqIyjLpT7RUztOF0GH3-aL8YpLh3lqiBMpSmZ2VXB~NjQd8pglUHwryI6HoAa6ghh6mMle3w67E0KhD3kBWy5XJwCbvYfpd6adoSPWfkIE3~Tn3DKe~5GcU9WI2wYoPkFUcorXmOsNYbrDxAcwEJCIz69D8mFyI6FyhumJ1LbeY-Xaf1b0fJNZBNmeLEpn1ZKb1FOib2bDIz712xSu9MzIkA__" alt="Right Person" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-2 items-center mt-4">
                        <h1 className="text-lg sm:text-xl font-semibold">Still have questions?</h1>
                        <p className="text-base sm:text-lg font-light">Cant find the answer youre looking for? Please chat with our friendly team.</p>
                    </div>

                    {/* Button */}
                    <button className="mt-4 text-lg font-semibold bg-[#E63F3A] text-white py-3 px-6 rounded-xl">
                        Get in Touch
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Faq;
