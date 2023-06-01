import { useState, useEffect } from "react";


function Menu() {

    const [users, setUsers ] = useState([]);


    useEffect(() => {
        tasks()
    }, [])


	const tasks = async () => {
        try{
        const response = await fetch("https://localhost:3000/users") 

        setUsers(await response.json())
        }catch(error)
        {
            console.log(error);
        }
    }

	return (
		<div className="task-list">
            <h1>Tasks</h1>
			<ul>
				{users.map((data) => {
                    return (
                    <li className="task-list" key={data.username}>
                        
                        Description: {data.task.description} 
                        Completed: {data.task.completed}
                    </li>
                    )
                })}
			</ul>
		</div>
	)
}

export default Menu;
