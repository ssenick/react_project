import React from 'react';
import s from './button.module.scss'

const Button = (props) => {
   return (
      <button onClick={props.onClick} className={s.button}>{props.text}</button>
   );
};

export default Button;