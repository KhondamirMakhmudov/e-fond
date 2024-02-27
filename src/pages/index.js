import Brand from "@/components/brand";

import Title from "@/components/title";
import Select from "@/components/select/index";
import Template from "@/components/template";

import React, { useState } from "react";
import Header from "@/components/header";
import Image from "next/image";
import Modal from "@/components/modal";
import Settings from "@/components/settings";
import Link from "next/link";
import CustomSVG from "@/components/customBrand";

export default function Home() {
  const [modal, setModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scaleColor, setScaleColor] = useState(1);

  const scaleChangeColor = (index) => {
    setScaleColor(index);
  };

  const handleModeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  const openModal = () => {
    setModal(!modal);
  };
  return (
    <div
      className={`${isDarkMode ? "!bg-[#3C424D]" : "!bg-white"} relative transition-all duration-700 min-h-[100vh]`}
    >
      <Header scaleColor={scaleColor} />
      <div
        className={`py-5 px-5 md:px-0 ${isDarkMode ? "!bg-[#3C424D] border-b-[#6B7589] border-b-[1px]" : "!bg-white"} transition-all duration-700`}
      >
        <div className={"container mx-auto flex justify-between items-center"}>
          <div className={``}>
            <Link
              className={
                "flex justify-center md:justify-start items-center gap-x-3"
              }
              href={"/"}
            >
              <CustomSVG
                fillColor={
                  scaleColor === 1
                    ? "#28366D"
                    : scaleColor === 2
                      ? "#FDA92D"
                      : scaleColor === 3
                        ? "#00A76F"
                        : "#28366D"
                }
              />
              {/*{!isDarkMode ? (*/}
              {/*  <Image*/}
              {/*    className={"mr-5"}*/}
              {/*    width={52}*/}
              {/*    alt={"brand"}*/}
              {/*    height={56}*/}
              {/*    src={"/icons/brand.svg"}*/}
              {/*  />*/}
              {/*) : (*/}
              {/*  <Image*/}
              {/*    className={"mr-5"}*/}
              {/*    width={52}*/}
              {/*    height={56}*/}
              {/*    src={"/icons/brand-white.svg"}*/}
              {/*    alt={"brand"}*/}
              {/*  />*/}
              {/*)}*/}
              {scaleColor === 1 ? (
                <span
                  className={`font-semibold w-[240px]  text-sm  lg:text-base text-start ${!isDarkMode ? "text-[#28366D]" : "text-[#fff]"}`}
                >
                  Texnik me’yorlash va standartlashtirish ilmiy-tadqiqot
                  instituti
                </span>
              ) : scaleColor === 2 ? (
                <span
                  className={`font-semibold w-[240px]  text-sm  lg:text-base text-start text-[#FDA92D]`}
                >
                  Texnik me’yorlash va standartlashtirish ilmiy-tadqiqot
                  instituti
                </span>
              ) : scaleColor === 3 ? (
                <span
                  className={`font-semibold w-[240px]  text-sm  lg:text-base text-start text-[#00A76F]`}
                >
                  Texnik me’yorlash va standartlashtirish ilmiy-tadqiqot
                  instituti
                </span>
              ) : (
                <span
                  className={`font-semibold w-[240px]  text-sm  lg:text-base text-start ${!isDarkMode ? "text-[#28366D]" : "text-[#fff]"}`}
                >
                  Texnik me’yorlash va standartlashtirish ilmiy-tadqiqot
                  instituti
                </span>
              )}
            </Link>
          </div>

          <Image
            src={"/icons/settings.svg"}
            alt={"settings"}
            width={30}
            height={30}
            className={`settings cursor-pointer`}
            onClick={openModal}
          />
        </div>
      </div>
      <section
        className={"grid grid-cols-12 gap-x-[30px] container mx-auto pt-[50px]"}
      >
        {scaleColor === 1 ? (
          <div className={"col-span-12 px-[20px] md:px-0"}>
            <h1
              className={`md:text-[20px] lg:text-[32px]  text-xl leading-normal font-bold  mb-[30px] ${isDarkMode ? "text-[#fff]" : "text-[#001A57]"}`}
            >
              Elektron standartlar fondi
            </h1>
          </div>
        ) : scaleColor === 2 ? (
          <div className={"col-span-12 px-[20px] md:px-0"}>
            <h1
              className={`md:text-[20px] lg:text-[32px]  text-xl leading-normal font-bold  mb-[30px] text-[#FDA92D]`}
            >
              Elektron standartlar fondi
            </h1>
          </div>
        ) : scaleColor === 3 ? (
          <div className={"col-span-12 px-[20px] md:px-0"}>
            <h1
              className={`md:text-[20px] lg:text-[32px]  text-xl leading-normal font-bold  mb-[30px] text-[#00A76F]`}
            >
              Elektron standartlar fondi
            </h1>
          </div>
        ) : (
          <div className={"col-span-12 px-[20px] md:px-0"}>
            <h1
              className={`md:text-[20px] lg:text-[32px]  text-xl leading-normal font-bold  mb-[30px] ${isDarkMode ? "text-[#fff]" : "text-[#001A57]"}`}
            >
              Elektron standartlar fondi
            </h1>
          </div>
        )}
      </section>

      <div
        className={`${scaleColor === 1 ? "bg-[#546CA6] " : scaleColor === 2 ? "bg-[#FDA92D]" : scaleColor === 3 ? "bg-[#00A76F]" : "bg-[#546CA6]"} bg-no-repeat bg-cover  pt-[30px] pb-[20px]  mb-[30px] px-[20px] md:px-0`}
      >
        <div className={"grid grid-cols-12 gap-x-[30px] container mx-auto"}>
          <form
            className={
              "col-span-12 flex md:gap-x-[30px] gap-y-[20px] flex-wrap-reverse md:flex-nowrap "
            }
          >
            <input
              type={"text"}
              placeholder={"Hujjat raqami"}
              className={
                "max-w-[270px] w-full text-sm py-[15px] px-[20px] placeholder-[#001A57] outline-0 rounded-[5px]"
              }
            />
            <input
              type={"text"}
              placeholder={"Kalit so’z"}
              className={
                "w-full text-sm py-[15px] px-[20px] placeholder-[#001A57] outline-0 rounded-[5px]"
              }
            />
          </form>

          <form
            className={
              "col-span-12 flex flex-col md:flex-row  gap-x-[30px] mb-[20px]"
            }
          >
            <Select placeholder={"Hujjat toifasini tanlang"} />
            <Select placeholder={"Shartli belgisi"} />
            <Select placeholder={"Hujjat tasdiqlangan yili"} />
          </form>

          {/*<div className={"col-span-12 "}>*/}
          {/*  <h4 className={"font-semibold text-sm text-[#fff] mb-[14px]"}>*/}
          {/*    Holati*/}
          {/*  </h4>*/}
          {/*</div>*/}

          {/*<div*/}
          {/*  className={*/}
          {/*    "col-span-12 flex flex-col md:flex-row justify-between md:items-center "*/}
          {/*  }*/}
          {/*>*/}
          {/*  <div className={"flex flex-col md:flex-row md:gap-x-[20px] "}>*/}
          {/*    <CheckboxTemplate>Amalda</CheckboxTemplate>*/}

          {/*    <CheckboxTemplate>Amalda emas</CheckboxTemplate>*/}

          {/*    <CheckboxTemplate>Muddati o‘tgan</CheckboxTemplate>*/}

          {/*    <CheckboxTemplate>Reestrdan chiqarilgan</CheckboxTemplate>*/}
          {/*  </div>*/}

          {/*  <p className={"italic text-xs font-medium text-[#fff] mt-[20px]"}>*/}
          {/*    *Tizimdagi ma’lumotlar O‘zStandart reestridan olingan*/}
          {/*  </p>*/}
          {/*</div>*/}
        </div>
      </div>

      <div className={"grid grid-cols-12 container mx-auto px-[20px] md:px-0"}>
        <Template
          isDarkMode={isDarkMode}
          code={"O‘zDSt 652:2011"}
          scaleChangeColor={scaleChangeColor}
          scaleColor={scaleColor}
          content={
            "Комбикорма, сырье. Методь определения металломагнитной примеси"
          }
        />

        <Template
          isDarkMode={isDarkMode}
          code={"O‘zDSt EN 13850:2021 (EN 13850:2020, IDT)"}
          scaleChangeColor={scaleChangeColor}
          scaleColor={scaleColor}
          content={
            "Сосудм под давлением без огня - Часть 6: Требования к проектированию и изготовлению сосудов под давлением и деталей под давлением, изготовленных из чугуна с шаровиднмм графитом. Unfired pressure vessels - Part 6: Requirements for the design and fabrication of pressure vessels and pressure parts constructed from spheroidal graphite..."
          }
        />

        <Template
          isDarkMode={isDarkMode}
          code={"O‘zDSt 653:2011"}
          scaleChangeColor={scaleChangeColor}
          scaleColor={scaleColor}
          content={
            "Сосуды под давлением без огня - Часть 6: Требования к проектированию и изготовлению сосудов под давлением и деталей под давлением, изготовленных из чугуна с шаровиднмм графитом. "
          }
        />

        <Template
          isDarkMode={isDarkMode}
          code={"O‘zDSt 652:2011"}
          scaleChangeColor={scaleChangeColor}
          scaleColor={scaleColor}
          content={
            "Комбикорма, сырье. Методь определения металломагнитной примеси"
          }
        />

        <Template
          isDarkMode={isDarkMode}
          code={"O‘zDSt 652:2011"}
          scaleChangeColor={scaleChangeColor}
          scaleColor={scaleColor}
          content={
            "Комбикорма, сырье. Методь определения металломагнитной примеси"
          }
        />

        <Template
          isDarkMode={isDarkMode}
          code={"O‘zDSt EN 13850:2021 (EN 13850:2020, IDT)"}
          scaleChangeColor={scaleChangeColor}
          scaleColor={scaleColor}
          content={
            "Сосудм под давлением без огня - Часть 6: Требования к проектированию и изготовлению сосудов под давлением и деталей под давлением, изготовленных из чугуна с шаровиднмм графитом. Unfired pressure vessels - Part 6: Requirements for the design and fabrication of pressure vessels and pressure parts constructed from spheroidal graphite..."
          }
        />

        <Template
          isDarkMode={isDarkMode}
          code={"O‘zDSt 653:2011"}
          scaleChangeColor={scaleChangeColor}
          scaleColor={scaleColor}
          content={
            "Сосуды под давлением без огня - Часть 6: Требования к проектированию и изготовлению сосудов под давлением и деталей под давлением, изготовленных из чугуна с шаровиднмм графитом. "
          }
        />

        <Template
          isDarkMode={isDarkMode}
          code={"O‘zDSt 652:2011"}
          scaleChangeColor={scaleChangeColor}
          scaleColor={scaleColor}
          content={
            "Комбикорма, сырье. Методь определения металломагнитной примеси"
          }
        />

        <Template
          isDarkMode={isDarkMode}
          code={"O‘zDSt 652:2011"}
          scaleChangeColor={scaleChangeColor}
          scaleColor={scaleColor}
          content={
            "Комбикорма, сырье. Методь определения металломагнитной примеси"
          }
        />

        <Template
          isDarkMode={isDarkMode}
          code={"O‘zDSt 652:2011"}
          scaleChangeColor={scaleChangeColor}
          scaleColor={scaleColor}
          content={
            "Комбикорма, сырье. Методь определения металломагнитной примеси"
          }
        />

        <Template
          isDarkMode={isDarkMode}
          code={"O‘zDSt 653:2011"}
          scaleChangeColor={scaleChangeColor}
          scaleColor={scaleColor}
          content={
            "Сосуды под давлением без огня - Часть 6: Требования к проектированию и изготовлению сосудов под давлением и деталей под давлением, изготовленных из чугуна с шаровиднмм графитом. "
          }
        />

        {!modal && (
          <div
            className={`${modal ? "translate-x-[100px]" : "translate-x-0"} w-[300px] transition-all duration-700  fixed top-0 right-0 min-h-[100vh]`}
          >
            <Settings
              modeChange={handleModeChange}
              isDarkMode={isDarkMode}
              scaleChangeColor={scaleChangeColor}
              scaleColor={scaleColor}
            />
          </div>
        )}
      </div>
    </div>
  );
}
