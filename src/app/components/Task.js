import React from 'react'
import Edittask from './Edittask';
import Removetask from './Removetask';
function Task({task}) {
  return (
    <tr>
    <td>{task.task}</td>
    <td className='text-end'><Edittask id={task.id}/> <Removetask id={task.id}/></td>
  </tr>
  )
}

export default Task