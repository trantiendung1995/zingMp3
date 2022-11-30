import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Player, SidebarLeft, SidebarRight } from '../../components';
const Public = () => {
    return (
        <div className=' w-full min-h-screen flex flex-col'>
            <div className='w-full h-full flex flex-auto'>
                <div className='w-[240px] flex-none'>
                    <SidebarLeft />
                </div>
                <div className='flex-auto px-[59px] overflow-y-auto h-screen'>
                    <div>
                        <Header />
                    </div>
                    <Outlet />
                </div>
                <div className='w-[329px] flex-none'>
                    <SidebarRight />
                </div>
            </div>
            <div className='fixed bottom-0 left-0 right-0 bg-white'>
                <Player />
            </div>
        </div>
    );
};

export default Public;