import axios from "axios"
import { v4 as uuid } from "uuid";
const api="http://localhost:3001/tasks"
export async function GetallTasks(){
const tasks=  await  axios({
        method: 'get',
        url: api,
        cache:"no-cashe"
      })
return tasks.data
}

export async function AddnewTask(task){
  await axios({
    method: 'post',
    url: api,
    data: {
      id: uuid() ,
      task: task
    }
   
  }) 
 
} 

export async function Deletetask(id){
  console.log("aho yaam")
  await axios.delete(`${api}/${id}`)
}

export async function Updatetask(task,id){
  await axios({
    method: 'put',
    url: `${api}/${id}`,
    data: {
      task: task
    }
   
  }) 
}