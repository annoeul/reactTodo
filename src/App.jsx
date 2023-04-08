import { useState } from 'react'
import './App.css'
import TodoHeader from './components/TodoHeader'
import TodoContent from './components/TodoContent'

function App() {
  return (
    <div>
      <TodoHeader />
      <TodoContent />
    </div>
  )
}

export default App
