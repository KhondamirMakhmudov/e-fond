import React, {useEffect, useState} from 'react';
import Image from "next/image";
import SelectButton from "@/components/button";

const Index = ({modeChange, isDarkMode, scaleColor, scaleChangeColor}) => {
    const [mode, setMode] = useState(false);
    const [close, setClose] = useState(false);
    const [fullScreen, setFullScreen] = useState(false);




    const closeButton = () => {
        setClose(!close);
    }
    const changeMode = () => {
        setMode(!mode)
    }





    useEffect(() => {
        const fullscreenChangeHandler = () => {
            setFullScreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', fullscreenChangeHandler);
        document.addEventListener('mozfullscreenchange', fullscreenChangeHandler);
        document.addEventListener('webkitfullscreenchange', fullscreenChangeHandler);
        document.addEventListener('msfullscreenchange', fullscreenChangeHandler);

        return () => {
            document.removeEventListener('fullscreenchange', fullscreenChangeHandler);
            document.removeEventListener('mozfullscreenchange', fullscreenChangeHandler);
            document.removeEventListener('webkitfullscreenchange', fullscreenChangeHandler);
            document.removeEventListener('msfullscreenchange', fullscreenChangeHandler);
        };
    }, [setFullScreen]);


    const toggleFullscreen = () => {
        if (!fullScreen) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) { // Firefox
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
                document.documentElement.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { // Firefox
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { // IE/Edge
                document.msExitFullscreen();
            }
        }
    };

    const resetSettings = () => {
        setMode(false);
        setFullScreen(fullScreen);
        setMode(isDarkMode)
    }


    return (
        <div className={`rounded-[8px] ${!isDarkMode ? "bg-[#F1F4F7]" : "bg-[#3C424D]"}  ${close ? "opacity-0" : " opacity-100" } backdrop-blur-3xl absolute top-0 right-0 h-screen px-[20px] py-[15px] ${close ? "hidden translate-x-[100px]" : "visible translate-x-0"} duration-700 transition-all shadow-2xl`}>

            <div className={"flex justify-between"}>
                <h1 className={`font-bold text-xl ${!isDarkMode ? "text-[#000]" : "text-[#fff]"}`}>Sozlamalar</h1>
                <div className={"flex justify-center items-center gap-x-3"}>
                    <button onClick={resetSettings}>
                        <Image src={'/images/reset.png'} alt={"reset"} width={25} height={25}/>
                    </button>

                    <button onClick={closeButton}>
                        {isDarkMode ? <Image src={"/icons/close.svg"} alt={"sun"} width={25} height={25} /> :
                            <Image src={"/icons/close-dark.svg"} alt={"sun"} width={25} height={25} className={"rounded-full "}/>
                        }
                    </button>
                </div>
            </div>

            <div className={" h-[1px] w-full bg-[#E4E4E4] my-[20px] "}>

            </div>

            <div>
                <h4 className={"text-[#A3AEB7] mb-[30px]"}>Rejim</h4>

                <div className={"flex justify-between gap-x-2"}>
                    <SelectButton onClick={modeChange}>
                        {isDarkMode ? <Image src={"/icons/sun-dark.svg"} alt={"sun"} width={40} height={40}/> :
                            <Image src={"/icons/sun.svg"} alt={"sun"} width={40} height={40}
                                   className={"rounded-full "}/>
                        }
                    </SelectButton>

                    <SelectButton background={!isDarkMode ? "#AABCDB" : "#FFF"} className={"custom-large-button"}
                                  onClick={modeChange} px={"40px"} py={"25px"}>
                        {!isDarkMode ? <Image src={"/images/dark.png"} alt={"sun"} width={40} height={40}/> :
                            <Image src={"/images/dark_blue.png"} alt={"sun"} width={40} height={40}/>}
                    </SelectButton>

                </div>


                {isDarkMode ?
                    <button onClick={toggleFullscreen}
                            className={`flex justify-center items-center gap-x-2 py-[20px] hover:bg-[#424955] px-[30px] rounded-[8px] w-full border-[#E4E7EA] border-[1px] mt-[30px] transition-all duration-300`}>
                        <Image src={"/images/full-screen.png"} alt={"full-screen"} width={30} height={30}/>

                        <h4 className={"text-lg text-[#fff]"}>To`liq ekran</h4>
                    </button>
                    :
                    <button onClick={toggleFullscreen}
                            className={"flex justify-center items-center gap-x-2 py-[20px] px-[30px] rounded-[8px] hover:bg-[#EEF1F4]  w-full border-[#E4E7EA] border-[1px] mt-[30px]"}>
                        <Image src={"/images/full-screen-dark.png"} alt={"full-screen"} width={30} height={30}/>

                        <h4 className={"text-lg text-[#000]"}>To`liq ekran</h4>
                    </button>
                }

                <h4 className={"text-[#A3AEB7] my-[30px]"}>Kontrast</h4>

                <div className={"flex justify-between gap-x-2"}>
                    <button onClick={() => scaleChangeColor(1)} className={`px-[25px] py-[15px]  border-[1px] rounded-[6px] ${scaleColor === 1 ? "bg-[#EEF2FA] border-[#EEF2FA]" : "bg-transparent border-[#E4E7EA]"} transition-all duration-300`}>
                        <div className={`toggle-scale-circle ${scaleColor === 1 ? 'scaled' : ''} bg-[#078DEE]`}>

                        </div>
                    </button>

                    <button onClick={() => scaleChangeColor(2)} className={`px-[25px] py-[15px]  border-[1px] rounded-[6px] ${scaleColor === 2 ? "bg-[#FFF7EE] border-[#FFF7EE]" : "bg-transparent border-[#E4E7EA]"} transition-all duration-300`}>
                        <div className={`toggle-scale-circle ${scaleColor === 2 ? 'scaled ' : ''} bg-[#FDA92D]`}>

                        </div>
                    </button>

                    <button onClick={() => scaleChangeColor(3)} className={`px-[25px] py-[15px]  border-[1px] rounded-[6px] ${scaleColor === 3 ? "bg-[#EBF7F3] border-[#EBF7F3]" : "bg-transparent border-[#E4E7EA]"} transition-all duration-300`}>
                        <div className={`toggle-scale-circle ${scaleColor === 3 ? 'scaled' : ''} bg-[#00A76F]`}>

                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Index;
