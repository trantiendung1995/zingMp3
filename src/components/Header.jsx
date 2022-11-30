import React from 'react';
import icons from '../untils/icon';
import Search from './Search';

const { BsArrowLeft, BsArrowRight } = icons

const Header = () => {
    return (
        <div className='h-[70px] flex items-center justify-between'>
            <div className='flex items-center space-x-3 w-full text-gray-500' >
                <div className='flex space-x-3'>
                    <span><BsArrowLeft size={24} /></span>
                    <span><BsArrowRight size={24} /></span>
                </div>
                <div className='w-[440px]'>
                    <Search />
                </div>
            </div>
            <div>login</div>
        </div>
    )
}

export default Header
