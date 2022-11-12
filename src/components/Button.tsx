import style from './Button.module.css'
import { PlusCircle } from 'phosphor-react'

export const Button = () => {
  return (
    <button className={style.button}>
      Criar
      <PlusCircle size={20} />
    </button>
  )
}
