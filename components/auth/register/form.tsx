'use client'

import axios from "axios";
import { FormEvent, useState } from "react";

type Props = {
    title: string;
}

export default function Form(props: Props) {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setLoading(true);
        axios.post('/api/v1/register', {
            name, username, email, password
        }).then(function (res) {
            if (res.data.success) {
                if (res.data.message) {
                    // toast.success(res.data.message);
                }
            } else {
                // toast.error(res.data.message ?? 'Something went wrong');
            }
        }).catch(function (err) {
            // toast.error(err.message ?? 'Network error occurred');
        }).finally(function () {
            setLoading(false);
        });
    }
    
    return (
            <form onSubmit={handleSubmit}>
            {props.title}
                <div className="mb-2">
                    <input type="text" disabled={loading} onChange={e => setName(e.target.value)} placeholder="Enter full name" autoComplete="off" className="rounded w-full" />
                </div>
                <div className="mb-2">
                    <input type="text" disabled={loading} onChange={e => setUsername(e.target.value)} placeholder="Enter Username" autoComplete="off" className="rounded w-full" />
                </div>
                <div className="mb-2">
                    <input type="email" disabled={loading} onChange={e => setEmail(e.target.value)} placeholder="Enter email" autoComplete="off" className="rounded w-full" />
                </div>
                <div className="mb-2">
                    <input type="password" disabled={loading} onChange={e => setPassword(e.target.value)} placeholder="Enter password" autoComplete="off" className="rounded w-full" />
                </div>
                <button className="px-2 py-2 rounded border w-full">
                    {loading ? 'Please wait...' : 'Create Account'}
                </button>
            </form>
    )
}