import style from './EmptyTasks.module.css'
import clipboard from '../assets/clipboard.png'

export const EmptyTasks = () => {
  return (
    <div className={style.emptyTasks}>
      <img 
        src={clipboard}
      />
      <p className={style.title}>Você ainda não tem tarefas cadastradas</p>
      <p className={style.subtitle}>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
