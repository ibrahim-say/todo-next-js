import Table from 'react-bootstrap/Table';
import { GetallTasks } from './apis';
import Addtask from './components/Addtask';
import Task from './components/Task';
export default async function Home() {
let tasks= await  GetallTasks()

  return (

    <div>
    <div className="m-auto w-50 text-center">
     <h1 >Todo List App</h1>
    <Addtask/>
     <Table striped  hover variant="dark">
      <thead className='text-start'>
        <tr>
          <th>Task</th>
          <th className='text-end'>Actions</th>
        </tr>
      </thead>
      <tbody className='text-start'>
      {tasks.map((task)=>(
        <Task task= {task} key={task.id}/>
      ))}
      </tbody>
    </Table>
    </div>
    </div>
    
  )
}


