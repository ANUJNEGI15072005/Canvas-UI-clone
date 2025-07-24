import { useParams } from "react-router-dom";
import courseData from "../data/coursedetail.json";

const CourseDetail = () => {
  const { courseId } = useParams();
  const decodedId = decodeURIComponent(courseId);
  const course = courseData.find((c) => c.id === decodedId);

  if (!course) {
    return <div className="text-center text-red-500">Course not found!</div>;
  }

  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">OVERVIEW</h1>
      <p className="lg:text-xl text-lg italic sm:text-justify text-left">{course.overview}</p>
    </>
  );
};

export default CourseDetail;
