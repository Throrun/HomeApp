'use client';

import React, { useState } from 'react';
import Input from '../reusable/input';
import styles from './registerForm.module.css'
import Button from '../reusable/button';
import Link from 'next/link';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //ask backend about status
        console.log("sukces")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.formWrapper}>
                <div className={styles.box}>
                    <h3 className={styles.login}>Log in</h3>
                    <Input name="Name"></Input>
                    <Input name="Surname"></Input>
                    <Button name="Submit" />
                    <div className={styles.tip}>
                        <p>Already have an account?</p>
                        <Link href="/login" className={styles.link}>Log in</Link>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default RegisterForm;