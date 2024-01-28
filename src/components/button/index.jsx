import React from 'react';

const SelectButton = ({children, onClick, background, py, px}) => {
    return (
        <div onClick={onClick} className={`py-[25px] px-[40px] rounded-[8px] cursor-pointer bg-[${background}]  border-[#E4E7EA] border-[1px]`}>
            {children}
        </div>
    );
};

export default SelectButton;