'use client'
import React, { useState } from 'react';
import './login.css';
import { Button } from '@/components/ui/button';
import { Account } from '@/components/Account/Account';
import { useRouter } from 'next/navigation';

function LoginPage() {
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter()
    let newAccount: Account = new Account("", "");
    const handleSubmitLogin = (name: string, password: string) => {
        if (name.length === 0 || password.length === 0) {
            setErrorMessage("Please enter both name and password.");
            return;
        }
        router.push('/', { scroll: false })
    }

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        newAccount.name = event.target.value;
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        newAccount.password = event.target.value;
    }

    return (
        <div className="bg-dark-1 w-[100vw] h-[100vh] container pt-6">
            <span className='text-white'>This is login page <p className='text-red-1'>{errorMessage}</p></span><br />
            <span className='text-white'>Name: </span>
            <input type='text' placeholder='Enter your name' className='login-input-name' onChange={handleNameChange} />
            <br />
            <br />
            <span className='text-white'>Password: </span>
            <input type='password' placeholder='Enter your password' className='login-input-name' onChange={handlePasswordChange} />
            <div>
                <Button className='bg-white text-dark-1' onClick={() => { handleSubmitLogin(newAccount.name, newAccount.password) }}>Submit</Button>
            </div>
        </div>
    );
}

export default LoginPage;
