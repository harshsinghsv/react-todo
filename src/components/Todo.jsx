import React, { useState } from 'react'

const Todo = () => {

    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);


    const handleChange = (e)=>{
        setTask(e.target.value);
    };

    const handleAdd = () =>{
        console.log('Add Task:', task);
        setTask('');
    };

    const newTodo = {
        id: Date.now(),
        text: task,
    };

    setTodos([...todos, newTodo]);
    setTask('');


  return (
    <div className='max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg'>

        <h1 className=''>
            Todo App
        </h1>
        
        <div className='flex gap-3'>
            <input type="text" />
            <button>Add</button>
        </div>

        <button
            onclick={handleAdd}
            className='p-2 ml-3'
        >
            ADD    
        </button>
    </div>
  )
}

export default Todo


