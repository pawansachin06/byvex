'use client';

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocaleSwitcher(){
    const router = useRouter();
    const [isPending, startTransition] = useTransition()
    const localeActive = useLocale();
    
    function onSelectChange(e: ChangeEvent<HTMLSelectElement>){
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        })
    }
    
    return (
        <select defaultValue={localeActive} disabled={isPending} onChange={onSelectChange}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
        </select>
    )
}