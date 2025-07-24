import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import courseData from "../data/coursedetail.json";

const ToggleNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { courseId } = useParams();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const decodedId = decodeURIComponent(courseId || "");
    const course = courseData.find((c) => c.id === decodedId);

    if (!course) return null;

    const coursePath = `/Courses/${encodeURIComponent(course.id)}`;

    const getNavClass = (path) =>
        `px-4 py-2 cursor-pointer whitespace-nowrap transition ${location.pathname === path
            ? "bg-gray-200 text-gray-800 font-semibold"
            : "hover:bg-gray-100"
        }`;

    return (
        <div className="relative">
            <button
                className="text-white bg-[#407088] px-4 py-2 rounded hover:bg-[#305a6b] transition"
                onClick={() => setDropdownOpen((prev) => !prev)}
            >
                Course Menu ▾
            </button>

            {dropdownOpen && (
                <div className="absolute top-full mt-2 left-0 bg-white shadow-lg border rounded z-50 flex space-x-4 px-4 py-2">
                    <span
                        onClick={() => {
                            navigate(coursePath);
                            setDropdownOpen(false);
                        }}
                        className={getNavClass(coursePath)}
                    >
                        Overview
                    </span>
                    <span
                        onClick={() => {
                            navigate(`${coursePath}/Assignment`);
                            setDropdownOpen(false);
                        }}
                        className={getNavClass(`${coursePath}/Assignment`)}
                    >
                        Assignment
                    </span>
                    <span
                        onClick={() => {
                            navigate(`${coursePath}/Grade`);
                            setDropdownOpen(false);
                        }}
                        className={getNavClass(`${coursePath}/Grade`)}
                    >
                        Grade
                    </span>
                </div>
            )}
        </div>
    );
};

export default ToggleNavbar;
