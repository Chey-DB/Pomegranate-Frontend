import React, { useState } from 'react'
import Form from '../Form'
import TaskList from '../Tasklist/TaskList'

const T1 = () => {

    const [input, setInput] = useState("")
    const [tasks, setTask] = useState([])
  return (
    <>
    <div className='header'>
        <h1>Add tasks</h1>
    </div>
    <div className='form'>
    <Form input={input} setInput={setInput} tasks={tasks} setTask={setTask}
    />
  </div>

  <div className='list'>
    <Tasklist tasks={Tasks} setTask={setTask}/>

  </div>



    </>
  )
}

export default T1