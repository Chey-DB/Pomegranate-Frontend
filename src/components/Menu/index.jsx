import { useState, useEffect } from "react";


function Menu() {

    const [users, setUsers ] = useState();


    useEffect(() => {
        tasks()
    }, [])

	const tasks = async () => {
        const response = await fetch("http://localhost:3000/users") 

        setUsers(await response.json())
    }

	return (
		<div className="task-list">
            <h1>Tasks</h1>
			<ul>
				{users.tasks.map((data) => {
                    return (<li className="task-list" key={data.id}>{data.tasks.description}</li>)
                })}
			</ul>
		</div>
	)
}

export default Menu;
