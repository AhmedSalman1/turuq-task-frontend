import ProfileCard from '@/components/profile/ProfileCard';
import { CakeIcon, GraduationCapIcon, MailIcon, PhoneIcon, UserIcon } from '@/components/ui/icons';
import { PROFILE_RECORDS, type RecordIcon } from '@/data/profile';
import type { ReactNode } from 'react';

/** Maps each record's icon key to its rendered icon component. */
const RECORD_ICONS: Record<RecordIcon, ReactNode> = {
  user: <UserIcon size={14} />,
  cake: <CakeIcon size={14} />,
  mail: <MailIcon size={14} />,
  phone: <PhoneIcon size={14} />,
  graduation: <GraduationCapIcon size={14} />,
};

export default function Home() {
  return (
    <section className="mx-auto w-full max-w-6xl p-6 sm:p-8 lg:p-10">
      <header className="mb-8">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-primary-500 dark:text-accent-400">
          Overview
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Moderator profile</h1>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground/60">
          Five records that identify you across the warehouse. Keep them accurate — they travel with every stock action
          you take.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
        {PROFILE_RECORDS.map((record, index) => (
          <ProfileCard
            key={record.id}
            index={index}
            label={record.label}
            value={record.value}
            detail={record.detail}
            code={record.code}
            icon={RECORD_ICONS[record.icon]}
          />
        ))}
      </div>
    </section>
  );
}
