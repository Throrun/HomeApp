import React from 'react';
import styles from './input.module.css'

const Input = ({ name, type = 'text'}: { name: string, type?: "text" | "password"}) => {
    let inputName = name.toLowerCase();
    return <input type={type} name={inputName} placeholder={name} className={styles.inputBox}></input>
}

export default Input