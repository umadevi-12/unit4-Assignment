import React,{ useState} from 'react';
function TodoApp(){
    const [tasks,setTasks] = useState(['Buy milk','study React']);
    const[newTask,setNewTask] = useState('');

    const handleAddTask = () =>{
        const trimmedTask = newTask.trim();
        if(trimmedTask){
            setTasks([...tasks,trimmedTask]);
            setNewTask('');
        }
    };
    const handleClearAll = () =>{
        setTasks([]);
    };
    return (
        <div style={{textAlign:'center',padding:'2px'}}>
            <h2>Todo List</h2>

            <input
             type = 'text'
             placeholder='New task'
             value = {newTask}
             onChange={(e) => setNewTask(e.target.value)}
             />
             <button onClick={handleAddTask} style = {{marginLeft:'10px',color :'green',fontWeight:'bold'}}>Add Task</button>
             <button onClick={handleClearAll} style = {{marginLeft:'10px',color :'red'}}> Clear All</button>

             {tasks.length === 0? (
                <p>No Tasks available.</p>
             ) : (
                <ul style = {{listStyle : 'none',padding :0}}>
                    {tasks.map((task,index) =>(
                        <li key = {index} style = {{padding:'5px 0'}}>{task}</li>
                    ))}
                </ul>
             )}
        </div>
    );
}
export default TodoApp;