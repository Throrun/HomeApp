import React from 'react';
import styles from './button.module.css'

const Button = ({ name }: { name: string }) => {
    return <button type='submit' className={styles.buttonBox}>{name}</button>
}

export default Button;