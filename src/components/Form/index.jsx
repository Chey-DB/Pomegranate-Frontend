import React from 'react'
import {v4 as uuidv4} from "uuid"

const Form = ({input, setInput, tasks, setTask}) => {
    const onInputChange= (event)=> {
        setInput(event.target.value);
    }
    const onFormSubmit= (event)=>{
        event.preventDefault()
        setTask([...tasks,{id: uuidv4(),title:input,completed:false}])
        setTask("")
    }

  return (
    <form onSubmit={onFormSubmit}>
        <input type="text" placeholder='add new task' className='task-input'  
        value={input}  required onChange={onInputChange}    />
        <button className='button-add' type='submit'>add task</button>


    </form>
  )
}

export default Form