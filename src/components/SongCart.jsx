import React from 'react';
import moment from 'moment'
import icons from '../untils/icon';
import { useDispatch } from 'react-redux';
import { getSongId } from '../redux/slice/musicSlice';

const { CiMusicNote1 } = icons;

const SongCart = ({ songData }) => {
    const dispatch = useDispatch();

    return (

        <div
            className='p-[10px] flex justify-between hover:bg-gray-100 border-t cursor-pointer'
            onClick={() => dispatch(getSongId(songData?.encodeId))}
        >
            <div className='flex w-[60%] gap-2 items-center '>
                <span><CiMusicNote1 /></span>
                <img src={songData?.thumbnail} alt="" className='rounded-lg w-10 h-10 ' />
                <div>
                    <p className='text-[14px]'>{songData?.title}</p>
                    <p className='text-[12px] text-gray-500'>{songData?.artistsNames}</p>
                </div>
            </div>
            <div className='text-[12px] text-gray-500 text-start w-[30%]  flex items-center'>
                {songData?.album?.title}
            </div>
            <div className='text-[12px] text-gray-500 w-[10%] flex justify-end items-center'>
                {moment.utc(songData?.duration * 1000).format('mm:ss')}
            </div>
        </div>


    )
}

export default SongCart