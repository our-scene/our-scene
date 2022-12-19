import Head from 'next/head';
import React, { ReactNode } from 'react';
import { BaseFooter } from './BaseFooter';
import { BaseNavBar } from './BaseNavbar';

/*
 * Our 'default' layout that uses:
 * - full screen
 * - navbar
 * - footer
 */
type BaseLayoutProps = {
  children: ReactNode;
  showNavBar?: boolean;
};
export const BaseLayout = ({ children, showNavBar = true }: BaseLayoutProps) => {
  return (
    <>
      <Head>
        <title>Our Scene Coming Soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-secondary flex flex-col flex-2">
        {showNavBar ? <BaseNavBar /> : null}
        <div className="flex flex-grow">{children}</div>
        <BaseFooter />
      </div>
    </>
  );
};
