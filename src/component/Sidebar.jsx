import { useLocation, Link } from 'react-router-dom';
import {
    MdDashboard,
    MdClass,
    MdCalendarToday,
    MdMailOutline,
    MdHelpOutline,
} from 'react-icons/md';

const Sidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = [
        { label: 'Dashboard', icon: <MdDashboard size={40} />, path: '/', link: true },
        { label: 'Courses', icon: <MdClass size={40} />, path: '/Courses' },
        { label: 'Calendar', icon: <MdCalendarToday size={40} />, path: '/Calendar', link: true },
        { label: 'Inbox', icon: <MdMailOutline size={40} />, path: '/Inbox' },
        { label: 'Help', icon: <MdHelpOutline size={40} />, path: '/Help' },
    ];

    return (
        <aside
            style={{ backgroundColor: '#0097A7' }}
            className="text-white min-h-full hidden sm:block"
        >
            <div className="flex justify-center w-full">
                <div className="w-full">
                    {navItems.map((item, index) => {
                        const isActive =
                            item.path === '/'
                                ? currentPath === '/'
                                : currentPath.startsWith(item.path);

                        return (
                            <div key={index}>
                                {item.link ? (
                                    <Link to={item.path} key={index}>
                                        <div
                                            className={`text-center p-2 cursor-pointer ${isActive
                                                    ? 'bg-white text-[#0097A7] font-semibold'
                                                    : 'hover:bg-[#006064]'
                                                }`}
                                        >
                                            <div className="flex justify-center items-center">
                                                {item.icon}
                                            </div>
                                            <div className="xl:text-base md:text-sm [@media(min-width:769px)]:block hidden">{item.label}</div>
                                        </div>
                                    </Link>
                                ) : (
                                    <div
                                        className={`text-center p-2 cursor-pointer ${isActive
                                                ? 'bg-white text-[#0097A7] font-semibold'
                                                : 'hover:bg-[#006064]'
                                            }`}
                                    >
                                        <div className="flex justify-center items-center">
                                            {item.icon}
                                        </div>
                                        <div className="xl:text-base md:text-sm [@media(min-width:769px)]:block hidden">{item.label}</div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
