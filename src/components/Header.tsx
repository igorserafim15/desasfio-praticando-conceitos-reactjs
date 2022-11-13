import style from './Header.module.css'
import logo from '../assets/logo.svg'

import { Input } from './Input'
import { Button } from './Button'
import { FormEvent } from 'react';

interface HeaderProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (event: FormEvent<Element>) => void;
}

export const Header = ({value, setValue, onSubmit}: HeaderProps) => {
  return (
    <>
    <header className={style.header}>
      <img
        className={style.image}
        src={logo} 
        alt="Logo Todo" 
      />
    </header>
    <form 
      onSubmit={onSubmit}
      className={`container ${style.inputSubmit}`}
    >
      <Input 
        value={value}
        setValue={setValue}
      />
      <Button />
    </form>
  </>
  )
}
