import React, { useEffect, useState } from 'react'
import { createTodo, deleteTodo, getTodo } from '../../api/api'
import axios from 'axios'
import './style.css'

function TodoContent() {
  let [userTodo, setUserTodo] = useState({ title: '' })
  let [todos, setTodos] = useState([])

  const onChange = (e) => {
    const { name, value } = e.target
    setUserTodo({ ...userTodo, [name]: value })
  }

  const fetchTodo = async () => {
    const res = await getTodo()
    // console.log('data', res)
    setTodos(res)
  } // api/getTodo에서 set을 사용못하니까 fetchTodo로 만들어서 사용함

  const fetchDelete = async (id) => {
    const res = await deleteTodo(id)
    setTodos(res)
  }

  useEffect(() => {
    fetchTodo()
  }, [])

  return (
    <div>
      <input name="title" onChange={onChange} value={userTodo.title} />
      <button onClick={() => createTodo(userTodo)}>보내기</button>
      <button onClick={getTodo}>get</button>

      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="list">
            <p>{todo.title}</p>
            <button
              onClick={(id) => {
                console.log(todo.id)
                deleteTodo(id)
              }}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoContent
