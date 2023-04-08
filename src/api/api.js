import axios from 'axios'

const headers = {
  'content-type': 'application/json',
  apikey: 'FcKdtJs202301',
  username: 'KDT4_Practice',
}

export const createTodo = async (userTodo) => {
  const res = await axios.post(
    `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos`,
    { title: userTodo.title },
    { headers }
  )
  getTodo()
  console.log(res.data)
}

export const getTodo = async () => {
  const res = await axios.get(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos`, { headers })
  console.log(res.data)
  return res.data
  // setTodos(res.data)
}

export const deleteTodo = async (id) => {
  const res = await axios.delete(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/:id`, {
    headers,
  })
  // setTodos(todos.filter((todo) => todo.id !== id))
}
