import React from 'react';
import logo from '../assets/img/logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { sidebarMenu } from '../untils/menu';
import path from '../untils/path'

const notActive = 'flex items-center py-[8px] px-[25px] gap-1 font-semibold text-[13px] hover:text-[#8d22c3]'
const active = 'flex items-center py-[8px] px-[25px] gap-1 font-semibold text-[13px] text-[#8d22c3] bg-[rgba(0,0,0,0.05)] border-l-4 border-[#8d22c3]'

const SidebarLeft = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col bg-[rgba(0,0,0,0.05)] h-full'>
            <div 
            className='w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center cursor-pointer'
            onClick={() => navigate(path.HOME)}
            >
                <img src={logo} alt="logo" className='w-[120px] h-[40px]' />
            </div>
            <div className='flex flex-col text-[13px] text-gray-500'>
               {sidebarMenu.map((item, index) =>(
                <NavLink key={index} to={item.path} className={({isActive}) => isActive ? active : notActive}>
                    <span className='mr-1'>{item.icon}</span>
                    <span className='font-bold'>{item.text}</span>
                </NavLink>
               ))}
            </div>
        </div>
    )
}

export default SidebarLeft
