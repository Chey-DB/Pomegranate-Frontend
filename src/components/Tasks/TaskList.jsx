import React from 'react'

const TaskList = ({ tasks, setTasks, setEditTask, username }) => {

    const handleComplete = (task) => {
        setTasks(
            tasks.map((item) => {
                if (item.id === task.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })
        )
    }

    const handleDelete = (task, idx) => {
        const { id } = task;
        fetch(`https://pomegranate-backend.onrender.com/users/${username}/tasks/${idx}`, {
            method: "DELETE",
            body: JSON.stringify({ description: tasks.title, completed: tasks.completed }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => { res.json() })
            .then((data) => {
                alert("deleted task!");
            })
            .catch((err) => {
                console.log(err.message);
            })
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const handleEdit = ({ id }) => {
        const findTask = tasks.find((task) => task.id === id)
        setEditTask(findTask);
    }

    return (
        <div>
            {tasks.map((task, idx) => (
                <li className="task_list" key={task.id}>

                    <input
                        type='text'
                        value={task.title}
                        className={`list ${task.completed ? "complete" : ""} `}
                        onChange={(event) => event.preventDefault()}
                    />

                    <div>
                        <button className='button_complete task_button' onClick={() => handleComplete(task)}>
                            <i className='fa fa-check-circle'></i>
                        </button>
                        <button className='button_edit task_button' onClick={() => handleEdit(task)}>
                            <i className='fa fa-edit'></i>
                        </button>
                        <button className='button_delete task_button' onClick={() => handleDelete(task, idx)}>
                            <i className='fa fa-trash'></i>
                        </button>
                    </div>
                </li>
            ))}

        </div>
    );
}

export default TaskList
