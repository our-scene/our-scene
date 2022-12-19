import Head from 'next/head';
import React from 'react';
import { BaseFooter } from './BaseFooter';
import { BaseNavBar } from './BaseNavbar';

/*
 * Our 'default' layout that uses:
 * - full screen
 * - navbar
 * - footer
 */
export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Our Scene Coming Soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-secondary flex flex-col flex-2">
        <BaseNavBar />
        <div className="flex flex-grow">{children}</div>
        <BaseFooter />
      </div>
    </>
  );
};
