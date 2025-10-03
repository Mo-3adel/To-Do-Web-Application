import { Navigate, useParams } from 'react-router-dom';
import TaskCard from '../components/taskCard';
import useTheme from '../hooks/theme';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function TaskPage() {
  const { id } = useParams();
  const [theme,toggleTheme] = useTheme();


  let tasks = [];
  try {
    const raw = localStorage.getItem("tasks");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) tasks = parsed;
    }
  } catch (err) {
    console.error("Failed to parse tasks from localStorage", err);
  }

  const task = tasks.find((t) => t.id === parseInt(id));

  if (!task) {
    return <Navigate to="/" />;
  }

  return (
    <div className={`flex flex-col items-center min-h-screen max-h-fit ${theme==="light"?'bg-amber-100 ':'bg-gray-900'}`}>
        <div className="flex flex-row justify-between items-center bg-blue-300 w-full p-4">
                        <h1 className="text-2xl text-gray-700 font-bold m-4">Task Manager</h1>    
                        <button
                            onClick={toggleTheme}
                            className="flex border-2 w-20 border-gray-700 p-2 rounded-full text-gray-700 hover:bg-gray-700 hover:text-white transition "
                            >
                            {theme === "light" ? <MdLightMode size={20} className="mr-3"/> : <MdDarkMode size={20} className="ml-10"/>}
                        </button>
        </div>
        <TaskCard task={task} key={task.id} />
      
    </div>
  );
}

export default TaskPage;
