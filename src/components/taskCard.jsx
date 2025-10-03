import { Link } from "react-router-dom";

function TaskCard({ task ,deleteTask,changeStatus}) {

    let priorityColor = "";
    if (task.priority === "High") priorityColor = "text-red-400";
    if (task.priority === "Medium") priorityColor = "text-yellow-400";
    if (task.priority === "Low") priorityColor = "text-red-400";

    let statusColor = "";
    if (task.status === "In Progress" || "Not Started") statusColor = "bg-blue-400";
    if (task.status === "Completed") statusColor = "bg-green-400";

    let taskStatus = true;
    if(task.status==="Completed") taskStatus = false;
    return ( 
        <div className={`flex flex-col justify-center items-center h-60 w-60  text-white m-4 rounded-lg shadow-lg p-4 ${statusColor} hover:scale-105 hover:shadow-2xl shadow-gray-500 transition   `}>
            <Link to={`/task/${task.id}`} className="no-underline items-center flex flex-col">
            <h1 className="text-xl font-bold">{task.title}</h1>
            <p className="text-sm">{task.description}</p>
            {taskStatus ? <p className={`${priorityColor} font-semibold`}>Priority: {task.priority}</p> : null  } 
            <p>Status: {task.status}</p>
            
            {deleteTask && 
                <button 
                onClick={deleteTask}
                    className="mt-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-800 transition"
                >
                Delete</button>
            }
            </Link>
            {changeStatus && 
                <select
                    value={task.status}
                    onChange={(e) => changeStatus( {status:e.target.value})}
                    className="w-full m-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            }

        </div>
        
     );
}

export default TaskCard;
