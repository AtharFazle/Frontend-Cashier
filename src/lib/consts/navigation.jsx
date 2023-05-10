import {
    HiOutlineChartBar,
    HiOutlineCalculator,
    HiOutlineClipboardList,
    HiFolder,
    HiOutlineCog,
    HiArchive,
    HiOutlineUserGroup,
    HiPrinter,
    HiTruck,
    HiOutlineUsers,
    HiLocationMarker,
    HiDatabase,
    HiCalculator,

} from 'react-icons/hi'

import {BsCalendar2Event} from 'react-icons/bs'
import {ImStatsBars} from 'react-icons/im'




export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key:'dashboard',
        label:'Dashboard',
        path:'/',
        icon:<HiOutlineChartBar/>
    },
    {
        key:'transactions',
        label:'Transactions',
        path:'/Transaksi',
        icon:<HiOutlineCalculator/>
    },
    {
        key:'laporan',
        label:'Laporan',
        path:'/Laporan',
        icon:<HiOutlineClipboardList/>
    },
    {
        key:'folder',
        label:'Barang',
        path:'/Barang',
        icon:<HiFolder/>
    },
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS =[
    {
        key:'settings',
        label:'Settings',
        path:'/settings',
        icon:<HiOutlineCog/>
    },
    {
        key:'support',
        label:'Help & Support',
        path:'/support',
        icon:<HiOutlineCog/>
    },
]

export const DASHBOARD_QUICK_ACCESS_LINKS =[
    {
        key:'reports',
        label:'Reports',
        path:'/Laporan',
        icon:<ImStatsBars/>
    },
    {
        key:'employees',
        label:'Employees',
        path:'/Employees',
        icon:<HiOutlineUserGroup/>
    },
    {
        key:'mitra',
        label:'Mitra',
        path:'/Mitra',
        icon:<HiOutlineUsers/>
    },
    {
        key:'cabang',
        label:'Cabang',
        path:'/Cabang',
        icon:<HiLocationMarker/>
    },
    {
        key:'barang',
        label:'Barang',
        path:'/Barang',
        icon:<HiArchive/>
    },
    {
        key:'database',
        label:'Database',
        path:'/Database',
        icon:<HiDatabase/>
    },
    {
        key:'barang-masuk',
        label:'Baru',
        path:'/Database',
        icon:<HiTruck/>
    },
    {
        key:'event',
        label:'Event-log',
        path:'/Event',
        icon:<BsCalendar2Event/>
    },
    {
        key:'printer',
        label:'Printer',
        path:'/Printer',
        icon:<HiPrinter/>
    },
    {
        key:'transaksi',
        label:'Transaksi',
        path:'/Transaksi',
        icon:<HiCalculator/>
    },
    
]