import './globals.css'

import { Header } from './components/Header'
import { EmptyTasks } from './components/EmptyTasks'
import { Task } from './components/Task'
import React, { FormEvent } from 'react'
import { Info } from './components/Info'
import Todo from './types/Todo'

export const App = () => {
  const [todoList, setTodoList] = React.useState<Todo[]>([])
  const [value, setValue] = React.useState('')

  function handleSetValue(event: FormEvent) {
    event.preventDefault()
    const todo: Todo = {
      checked: false,
      text: value,
    }
    setTodoList([...todoList, todo])
    setValue('')
  }

  function handleDeleteTodo(todo: Todo) {
    const newTodoList = todoList.filter(item => {
      return item != todo
    })
    setTodoList(newTodoList)
  }

  return (
    <>
      <Header 
        value={value}
        setValue={setValue}
        onSubmit={handleSetValue}
      />

      <Info todoList={todoList} />

      <section className='container'>
        {todoList.length == 0 ? (
          <EmptyTasks />
        ) : (
          <ul>
            {todoList.map(todo => (
              <Task
                key={todo.text}
                todo={todo}
                onDeleteTodo={handleDeleteTodo}
              />
            ))}
          </ul>
        )}
      </section>
    </>
  )
}
