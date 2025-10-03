import TaskCard from "../components/taskCard.jsx";
import tasks1 from "../tasks.js";
import useTheme from "../hooks/theme.js";
import { Link } from "react-router-dom";

import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useEffect,useMemo,useState } from "react";
import NewTask from "../components/newTask.jsx";
import Analysis from "../components/analysis.jsx";


function Home() {
    const [theme,toggleTheme] = useTheme();
    const [search,setSearch] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [tasks, setTasks] = useState(() => {
        try {
            const raw = localStorage.getItem("tasks");
            if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) return parsed;
            }
        } catch (err) {
            console.error("Failed to parse tasks from localStorage", err);
        }
        return tasks1; 
        });

    const addTask = (task) => {
        const newTask = {
            id: Date.now(), // added the id here to avoid duplication of ids
            ...task,
        };
        setTasks((prev) => [...prev, newTask]); // add it to state so it trigers a re-render
        setShowForm(false); // close the form after adding a task
    };

    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    const updateTask = (id, updatedFields) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
            task.id === id ? { ...task, ...updatedFields } : task
            )
        );

        const updated = tasks.map((task) =>
            task.id === id ? { ...task, ...updatedFields } : task
        );
        localStorage.setItem("tasks", JSON.stringify(updated));
    };



    useEffect(() => {
    try {
      const raw = localStorage.getItem("tasks");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setTasks(parsed);
      }
    } catch (err) {
      console.error("Failed to parse tasks from localStorage", err);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        const onKey = (e) => {
        if (e.key === "Escape") setShowForm(false);
        };
        if (showForm) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [showForm]);

        const filterTasks = useMemo(()=>{
            if(!search.trim())
                return tasks;
            return tasks.filter((task)=>task.title.toLowerCase().includes(search.toLowerCase()) || task.description.toLowerCase().includes(search.toLowerCase()));
        },[search,tasks]
            )

    return ( 
        <div className={`flex flex-col items-center min-h-screen max-h-fit ${theme==="light"?'bg-amber-100 ':'bg-gray-900'}`}>
            
            <div className="flex flex-row justify-between items-center bg-blue-300 w-full p-4">
                <h1 className="text-2xl text-gray-700 font-bold m-4">Task Manager</h1>    
                <input type="text" placeholder="Search tasks..." value={search} onChange={(e)=>setSearch(e.target.value)} className="p-2 rounded-lg bg-blue-100 text-black"/>
                <button
                    onClick={toggleTheme}
                    className="flex border-2 w-20 border-gray-700 p-2 rounded-full text-gray-700 hover:bg-gray-700 hover:text-white transition "
                    >
                    {theme === "light" ? <MdLightMode size={20} className="mr-3"/> : <MdDarkMode size={20} className="ml-10"/>}
                </button>
            </div>
            <button 
                onClick={() => setShowForm(true)}
                className="bg-gray-500 text-white p-2 rounded-lg m-4 hover:bg-gray-600 transition"    
            >
                Add Task
            </button>
            
            <div className="flex w-full h-fit flex-wrap justify-center items-center">
            {filterTasks.map((task1) => (
                
                    <TaskCard task={task1} deleteTask={()=>deleteTask(task1.id)} changeStatus={(updatedFields)=>updateTask(task1.id , updatedFields)} />
               
            ))}
            </div>

 
        {showForm && (
            <div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            onClick={() => setShowForm(false)} // outside click closes (got it from chatGPT)
            > 
                
                <div
                    className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6"
                    onClick={(e) => e.stopPropagation()} // prevent outside-click when interacting inside(got it from chatGPT)
                >
                    <NewTask onAdd={addTask} onCancel={() => setShowForm(false)} />
                </div>
            </div>
      )}

      <Analysis tasks={tasks} theme={theme}/>
            
        </div>  
     );
}

export default Home;