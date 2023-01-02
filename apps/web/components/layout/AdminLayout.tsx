import Head from 'next/head';
import React, { ReactNode } from 'react';
import { AdminNavBar } from './AdminNavbar';
import { BaseFooter } from './BaseFooter';

export const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Our Scene Admin View</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-secondary flex flex-col flex-2">
        <AdminNavBar />
        <div className="flex flex-grow justify-center">{children}</div>
        <BaseFooter />
      </div>
    </>
  );
};
