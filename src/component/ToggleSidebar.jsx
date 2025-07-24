import { useNavigate, useParams, useLocation } from "react-router-dom";
import courseData from "../data/coursedetail.json";

const ToggleSidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { courseId } = useParams();

    const decodedId = decodeURIComponent(courseId || "");
    const course = courseData.find((c) => c.id === decodedId);

    if (!course) return null;

    const getNavClass = (path) =>
        `cursor-pointer px-2 py-3 rounded ${location.pathname === path
            ? "text-gray-800 border-l-4 border-gray-800 bg-gray-100"
            : "hover:underline"
        }`;

    const coursePath = `/Courses/${encodeURIComponent(course.id)}`;

    return (
        <div className="lg:py-4 lg:px-2 py-2 px-1">
            <ul className="lg:text-xl text-lg font-semibold mt-2 space-y-2 text-[#407088]">
                <li
                    onClick={() => navigate(coursePath)}
                    className={getNavClass(coursePath)}
                >
                    Overview
                </li>
                <li
                    onClick={() => navigate(`${coursePath}/Assignment`)}
                    className={getNavClass(`${coursePath}/Assignment`)}
                >
                    Assignment
                </li>
                <li
                    onClick={() => navigate(`${coursePath}/Grade`)}
                    className={getNavClass(`${coursePath}/Grade`)}
                >
                    Grade
                </li>
            </ul>
        </div>
    );
};

export default ToggleSidebar;
