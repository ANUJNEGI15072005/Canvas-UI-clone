import { useState } from 'react';
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';
import Calendarlib from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/Calendar.css';

const Calendar = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="sm:flex min-h-screen">
            <div className="xl:w-1/14 sm:w-1/9 sm:block hidden">
                <Sidebar />
            </div>
            <div className="sm:hidden">
                <Navbar />
            </div>
            <div className="xl:w-13/14 sm:w-8/9 w-full sm:p-6 p-3">
                <header className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center sm:text-left">
                    Calendar – {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
                </header>
                <div className="flex w-full">
                    <div className="w-full max-w-6xl flex sm:justify-start justify-center">
                        <Calendarlib
                            onChange={setDate}
                            value={date}
                            className="w-full rounded-lg  shadow-xl calendar-custom"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
