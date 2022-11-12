import { Trash } from 'phosphor-react'
import style from './Task.module.css'

export const Task = () => {
  return (
    <li className={style.task}>
      <label className={style.checkbox}>
        <input type="checkbox" />
        <span></span>
      </label>
      <p className={style.through}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, reprehenderit.</p>
      <button title="Deletar tarefa">
        <Trash size={24} />
      </button>
    </li>
  )
}
