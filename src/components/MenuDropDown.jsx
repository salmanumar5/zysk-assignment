import { Book, CirclePlay, Sparkles } from "lucide-react";


const dropDownItem = [
    { title: "Blog", icon: <Book size={20} />, desc: "The latest industry news, updates, and info." },
    { title: "Customer Stories", icon: <CirclePlay size={20} />, desc: "Discover how customers use our product." },
    { title: "Tutorials", icon: <Sparkles size={20} />, desc: "Step-by-step guides and tutorials to get started." },
  ];

const MenuDropDown = () => {
    return (
        <div className="absolute left-0 mt-2 w-[624px] z-60 bg-white shadow-lg border rounded-lg flex">
            {/* Drop-down Items */}
            <div className="grid gap-4">
                {dropDownItem.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-2 hover:bg-gray-100 rounded-md transition">
                        <div className="text-red-500">{item.icon}</div>
                        <div>
                            <h1 className="font-semibold text-gray-800">{item.title}</h1>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Announcement Section */}
            <div className="bg-gray-100 rounded-md">
                <div className="p-4 rounded-md">
                    <img src="https://s3-alpha-sig.figma.com/img/572a/6183/892ca2df6e032e2c3c86f59b0f2caa70?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tyBxthU~6p012Kz6VdmsjS7pasbZekk29HiCFSmmb-XgbdopRTi2qTOj6YWPQghIJ7cFcDk98h2SUTYNx5gxciuTRioi6t~T0b9b5pAgpYKkqhEUcSMeTZaXj7jheuEiHSpR2vv73JgrgVoqluC8mUOxdS6bOs~Z8Or5uYN6RK32W7HkjNO2nHy82PGTG49GzkNv6nde9LcX2P1-EV1Imjx17mi6eypEUw31eXlDUaYBROq4s1q1Aqpghx1FXfLQwwJkYGhOcUOQF6uX7zQyft8K83x0-rk15Y4gwlj24CUsg3pt7fAOJ5LQMsPwOBJ9lcpRu2NIXYCcgfd3tkWPmw__"
                        alt="Update"
                        className="w-full h-40 object-cover bg-white rounded-md mb-3" />
                </div>
                <div className="px-4">
                    <h1 className="text-base font-semibold text-gray-800">Weve just released an update</h1>
                    <p className="text-sm font-light text-gray-500">Check out all the new dashboard views. Pages now load faster.</p>
                </div>
                <div className="flex gap-4 px-4 my-2">
                    <span className="font-medium text-gray-700 cursor-pointer hover:text-gray-900">Dismiss</span>
                    <span className="font-medium text-blue-600 cursor-pointer hover:underline">Changelog</span>
                </div>
            </div>
        </div>
    );
};

export default MenuDropDown;
