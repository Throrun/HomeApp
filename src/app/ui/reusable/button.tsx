import React from 'react';
import styles from './button.module.css'

const Button = ({ name, isDisabled=false}: { name: string, isDisabled?: boolean }) => {
    return <button type='submit' disabled={isDisabled} className={styles.buttonBox}>{name}</button>
}

export default Button;