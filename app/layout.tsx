import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { MainLayout } from '@/app/layouts/main/MainLayout.component';
import ProvidersContext from '@/app/providers';

import '@/app/styles/global.scss';
import 'primereact/resources/themes/lara-light-cyan/theme.css';

export const metadata: Metadata = {
  title: 'Study Tasker',
  description: 'Платформа для подготовки к собеседованиям',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <ProvidersContext>
          <MainLayout>{children}</MainLayout>
        </ProvidersContext>
      </body>
    </html>
  );
}
