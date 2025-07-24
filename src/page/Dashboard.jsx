import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import CourseGrid from "../component/CourseGrid";
import TodoList from "../component/TodoList";
import NotificationBar from "../component/NotificationBar";
import todoData from "../data/todos.json";
import { FaRegCalendarAlt } from "react-icons/fa";

function Dashboard() {
  const [tasks, setTasks] = useState(todoData);

  return (
    <div className="sm:flex min-h-screen">
      <div className="xl:w-1/14 sm:w-1/9 sm:block hidden">
        <Sidebar />
      </div>
      <div className="sm:hidden">
        <Navbar />
      </div>
      <div className="xl:w-13/14 sm:w-8/9 w-full sm:p-6 p-3">
        <NotificationBar tasks={tasks} className="w-full mb-6" />
        <header className="text-gray-900 font-semibold [@media(min-width:769px)]:text-5xl sm:text-3xl [@media(min-width:375px)]:text-2xl text-xl mb-6 flex items-center gap-4">
          Welcome, Anuj – {new Date().toLocaleDateString()}
          <Link to="/Calendar"><FaRegCalendarAlt className="[@media(min-width:769px)]:text-4xl sm:text-3xl text-2xl text-[#0097A7]" /></Link>
        </header>
        <CourseGrid />
        <TodoList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default Dashboard;
