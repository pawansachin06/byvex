import LocaleSwitcher from "@/components/locale-switcher";
import { getTranslations } from "next-intl/server";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";
import LogoutButton from '@/components/auth/logout/button';
import Link from "next/link";

export default async function Home() {
  const t = await getTranslations('index');
  const session = await getServerSession(authOptions);
  console.log('User Token', session?.user.accessToken);
  console.log('User Role', session?.user.role);
  console.log('User username', session?.user.username);
  return (
    <div>
      {t('title')}
      <LocaleSwitcher />
      {session ?
        <div>
          <LogoutButton />
        </div>
        : <div>
          <Link href="/api/auth/signin">Login</Link>
        </div>
      }
      <div>
        <pre>
          {JSON.stringify(session)}
        </pre>
      </div>

    </div>
  )
}
