import './globals.css'

import { Header } from './components/Header'
import { EmptyTasks } from './components/EmptyTasks'
import { Task } from './components/Task'
import React from 'react'
import { Info } from './components/Info'

interface Todo {
  checked: boolean;
  text: string;
}

const todoList: Todo[] = [
  {
    checked: false,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
    checked: false,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
    checked: false,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  }
]

export const App = () => {
  const [todo, setTodo] = React.useState('')

  console.log(todo)

  // function handleSetTodo() {}

  return (
    <>
      <Header 
        value={todo}
        setValue={setTodo}
        // onSubmit={handleSetTodo}
      />

      <Info todoList={todoList} />

      <section className='container'>
        {todoList.length == 0 ? (
          <EmptyTasks />
        ) : (
          <ul>
            {todoList.map((item, index) => (
              <Task
                key={index}
              />
            ))}
          </ul>
        )}
      </section>
    </>
  )
}
