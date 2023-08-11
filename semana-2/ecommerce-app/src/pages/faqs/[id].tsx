import {Layout} from "@/components/layouts/Layout";
import {Faq} from "@/interface/faqs";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const FaqPage = () => {
	const [faqs, setFaqs] = useState({} as Faq);

	const {query} = useRouter();

	const {id} = query;

	const getFaq = async () => {
		if (id) {
			const response = await fetch(`/api/faqs/${id}`);
			const faq = await response.json();
			setFaqs(faq);
		}
	};

	useEffect(() => {
		getFaq();
	}, [id]);

	return (
		<Layout title="Preguntas Frecuentes">
			<h1>{faqs.question}</h1>
			<p>{faqs.answer}</p>
		</Layout>
	);
};

export default FaqPage;
