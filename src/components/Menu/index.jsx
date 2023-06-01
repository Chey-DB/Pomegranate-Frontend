import { useState, useEffect } from "react";


function Menu({ username }) {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        tasks()
    }, [])


    const tasks = async () => {
        try {
            const response = await fetch(`https://pomegranate-backend.onrender.com/users/${username}`)
            const data = await response.json();
            console.log(data.user.tasks)
            setUsers(data.user.tasks)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="task-list">
            <h1>Tasks</h1>
            <ul>
                {users.map((data, idx) => {
                    return (
                        <li className="task-list" key={idx}>
                            Description: {data.description}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Menu;
