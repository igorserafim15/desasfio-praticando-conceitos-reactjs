import style from './Header.module.css'
import logo from '../assets/logo.svg'

import { Input } from './Input'
import { Button } from './Button'

interface HeaderProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Header = ({value, setValue}: HeaderProps) => {
  return (
    <>
    <header className={style.header}>
      <img
        className={style.image}
        src={logo} 
        alt="Logo Todo" 
      />
    </header>
    <form className={`container ${style.inputSubmit}`}>
      <Input 
        value={value}
        setValue={setValue}
      />
      <Button />
    </form>
  </>
  )
}
