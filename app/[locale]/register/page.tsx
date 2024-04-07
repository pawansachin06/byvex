import Form from "@/components/auth/register/form";
import { getTranslations } from "next-intl/server";

export default async function Register(){
    const t = await getTranslations('auth.register');
    return (
        <div className="container px-3 py-3">
            <Form title={t('title')} />
        </div>
    )
}