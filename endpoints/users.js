import axios from 'axios'
//add new registered user to database
import { useAxiosPost } from '../hooks/useAxiosPost'
export async function addNewUser(user) {
    const res = await axios.post('/api/new-user', { user })
    return res.data
}