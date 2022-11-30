import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getSongId } from '../redux/slice/musicSlice';

const Slider = () => {
    const slider = useSelector(state => state.gethome?.slider?.items);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
        const sliderItemList = document.querySelectorAll('.slider_item');
        let min = 0;
        let max = 2;
        const runSlider = setInterval(() => {
            const getRun = (start, end, number) => {
                const limit = start > end ? number : end
                const output = [];
                for (let i = start; i <= limit; i++) {
                    output.push(i)
                }
                if (start > end) {
                    for (let i = 0; i <= end; i++) {
                        output.push(i)
                    }
                }
                return output
            }
            const list = getRun(min, max, sliderItemList.length - 1)
            for (let i = 0; i < sliderItemList?.length; i++) {
                sliderItemList[i]?.classList.remove('animate-slide-right', 'order-last', 'z-20')
                sliderItemList[i]?.classList.remove('animate-slide-left', 'order-first', 'z-10')
                sliderItemList[i]?.classList.remove('animate-slide-left2', 'order-2', 'z-20')
                if (list.some(item => item === i)) {
                    sliderItemList[i].style.cssText = `display: block`
                } else {
                    sliderItemList[i].style.cssText = `display: none`
                }
            }

            list.forEach(item => {
                if (item === max) {
                    sliderItemList[item]?.classList.add('animate-slide-right', 'order-last', 'z-20')
                } else if (item === min) {
                    sliderItemList[item]?.classList.add('animate-slide-left', 'order-first', 'z-10')
                } else {
                    sliderItemList[item]?.classList.add('animate-slide-left2', 'order-2', 'z-20')
                }
            })
            if (min === sliderItemList.length - 1) {
                min = 0
            } else {
                min++
            }
            if (max === sliderItemList.length - 1) {
                max = 0
            } else {
                max++
            }

        }, 4000);
        return () => {
            runSlider && clearInterval(runSlider)
        }
    }, [])

    const handleCLickBanner = (item) => {
        if(item?.type === 1) {
            dispatch(getSongId(item.encodeId))
        }else if(item?.type === 4) {
            const pathAlbum = item?.link?.split('.')[0]
            navigate(pathAlbum)
        }
    }
  
    return (
        <>
            <div className='flex gap-6 w-full overflow-hidden pt-[32px]'>
                {slider?.map((item, index) => (
                    <img key={index}
                        src={item.banner}
                        alt="slider"
                        className={`slider_item cursor-pointer flex-1 object-contain w-[30%] rounded-[14px] ${index <= 2 ? 'block' : 'hidden'}`} 
                        onClick={ () => handleCLickBanner(item)}
                        />
                ))}
            </div>

        </>
    )
}

export default Slider