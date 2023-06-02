import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, tasks, setTasks, editTask, setEditTask, username }) => {

    const updateTask = (title, id, completed) => {
        const newTask = tasks.map((task) => task.id === id ? { title, id, completed } : task
        );
        setTasks(newTask);
        setEditTask("");
    }

    useEffect(() => {
        if (editTask) {
            setInput(editTask.title);
        } else {
            setInput("");
        }
    }, [setInput, editTask])


    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (!editTask) {
            console.log(input)
            fetch(`https://pomegranate-backend.onrender.com/users/${username}/tasks`, {
                method: "POST",
                body: JSON.stringify({ description: input, completed: false }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((res) => { res.json() })
                .then((data) => {
                })
                .catch((err) => {
                    console.log(err.message);
                })
            setTasks([...tasks, { id: uuidv4(), title: input, completed: false }])
            setInput("");
        } else {
            updateTask(input, editTask.id, editTask.completed)
        }
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder='Enter a task'
                className="task_input"
                value={input}
                required
                onChange={onInputChange}
            />
            <button className='button_add' type="submit">
                {editTask ? "OK" : "Add"}
            </button>
        </form>
    )
}

export default Form
