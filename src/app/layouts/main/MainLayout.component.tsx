import type { ReactNode } from 'react';

import s from './MainLayout.module.scss';

export const MainLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className={s.MainLayout}>
      <aside className={s.MainLayout__sidebar}>sidebar</aside>
      <section className={s.MainLayout__content}>
        <header className={s.MainLayout__header}>header</header>
        <main className={s.MainLayout__main}>{children}</main>
      </section>
    </div>
  );
};
