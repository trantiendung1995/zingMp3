
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as apis from '../../apis';
import moment from 'moment'
import icons from '../../untils/icon';
import { ListSongs } from '../../components';

const { AiOutlineHeart, BsThreeDots } = icons

const Album = () => {

    const { id } = useParams();
    const [listDetailSong, setListDetailSong] = useState();

    useEffect(() => {
        const fetchDetailPlayList = async () => {
            const response = await apis.getDetailsPlaylist(id)
            // console.log(response);
            if (response.status === 200) {
                setListDetailSong(response.data.data)
            }
        }
        fetchDetailPlayList()
    }, [id])
    // console.log(listDetailSong);

    return (
        <div className='pt-10 flex'>
            <div className='w-1/4 flex flex-col items-center gap-1'>
                <div>
                    <img src={listDetailSong?.thumbnailM} alt="thumnail" className='rounded-lg shadow-xl object-contain' />
                </div>
                <p className='text-[20px] font-[500]'>{listDetailSong?.title}</p>
                <p className='text-[12px] text-gray-500'> Cập nhập: <span>{moment.unix(listDetailSong?.contentLastUpdate).format('MM/DD/YYYY')}</span></p>
                <p className='text-[12px] text-gray-500'>{listDetailSong?.artistsNames}</p>
                <p className='text-[12px] text-gray-500'>{listDetailSong?.like} người yêu thích</p>
                <div className='mt-4 flex flex-col items-center space-y-4'>
                    <button className='uppercase text-[14px] py-[9px] px-8 bg-[#8d22c3] rounded-full text-white font-[500]'>Phát tất cả</button>
                    <div className='flex gap-2'>
                        <button className='bg-gray-200 p-2 rounded-full'><AiOutlineHeart size={16}/></button>
                        <button className='bg-gray-200 p-2 rounded-full'><BsThreeDots size={16}/></button>
                    </div>
                </div>
            </div>
            <div className='px-5'>
                <div>
                    <span className='text-[14px] text-gray-400'>Lời tựa </span>
                    <span className='text-[14px]'>{listDetailSong?.description}</span>
                </div>
                <div>
                    <ListSongs listsongs= {listDetailSong?.song}/>
                </div>
            </div>
        </div>
    );
};

export default Album;