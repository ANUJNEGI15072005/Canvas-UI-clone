import { useState, useEffect } from "react";
import { useLocation, useParams, Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import ToggleSidebar from "../component/ToggleSidebar";
import courseData from "../data/coursedetail.json";
import { Link } from "react-router-dom";

const Layout = () => {
    const location = useLocation();
    const { courseId } = useParams();
    const decodedId = courseId ? decodeURIComponent(courseId) : null;
    const course = courseId ? courseData.find(c => c.id === decodedId) : null;

    const [isToggleOpen, setIsToggleOpen] = useState(() => {
        const saved = localStorage.getItem("sidebarToggle");
        return saved ? JSON.parse(saved) : false;
    });

    useEffect(() => {
        localStorage.setItem("sidebarToggle", JSON.stringify(isToggleOpen));
    }, [isToggleOpen]);

    const toggleSidebar = () => {
        setIsToggleOpen(prev => !prev);
    };

    const getBreadcrumb = () => {
        const parts = location.pathname.split("/").filter(Boolean);
        if (parts.length === 0) return <Link to="/" className="hover:underline">Dashboard</Link>;
        const crumbs = [];
        crumbs.push(
            <Link key="dashboard" to="/" className="hover:underline text-[#407088]">Dashboard</Link>
        );
        if (parts[0] === "Courses") {
            crumbs.push(
                <span key="arrow1" className="mx-1">{">"}</span>,
                <div className=" text-[#407088]">Courses</div>
            );
            if (course) {
                crumbs.push(
                    <span key="arrow2" className="mx-1">{">"}</span>,
                    <Link key="course" to={`/Courses/${course.id}`} className="hover:underline text-[#407088]">
                        {course.title}
                    </Link>
                );
            }
            if (parts.includes("Assignment")) {
                crumbs.push(
                    <span key="arrow3" className="mx-1">{">"}</span>,
                    <span key="assignment">Assignment</span>
                );
            }
            if (parts.includes("Grade")) {
                crumbs.push(
                    <span key="arrow4" className="mx-1">{">"}</span>,
                    <span key="grade">Grade</span>
                );
            }
        }
        return crumbs;
    };


    return (
        <div className="sm:flex min-h-screen">
            <div className="xl:w-1/14 sm:w-1/9 sm:block hidden">
                <Sidebar />
            </div>
            <div className="sm:hidden">
                <Navbar />
            </div>

            <div className="flex flex-col xl:w-13/14 sm:w-8/9 w-full transition-all duration-300 py-2 lg:px-4 px-1">
                <header className="sm:flex hidden items-center p-4 border-b border-gray-200 text-[#407088]">
                    <button
                        onClick={toggleSidebar}
                        className={`text-2xl mr-4 rounded cursor-pointer transition-transform duration-300 ${isToggleOpen ? "rotate-90" : "rotate-0"}`}
                    >
                        {isToggleOpen ? "✕" : "☰"}
                    </button>
                    <h2 className="md:text-xl text-lg hidden font-semibold sm:flex flex-wrap gap-1 items-center">{getBreadcrumb()}</h2>
                </header>

                <div className="flex flex-grow transition-all duration-300">
                    <div className={`transition-all sm:block hidden duration-300 ${isToggleOpen ? "xl:w-1/6 sm:w-1/5 w-full" : "w-0 overflow-hidden"}`}>
                        {course && <ToggleSidebar />}
                    </div>
                    <div className={`transition-all duration-300 px-6 py-4 ${isToggleOpen ? "xl:5/6 sm:w-4/5 w-full" : "w-full"}`}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
