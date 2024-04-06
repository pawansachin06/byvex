import LocaleSwitcher from "@/components/locale-switcher";
import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations('index');
  
  return (
    <div>
      {t('title')}
      <LocaleSwitcher />
    </div>
  )
}
