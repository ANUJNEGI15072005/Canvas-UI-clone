import { useParams } from 'react-router-dom';
import courseData from '../data/coursedetail.json';

const CourseGrade = () => {
    const { courseId } = useParams();
    const decodedId = decodeURIComponent(courseId);
    const course = courseData.find(c => c.id === decodedId);

    if (!course) {
        return <div className="text-center text-red-500">Course not found!</div>;
    }

    return (
        <>
            <h1 className="text-3xl font-semibold mb-4">GRADE : {course.grade.marks}</h1>
            <p className="lg:text-xl text-lg italic text-justify">{course.grade.description}</p>
        </>
    );
};

export default CourseGrade;
