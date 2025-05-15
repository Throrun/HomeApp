'use client';

import React, { useState } from 'react';
import Input from '../reusable/input';
import styles from './loginForm.module.css'
import Button from '../reusable/button';
import Link from 'next/link';

const LoginForm = () => {
    const [login, setLogin] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //ask backend about status
        console.log("sukces %s", login)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.formWrapper}>
                <div className={styles.box}>
                    <h3 className={styles.login}>Log in</h3>
                    <Input name="Name"></Input>
                    <Button name="Submit" />
                    <div className={styles.tip}>
                        <p>Don’t have an account?</p>
                        <Link href="/register" className={styles.link}>Register Here</Link>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default LoginForm;