// import React, {useEffect, useState} from 'react';
// import {Button, Flex, Tooltip} from "antd";
// import SelectButton from "@/components/button";
// import Image from "next/image";
//
//
//
// const Modal = () => {
//     const [close, setClose] = useState(false)
//     const [mode, setMode] = useState(false);
//     const [fullScreen, setFullScreen] = useState(false);
//
//
//     const closeButton = () => {
//         setClose(!close)
//     }
//
//     const changeMode = () => {
//         setMode(!mode)
//     }
//
//     useEffect(() => {
//         const fullscreenChangeHandler = () => {
//             setFullScreen(!!document.fullscreenElement);
//         };
//
//         document.addEventListener('fullscreenchange', fullscreenChangeHandler);
//         document.addEventListener('mozfullscreenchange', fullscreenChangeHandler);
//         document.addEventListener('webkitfullscreenchange', fullscreenChangeHandler);
//         document.addEventListener('msfullscreenchange', fullscreenChangeHandler);
//
//         return () => {
//             document.removeEventListener('fullscreenchange', fullscreenChangeHandler);
//             document.removeEventListener('mozfullscreenchange', fullscreenChangeHandler);
//             document.removeEventListener('webkitfullscreenchange', fullscreenChangeHandler);
//             document.removeEventListener('msfullscreenchange', fullscreenChangeHandler);
//         };
//     }, [setFullScreen]);
//
//
//     const toggleFullscreen = () => {
//         if (!fullScreen) {
//             if (document.documentElement.requestFullscreen) {
//                 document.documentElement.requestFullscreen();
//             } else if (document.documentElement.mozRequestFullScreen) { // Firefox
//                 document.documentElement.mozRequestFullScreen();
//             } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
//                 document.documentElement.webkitRequestFullscreen();
//             } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
//                 document.documentElement.msRequestFullscreen();
//             }
//         } else {
//             if (document.exitFullscreen) {
//                 document.exitFullscreen();
//             } else if (document.mozCancelFullScreen) { // Firefox
//                 document.mozCancelFullScreen();
//             } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
//                 document.webkitExitFullscreen();
//             } else if (document.msExitFullscreen) { // IE/Edge
//                 document.msExitFullscreen();
//             }
//         }
//     };
//
//     const resetSettings = () => {
//         setMode(false);
//         setFullScreen(fullScreen)
//     }
//     return (
//         <div
//             className={`w-[300px] rounded-[8px] ${!mode ? "bg-[#F1F4F7]" : "bg-[#3C424D]"}  backdrop-blur-3xl absolute top-0 right-0 h-screen px-[20px] py-[15px] ${close ? "hidden translate-x-[100px]" : "visible translate-x-0"} duration-700 transition-all shadow-2xl`}>
//
//             <div className={"flex  justify-between items-center"}>
//                 <h1 className={`font-bold text-xl ${!mode ? "text-[#000]" : "text-[#fff]"}`}>Sozlamalar</h1>
//                 <Flex align={"center"} gap={"middle"}>
//                     <Tooltip title={"reset"}>
//                         <Button type="ghost" shape="circle" onClick={resetSettings} className={"hover:rotate-90"}>
//                             <Image src={'/images/reset.png'} alt={"reset"} width={25} height={25}/>
//                         </Button>
//                     </Tooltip>
//
//                     <Tooltip title={"close"}>
//                         <Button type="ghost" shape="circle" onClick={closeButton} className={"hover:scale-105"}>
//                             {mode ? <Image src={"/icons/close.svg"} alt={"sun"} width={25} height={25} /> :
//                                 <Image src={"/icons/close-dark.svg"} alt={"sun"} width={25} height={25} className={"rounded-full "}/>
//                             }
//                         </Button>
//                     </Tooltip>
//                 </Flex>
//
//
//             </div>
//
//             <div className={" h-[1px] w-full bg-[#E4E4E4] my-[20px] "}>
//
//             </div>
//
//             <div>
//                 <h4 className={"text-[#A3AEB7] mb-[30px]"}>Rejim</h4>
//
//                 <Flex justify={"space-between"}>
//                     <Tooltip title={"sun-mode"}>
//                         <SelectButton onClick={changeMode} className={"custom-large-button"}>
//                             {mode ? <Image src={"/icons/sun-dark.svg"} alt={"sun"} width={40} height={40}/> :
//                                 <Image src={"/icons/sun.svg"} alt={"sun"} width={40} height={40}
//                                        className={"rounded-full "}/>
//                             }
//                         </SelectButton>
//                     </Tooltip>
//
//                     <SelectButton background={mode ? "#AABCDB" : "#FFF"} className={"custom-large-button"}
//                                   onClick={changeMode}>
//                         {!mode ? <Image src={"/images/dark.png"} alt={"sun"} width={40} height={40}/> :
//                             <Image src={"/images/dark_blue.png"} alt={"sun"} width={40} height={40}/>}
//                     </SelectButton>
//                 </Flex>
//
//                 {mode ?
//                     <button onClick={toggleFullscreen}
//                             className={`flex justify-center items-center gap-x-2 py-[20px] hover:bg-[#EDF0F3]  px-[30px] rounded-[8px] w-full border-[#E4E7EA] border-[1px] mt-[30px]`}>
//                         <Image src={"/images/full-screen.png"} alt={"full-screen"} width={30} height={30}/>
//
//                         <h4 className={"text-lg text-[#fff]"}>To`liq ekran</h4>
//                     </button>
//                     :
//                     <button onClick={toggleFullscreen}
//                             className={"flex justify-center items-center gap-x-2 py-[20px] px-[30px] rounded-[8px] w-full border-[#E4E7EA] border-[1px] mt-[30px]"}>
//                         <Image src={"/images/full-screen-dark.png"} alt={"full-screen"} width={30} height={30}/>
//
//                         <h4 className={"text-lg text-[#000]"}>To`liq ekran</h4>
//                     </button>
//                 }
//
//
//                 <h4 className={"text-[#A3AEB7] my-[30px]"}>Kontrast</h4>
//
//                 <Flex justify={"space-between"}>
//                     <Tooltip title={"sun-mode"}>
//                         <SelectButton onClick={changeMode} className={"custom-large-button"}>
//                             {mode ? <Image src={"/images/contrast-1.png"} alt={"sun"} width={35} height={35}/> :
//                                 <Image src={"/images/contrast-1.png"} alt={"sun"} width={35} height={35}
//                                        className={"rounded-full "}/>
//                             }
//                         </SelectButton>
//                     </Tooltip>
//
//                     <SelectButton background={mode ? "#AABCDB" : "#FFF"} className={"custom-large-button"}
//                                   onClick={changeMode}>
//                         {!mode ? <Image src={"/images/contrast-2.png"} alt={"sun"} width={35} height={35}/> :
//                             <Image src={"/images/contrast-2.png"} alt={"sun"} width={35} height={35}/>}
//                     </SelectButton>
//                 </Flex>
//             </div>
//         </div>
//     );
// };
//
// export default Modal;