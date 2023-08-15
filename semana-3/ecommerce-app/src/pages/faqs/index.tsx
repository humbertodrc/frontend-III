import { Layout } from '@/components/layouts/Layout'
import { Faq } from '@/interface/faqs'
import { NextPage } from 'next'
import styles from './Faqs.module.css'

interface Props{
  faqs: Faq[]
}

const faqs = [
  {
    id: 1,
    question: "¿Qué son las figuras amiibo?",
    answer: "Las figuras amiibo son juguetes interactivos..."
  },
]


const faqsPage: NextPage<Props> = () => {

  return (
    <Layout title="Preguntas Frecuentes">
      <div className={styles.container}>
        {faqs.map((faq) => (
          <div key={faq.id}>
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
          ))}
      </div>
     </Layout>
  )
}

// export const getStaticProps = async () => {

  // Modificar la url por las que nos da Vercel al hacer deploy
  // const response = await fetch('http://localhost:3000/api/faqs')
  // const faqs = await response.json()

  // return {
  //   props: {
  //     faqs
  //   }
  // }

// }

export default faqsPage