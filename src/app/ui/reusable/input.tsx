import React from 'react';
import styles from './input.module.css'

const Input = ({ name }: { name: string }) => {
    return <input type='text' placeholder={name} className={styles.inputBox}></input>
}

export default Input