import React, { useEffect, useState } from 'react'
import { createTodo, deleteTodo, getTodo } from '../../api/api'
import axios from 'axios'
import './style.css'

function TodoContent() {
  const [userTodo, setUserTodo] = useState({ title: '' })
  const [todos, setTodos] = useState([])

  const onChange = (e) => {
    const { name, value } = e.target
    setUserTodo({ ...userTodo, [name]: value })
  }

  const fetchTodo = async () => {
    const res = await getTodo()
    setTodos(res)
  } // api/getTodo에서 set을 사용못하니까 fetchTodo로 만들어서 사용함

  useEffect(() => {
    fetchTodo()
  }, [])

  const deleteHandle = async (id) => {
    await deleteTodo(id)
    fetchTodo()
  }

  const createHandle = async () => {
    await createTodo(userTodo)
    fetchTodo()
  }

  // useEffect(() => {
  //   console.log('todos', todos)
  // }, [todos])
  return (
    <div>
      <input name="title" onChange={onChange} value={userTodo.title} />
      <button onClick={() => createHandle()}>보내기</button>

      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="list">
            <p>{todo.title}</p>
            <button onClick={() => deleteHandle(todo.id)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoContent
