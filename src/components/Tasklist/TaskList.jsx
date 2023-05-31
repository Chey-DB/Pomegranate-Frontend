import React from 'react'

const TaskList = ({tasks,setTask}) => {
  return (
    <div>
        {tasks.map((task)=>{
            <li className='tasklist' key={task.id}>
                <input type="text" value={task.title} className='list' onChange={(event)=>event.preventDefault()} />

              <div>
                <button className="button-complete task-button">
                  <i className='full pom'></i>
                  </button>
                  <button className="button-edit task-button">
                  <i className='x-ray pom'></i>
                  </button>
                  <button className="button-delete task-button">
                  <i className='composte bin'></i>

                </button>



              </div>






            </li>

        })}


    </div>
  )
}

export default TaskList