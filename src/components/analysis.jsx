
function Analysis({tasks,theme}) {



    let total = tasks.length;
    let completed = tasks.filter(task => task.status === "Completed").length;
    let inProgress = tasks.filter(task => task.status === "In Progress").length;
    let notStarted = tasks.filter(task => task.status === "Not Started").length;    
    return (  
        <div className={`${theme === "light" ?'bg-amber-50 border-amber-200 shadow-amber-200 ':'bg-gray-800 border-gray-600 shadow-gray-600'} p-4 rounded-lg shadow-lg mb-6 hover:scale-105 hover:shadow-2xl transition `}>
            <h2 className={`${theme==="light"?'text-black':'text-white'} text-2xl font-bold mb-4`}>Task Analysis</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">Total Tasks</h3>
                    <p className="text-3xl">{total}</p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">Completed Tasks</h3>
                    <p className="text-3xl">{completed}</p>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">In Progress</h3>
                    <p className="text-3xl">{inProgress}</p>
                </div>
                <div className="bg-red-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">Not Started</h3>
                    <p className="text-3xl">{notStarted}</p>
                </div>
            </div>
        </div>
    );
}

export default Analysis;