import React, { useState } from 'react';
import Input from '../reusable/input';
const LoginForm = () => {
    const [login, setLogin] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //ask backend about status
        console.log("sukces %s", login)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='box'>
                <Input name="imie"></Input>
            </div>
        </form>
    )
}

export default LoginForm;