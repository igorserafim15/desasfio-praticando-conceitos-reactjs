import style from './Input.module.css'

interface InputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Input = ({value, setValue}:InputProps) => {
  return (
    <input 
      className={style.input}
      type="text" 
      name="todo" 
      id="todo"
      placeholder='Adicione uma nova tarefa'
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}
