import React from 'react';
import Image from "next/image";

const Template = ({code='', content='', className='', isDarkMode}) => {
    return (
        <div className={`${isDarkMode ? "bg-[#7D89A0]" : "bg-white"} p-[10px] col-span-12 shadow-lg mb-[20px] flex items-start gap-x-[10px] scale-100 hover:scale-x-105 transition-all duration-300 cursor-pointer rounded-[8px]`}>
            <button>
                {isDarkMode ? <Image src={"/icons/close.svg"} alt={"sun"} width={25} height={25}/> :
                    <Image src={"/icons/close-dark.svg"} alt={"sun"} width={25} height={25}
                           className={"rounded-full "}/>
                }
            </button>

            <div className={'flex  flex-col'}>
                <p className={` text-sm font-semibold ${isDarkMode ? "text-[#7DA4FF]" : "text-[#1A4DC2]"}`}>{code}</p>
                <p className={`text-xs ${isDarkMode ? "text-[#fff]" : "text-[#000]"}`}>{content}</p>
            </div>


        </div>
    );
};

export default Template;

//