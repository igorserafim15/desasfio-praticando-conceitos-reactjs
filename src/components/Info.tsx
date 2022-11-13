import style from '../App.module.css'
import Todo from '../types/Todo'

interface InfoProps {
  todoList: Todo[];
}

export const Info = ({todoList}: InfoProps) => {
  return (
    <div className={`container ${style.info}`}>
      <div className={style.created}>
        Tarefas criadas<span>{todoList.length}</span>
      </div>
      <div className={style.done}>
        Concluídas<span>0</span>
      </div>
    </div>
  )
}
