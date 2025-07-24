import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    MdMenu,
    MdClose,
    MdDashboard,
    MdClass,
    MdCalendarToday,
    MdMailOutline,
    MdHelpOutline,
    MdExpandMore, 
    MdExpandLess,
} from 'react-icons/md';

import ToggleSidebar from './ToggleSidebar'; 

const navItems = [
    { label: 'Dashboard', icon: <MdDashboard size={25} />, path: '/', link: true },
    { label: 'Courses', icon: <MdClass size={25} />, path: '/Courses' },
    { label: 'Calendar', icon: <MdCalendarToday size={25} />, path: '/Calendar', link: true },
    { label: 'Inbox', icon: <MdMailOutline size={25} />, path: '/Inbox' },
    { label: 'Help', icon: <MdHelpOutline size={25} />, path: '/Help' },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    const activeLabel = navItems.find(item =>
        item.path === '/' ? currentPath === '/' : currentPath.startsWith(item.path)
    )?.label || '';

    const isCourseRoute = currentPath.startsWith('/Courses/');

    return (
        <>
            <div className="sm:hidden flex items-center justify-between bg-[#0097A7] text-white px-3 py-4 relative">
                <button onClick={() => setOpen(true)}>
                    <MdMenu size={28} />
                </button>
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-semibold">{activeLabel}</h1>

                    {isCourseRoute && (
                        <button onClick={() => setShowDropdown(!showDropdown)}>
                            {showDropdown ? <MdExpandLess size={24} /> : <MdExpandMore size={24} />}
                        </button>
                    )}
                </div>
                <div className="w-[28px]"></div>
            </div>

            {showDropdown && isCourseRoute && (
                <div className="sm:hidden px-3 py-2 bg-white shadow z-40 border-b">
                    <ToggleSidebar horizontal />
                </div>
            )}

            <div
                className={`fixed top-0 left-0 h-full w-64 bg-[#0097A7] text-white transform transition-transform duration-300 z-50 ${open ? 'translate-x-0' : '-translate-x-full'
                    } sm:hidden`}
            >
                <div className="flex items-center justify-between p-4 border-b border-white">
                    <h2 className="text-lg font-bold">Menu</h2>
                    <button onClick={() => setOpen(false)}>
                        <MdClose size={28} />
                    </button>
                </div>
                <div className="flex flex-col">
                    {navItems.map((item, index) => {
                        const isActive =
                            item.path === '/' ? currentPath === '/' : currentPath.startsWith(item.path);

                        const classes = `flex items-center gap-3 px-4 py-3 text-lg cursor-pointer ${isActive
                            ? 'bg-white text-[#0097A7] font-semibold'
                            : 'hover:bg-[#006064]'
                            }`;

                        return item.link ? (
                            <Link to={item.path} key={index} onClick={() => setOpen(false)} className={classes}>
                                {item.icon}
                                {item.label}
                            </Link>
                        ) : (
                            <div key={index} className={classes}>
                                {item.icon}
                                {item.label}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Navbar;
