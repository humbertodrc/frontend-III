import Head from "next/head";
import React, { FC } from "react";
import { Navbar } from '../ui/Navbar';

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
  keywords?: string;
}

export const Layout:FC<Props> = ({children, title, description, keywords}) => {
	return (
		<>
			<Head>
        <title>{title}</title>
				<meta
					name="description"
					content={description}
				/>
				<meta
					name="keywords"
					content={keywords}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        {children}
      </main>
		</>
	);
};
