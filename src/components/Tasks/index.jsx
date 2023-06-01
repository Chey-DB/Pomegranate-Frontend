import React, { useState, useEffect } from 'react'
import Header from './Header';
import Form from './Form';
import TaskList from './TaskList';
import "./style.css";
import { useParams } from 'react-router-dom';

const Tasks = () => {
    const {username} = useParams();
    const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState(initialState);
    const [editTask, setEditTask] = useState(null);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);

    return (
        <div className="container">
            <div className='app_wrapper'>
                <div>
                    <Header />
                </div>
                <div>
                    <Form
                        input={input}
                        setInput={setInput}
                        tasks={tasks}
                        setTasks={setTasks}
                        editTask={editTask}
                        setEditTask={setEditTask}
                        username={username}
                    />
                </div>
                <div>
                    <TaskList
                        tasks={tasks}
                        setTasks={setTasks}
                        setEditTask={setEditTask}
                        username={username}
                    />
                </div>
            </div>
        </div>
    )
}

export default Tasks
