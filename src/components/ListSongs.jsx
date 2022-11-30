import React from 'react';
import SongCart from './SongCart';
import moment from 'moment'
const ListSongs = ({listsongs}) => {
  
    return (
        <div>
            <div className='flex text-[12px] uppercase font-bold text-gray-500 justify-between items-center p-[10px]'>
                <div className='w-[60%]'>Bài hát</div>
                <div className='w-[30%]'>Album</div>
                <div className='w-[10%] text-right'>Thời gian</div>
            </div>
            <div>
                {listsongs?.items?.map((item, index) => (
                    <SongCart key={index} songData = {item} />
                ))}
            </div>
            <div className='text-[12px] text-gray-500 space-x-2'>
                <span>{listsongs?.total} bài hát</span>
                
                <span> {moment.utc(listsongs?.totalDuration * 1000).format('mm')} phút</span>
            </div>
        </div>
       
    );
};

export default ListSongs;