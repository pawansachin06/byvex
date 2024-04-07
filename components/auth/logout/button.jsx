'use client'

import { signOut } from 'next-auth/react'

export default function LogoutButton(){
    function handleClick(){
        signOut({
            redirect: true,
            callbackUrl: '/',
        });
    }
    return (
        <button type="button" onClick={handleClick} className="border px-2 py-2">Logout</button>
    )
}