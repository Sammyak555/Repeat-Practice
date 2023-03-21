import axios,{AxiosResponse} from "axios"
import { Todo } from "./Components/Constants"


export const getTodos = async () => {
    let response : AxiosResponse<Todo[]> = await axios.get('http://localhost:8080/todos')
    return response.data
}

export const addTodo = async (title:String,status:Boolean) => {
    let response : AxiosResponse<Todo> = await axios.post('http://localhost:8080/todos',{status,title})
    return response.data
}
export const updateTodo = async (updatedTodo: Todo) => {
    let response : AxiosResponse <Todo> = await axios.patch(`http://localhost:8080/todos/${updatedTodo.id}`,{...updatedTodo})
    return response.data
}