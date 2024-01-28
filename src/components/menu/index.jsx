import React, {useState} from 'react';
import Brand from "@/components/brand";
import Image from "next/image";

const Menu = ({ openModal }) => {


    return (
        <div className={"bg-[#fff] py-5 px-5 md:px-0"}>
            <div className={"container mx-auto flex justify-between items-center"}>
                <Brand/>

                <Image src={"/icons/settings.svg"} alt={"settings"} width={30} height={30} className={"settings cursor-pointer"} />

            </div>



        </div>
    );
};

export default Menu;