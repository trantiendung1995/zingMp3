import React from 'react';
import icons from '../untils/icon';

const {BsSearch} = icons
const Search = () => {
    return (
        <div className='flex'>
            <button className='bg-[#e8e8e8] p-2 rounded-l-full'><BsSearch size={20}/></button>
            <input 
            type="text" 
            className='bg-[#e8e8e8] py-[5px] text-[14px] outline-none rounded-r-full w-full' 
            placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'/>
        </div>
    );
};

export default Search;