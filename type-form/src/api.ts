import axios, {AxiosResponse} from "axios"
import { User } from "./constants"


export const getUsers = async () => {
    let response : AxiosResponse <User[]> = await axios.get('http://localhost:8080/users')
    return response.data
}
