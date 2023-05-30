
function Menu({ users, setUsers }) {

	function completeTask(users) {

		return 
        (<li>{setUsers(users.task.map((item) => item.completed === true))}</li>)
		}

	return (
		<div className="task-container">
			<ul className="task-list">
				{<completeTask />}
			</ul>
		</div>
	)
}

export default Menu;
