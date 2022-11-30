import icons from "./icon";
const { 
    MdLibraryMusic,
    GrHome,
    TbChartArcs3,
    IoIosRadio,
    MdOutlineFeed
} = icons;


export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá Nhân',
        icon: <MdLibraryMusic size={24}/>
    },
    {
        path: '',
        text: 'Khám Phá',
        icon: <GrHome size={24}/>
    },
    {
        path: 'zing-chart',
        text: '#zing-chart',
        icon: <TbChartArcs3 size={24}/>
    },
    {
        path: 'radio',
        text: 'Radio',
        icon: <IoIosRadio size={24}/>
    },
    {
        path: 'flow',
        text: 'Theo Dõi',
        icon: <MdOutlineFeed size={24}/>
    },
]