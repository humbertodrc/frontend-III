import {Layout} from "@/components/layouts/Layout";
import {Serie} from "@/interface";
import {getSeries} from "@/service/getSeries";
import {GetServerSideProps, NextPage} from "next";
import React from "react";
import styles from "./Serie.module.css"

interface Props {
	series: Serie[];
}

const Series: NextPage<Props> = ({series}) => {
	return (
		<Layout title="Series">
			<h1>Series</h1>
			<div className={styles.grid}>
				{series.map((serie) => (
					<div className={styles.card} key={serie.key}>
						<h2>{serie.name}</h2>
						<p>codigo: {serie.key}</p>
					</div>
				))}
			</div>
		</Layout>
	);
};

export const getServerSideProps:GetServerSideProps = async ({req, res}) => {
  const series = await getSeries();
  
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate'
  )
  

	return {
		props: {
			series,
		},
	};
};

export default Series;
