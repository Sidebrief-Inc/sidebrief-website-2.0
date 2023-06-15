import { FC } from "react";
import Head from "next/head";

interface SEOprops {
	title?: string;
}

export const SEO: FC<SEOprops> = ({ title }) => {
	return (
		<Head>
			<title>
				{title ? title : "Sidebrief | Register and Bank your business"}
			</title>
		</Head>
	);
};
