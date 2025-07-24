
const NotificationBar = ({ tasks, className }) => {
  const today = new Date();

  const getDateDifference = (dueDate) => {
    const date = new Date(`${dueDate}, 2025`);
    return date - today;
  };

  const upcomingTask = tasks
    .filter((task) => !task.done)
    .sort((a, b) => getDateDifference(a.due) - getDateDifference(b.due))[0];

  if (!upcomingTask) return null;

  return (
    <div className={`bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-4 rounded overflow-hidden ${className}`}>
      <p className="font-medium [@media(min-width:340px)]:text-xl text-lg mb-1">Upcoming Task:</p>
      <p className="[@media(min-width:340px)]:text-lg text-base truncate">{upcomingTask.task} (Due: {upcomingTask.due})</p>
    </div>
  );
};


export default NotificationBar;
