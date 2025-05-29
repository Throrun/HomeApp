'use client';

import React, { useActionState, useEffect, useState } from 'react';
import Input from '../reusable/input';
import styles from './registerForm.module.css'
import Button from '../reusable/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';

async function signup(_: any, formData: FormData) {
    const name = formData.get('name');
    const surname = formData.get('surname');
    try {
        const res = await fetch(`http://localhost:3000/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ name, surname })
        })

        if (!res.ok) {
            const errorData = await res.json();
            return 'Błąd logowania';
        }
        return 'OK';

    } catch (err) {
        return 'Błąd logowania:';
    }
}

const RegisterForm = () => {
    const router = useRouter();
    const [state, action, isPending] = useActionState(signup, undefined);
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
                    <Input name="Surname"></Input>
                    <Button name="Submit" isDisabled={isPending} />
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