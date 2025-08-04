import React, { useState } from 'react'

const Todo = () => {

    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);


    const handleChange = (e)=>{
        setTask(e.target.value);
    };

    const handleAdd = () =>{
        if (!task.trim()) return;

        const newTodo = {
         id: Date.now(),
         text: task,
        };

        setTodos([...todos, newTodo]);
        setTask('');
    };


  return (
    <div className='max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg'>

        <h1 className='text-2xl font-bold mb-4 text-center'>
            Todo App
        </h1>
        
        <div className='flex gap-3'>
            <input 
            type="text"
            placeholder="What do you ned to do ?"
            value={task}
            onChange={handleChange}
            className='flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />

            <button 
            onClick={handleAdd}
            className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition' >Add</button>
        </div>

        <ul className='mt-6 space-y-3'>
            {todos.map((todo) => (
                <li key={todo.id} className='bg-gray-100 px-4 py-2 rounded-md shadow-sm text-gray-800' >{todo.text}</li>
            ))}

        </ul>
    </div>
  )
}

export default Todo


