import { useNavigate } from "react-router-dom"; 
import courses from "../data/courses.json";

const CourseGrid = () => {
    const navigate = useNavigate(); 

    return (
        <div className="xl:w-11/12 mb-6">
            <div className="grid [@media(min-width:769px)]:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-6 place-items-center">
                {courses.map((item) => (
                    <div
                        key={item.id}
                        className="w-full bg-white shadow-md rounded-lg p-4 space-y-2"
                    >
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm text-[#2C5364]">Instructor: {item.instructor}</p>

                        <div className="space-y-1">
                            <div className="w-full bg-[#E0F2F1] h-2 rounded">
                                <div
                                    className="bg-[#0097A7] h-2 rounded"
                                    style={{ width: `${item.progress}%` }}
                                ></div>
                            </div>
                            <p className="text-sm text-[#607D8B]">{item.progress}% completed</p>
                        </div>

                        <button
                            onClick={() => navigate(`/Courses/${encodeURIComponent(item.id)}`)} 
                            className="mt-2 bg-[#0097A7] text-white px-4 py-1 rounded hover:bg-[#006064]"
                        >
                            Go to Course
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseGrid;
