import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import * as apis from '../apis';
import icons from '../untils/icon';
import moment from 'moment';

const {
    AiOutlineHeart,
    BsThreeDots,
    IoIosShuffle,
    RxTrackPrevious,
    RxTrackNext,
    VscPlayCircle,
    CiRepeat,
    IoIosPause
} = icons
var run
const Player = () => {
    const audio = useRef(new Audio())
    const [isPlay, setIsPlay] = useState(false)
    const songId = useSelector(state => state.music.curSongId);
    const [inforSong, setInforSong] = useState();
    const [song, setSong] = useState();
    const [timePlaying, setTinePlaying] = useState(0);
    const loadingMucsic = useRef();
    const addresLoadingMucsic = useRef();

    useEffect(() => {
        const getInforSong = async () => {

            const [res1, res2] = await Promise.all([
                apis.getInforSong(songId),
                apis.getSong(songId)
            ])

            if (res1.status === 200) {
                setInforSong(res1.data.data)
            }
            if (res2.status === 200) {
                setSong(res2?.data?.data['128'])
                setIsPlay(true)
            }
        }
        getInforSong();

    }, [songId]);

    useEffect(() => {
        if (song) {
            audio.current.src = song;
            audio.current.play();
        }
    }, [song])


    const handlePlaying = () => {
        if (isPlay) {
            audio.current.pause()
            setIsPlay(prev => !prev)
        } else {
            audio.current.play()
            setIsPlay(prev => !prev)
        }
    }

    useEffect(() => {
        if (isPlay) {
            run = setInterval(() => {
                let percent = Math.round(audio.current.currentTime / inforSong?.duration * 10000) / 100;
                loadingMucsic.current.style.cssText = `right: ${100 - percent}%`;
                setTinePlaying(Math.round(audio.current.currentTime))
            }, 50);
        } else {
            run && clearInterval(run)
        }
    }, [isPlay]);

    const hanldeProgessBar = (e) => {
        const addresLoading = addresLoadingMucsic.current.getBoundingClientRect();
        const persent = Math.round((e.clientX - addresLoading.left) / addresLoading.width * 10000) / 100
        audio.current.currentTime = persent * inforSong?.duration / 100
        setTinePlaying(Math.round(persent * inforSong?.duration / 100))
    }

    return (
        <div className='flex justify-between text-center px-5 items-center flex-none h-[90px] border-t shadow-lg'>
            <div className='w-[30%] flex-auto flex items-center gap-4'>
                <div>
                    <img src={inforSong?.thumbnail} alt="thumnal" className='w-[64px] rounded-md' />
                </div>
                <div className='flex flex-col justify-center'>
                    <button className='text-[14px] font-semibold'>{inforSong?.title}</button>
                    <button className='text-[12px] text-gray-500'>{inforSong?.artistsNames}</button>
                </div>
                <div className='flex items-center gap-3 px-2'>
                    <button title='Thêm vào thư viện'><AiOutlineHeart /></button>
                    <button title='Xem thêm'><BsThreeDots /></button>
                </div>
            </div>
            <div className='w-[40%] flex-auto flex flex-col justify-center '>
                <div className='flex justify-center items-center gap-8 '>
                    <button><IoIosShuffle size={22} /></button>
                    <button><RxTrackPrevious size={22} /></button>
                    <button className='hover:text-[#8d22c3]' onClick={handlePlaying}>
                        {!isPlay ? (<VscPlayCircle size={36} />) : (<IoIosPause size={36} />)}
                    </button>
                    <button><RxTrackNext size={22} /></button>
                    <button><CiRepeat size={22} /></button>
                </div>
                <div className='flex'>
                    <div className='text-[12px] text-gray-500'>
                        {moment.utc(timePlaying * 1000).format('mm:ss')}
                    </div>
                    <div
                        className='w-[90%] relative m-auto h-1 bg-gray-300 rounded-full cursor-pointer'
                        ref={addresLoadingMucsic}
                        onClick={hanldeProgessBar}
                    >
                        <div ref={loadingMucsic} className='h-1 absolute top-0 left-0 bg-[#8d22c3] rounded-full hover:h-2 hover:top-[-50%] cursor-pointer'></div>
                    </div>
                    <div className='text-[12px] text-gray-500'>
                        {moment.utc(inforSong?.duration * 1000).format('mm:ss')}
                    </div>
                </div>
            </div>
            <div className='w-[30%] flex-auto'>
                Albuml
            </div>
        </div>
    );
};

export default Player;