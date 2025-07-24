import { useParams } from 'react-router-dom';
import courseData from '../data/coursedetail.json';

const CourseAssignment = () => {
    const { courseId } = useParams();
    const decodedId = decodeURIComponent(courseId);
    const course = courseData.find(c => c.id === decodedId);

    if (!course) {
        return <div className="text-center text-red-500">Course not found!</div>;
    }

    return (

        <div className="grid grid-cols-1 gap-2 place-items-start">
            <div className="mt-2 w-full max-w-2xl ">
                {course.assignments && course.assignments.length > 0 ? (
                    <ul className="space-y-5">
                        {course.assignments.map((a, index) => (
                            <li key={index} className="bg-white border-1 border-gray-300">
                                <div>
                                    <div className="bg-gray-300  py-3 sm:px-4 px-2">
                                        <p className="text-black sm:text-xl [@media(min-width:410px)]:text-lg text-base font-semibold">Assignment {index + 1}: {a.name}</p>
                                    </div>
                                    <div className="px-4 py-2 flex justify-between sm:text-base [@media(min-width:410px)]:text-sm text-[12px] items-baseline">
                                        <p>Due Date: {a.dueDate} | {a.points} points</p>
                                        <p className={`${a.submissionStatus === "Submitted" ? "text-green-600" : "text-gray-600"} italic`}>
                                            {a.submissionStatus}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No assignments available.</p>
                )}
            </div>
        </div>
    );
};

export default CourseAssignment;
