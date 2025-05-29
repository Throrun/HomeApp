'use client';

import React, { useActionState, useEffect, useState } from 'react';
import Input from '../reusable/input';
import styles from './loginForm.module.css'
import Button from '../reusable/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
async function signin(_: any, formData: FormData) {
    const name = formData.get('name');
    try {
        const res = await fetch(`http://localhost:3000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ name })
        })

        if (!res.ok) {
            const errorData = await res.json();
            return 'Błąd rejestracji';
        }
        return 'OK';

    } catch (err) {
        return 'Błąd rejestracji:';
    }
}

const LoginForm = () => {
    const router = useRouter();
    const [state, action, isPending] = useActionState(signin, null);


    useEffect(() => {
        if (state === 'OK') {
            router.push('/');
        }
    }, [state]);
    return (
        <form action={action}>
            <div className={styles.formWrapper}>
                <div className={styles.box}>
                    <h3 className={styles.login}>Log in</h3>
                    <Input name="Name"></Input>
                    <Button name="Submit" isDisabled={isPending} />
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