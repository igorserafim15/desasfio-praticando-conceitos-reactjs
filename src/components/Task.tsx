import { Trash } from 'phosphor-react'
import style from './Task.module.css'
import Todo from '../types/Todo'
import React from 'react';

interface TaskProps {
  todo: Todo;
  onDeleteTodo: (todo: Todo) => void;
}

export const Task = ({ todo, onDeleteTodo }: TaskProps) => {
  const [checked, setChecked] = React.useState(false)

  return (
    <li className={style.task}>
      <label className={style.checkbox}>
        <input
          checked={checked} 
          onChange={() => setChecked(!checked)}
          type="checkbox"
        />
        <span></span>
      </label>
      <p className={checked ? style.through : ''}>{todo.text}</p>
      <button 
        title="Deletar tarefa"
        onClick={() => onDeleteTodo(todo)}
      >
        <Trash size={24} />
      </button>
    </li>
  )
}
