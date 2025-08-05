import React, { useState } from 'react'

const Todo = () => {

    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    const [editingId, setEditingId] = useState(null);
    const [editedText, setEditedText] = useState('');


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

    const handleDelete = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !==id);
        setTodos(updatedTodos);
    };

    const handleToggle = (id) => {
        const updatedTodos = todos.map((todo)=>
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        );
        setTodos(updatedTodos);
    }

    const handleSave = (id) => {
        setTodos(
            todos.map((todo)=>
            todo.id === id ? {...todo, text: editedText} : todo
        )
        );
        setEditingId(null);
        setEditedText('');
    }




  return (
    <div className='max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg'>

        <h1 className='text-2xl font-bold mb-4 text-center'>
            Todo App
        </h1>
        
        <div className='flex gap-3 mt-4'>
            <input 
            type="text"
            placeholder="What do you ned to do ?"
            value={task}
            onChange={handleChange}
            className='flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition' />

            <button 
            onClick={handleAdd}
            className='bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition' >Add</button>
        </div>

        <ul className='mt-6 space-y-3'>
            {todos.map((todo) => (
                <li key={todo.id} className='flex justify-between items-center bg-gray-100 px-5 py-3 rounded-lg shadow-sm border border-gray-200 text-gray-800 hover:shadow-md transition' >
                    <div className='flex items-center gap-3'>
                        <input 
                        type="checkbox" 
                        checked={todo.completed}
                        onChange={()=> handleToggle(todo.id)}
                        className='w-5 h-5 accent-blue-600'
                        />
                        {editingId === todo.id ? (
                            <>
                            <input 
                            value={editedText}
                            onChange={(e)=> setEditedText(e.target.value)}
                            className='border px-2 py-1 rounded-md shadow-sm focus:ring-1 focus:ring-blue-400 text-shadow-amber-200'
                            />
                            <button
                            onClick={()=> handleSave(todo.id)}
                            className='ml-2 text-green-500 hover:text-green-700'     
                            >
                                ✅
                            </button>
                            </>

                        ) : (
                            <span className={`text-base ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}>
                                {todo.text}
                            </span>
                            
                        )}

                    </div>


                    <div className='flex gap-2 text-lg'>
                    <button
                    onClick={()=> {
                        setEditingId(todo.id);
                        setEditedText(todo.text);
                    }}
                    className='text-yellow-500 hover:text-yellow-600 transition'
                    >
                        ✏️
                    </button>




                    <button
                    onClick={()=> handleDelete(todo.id)}
                    className='text-red-500 hover:text-red-600 transition'
                    >
                        ❌
                    </button>
                    </div>
                </li>
            ))}

        </ul>
    </div>
  )
}

export default Todo


