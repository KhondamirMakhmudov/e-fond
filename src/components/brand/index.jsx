import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";


const Brand = ({ active = 0, isDarkMode }) => {


  return (
    <div className={``}>
      <Link
        className={"flex justify-center md:justify-start items-center"}
        href={"/"}
      >
        {!isDarkMode ? (
          <Image
            className={"mr-5"}
            width={52}
            alt={"brand"}
            height={56}
            src={"/icons/brand.svg"}
          />
        ) : (
          <Image
            className={"mr-5"}
            width={52}
            height={56}
            src={"/icons/brand-white.svg"}
            alt={"brand"}
          />
        )}
        <span
          className={
            `font-semibold w-[240px]  text-sm  lg:text-base text-start ${!isDarkMode ? "text-[#28366D]" : "text-[#fff]"}`
          }
        >

            Texnik me’yorlash va standartlashtirish ilmiy-tadqiqot instituti

        </span>
      </Link>
    </div>
  );
};

export default Brand;
