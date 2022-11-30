import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Header, Slider } from '../../components';
import { getBanner } from '../../redux/slice/homeSlice';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBanner())
    }, [dispatch]) 

    return (
        <div className=' px-[59px]'>
            
            <Slider />
        </div>
    );
};

export default Home;