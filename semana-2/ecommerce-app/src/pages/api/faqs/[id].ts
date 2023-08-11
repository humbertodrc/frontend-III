import faqs from '@/data/faqs'
import { NextApiResponse, NextApiRequest } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  
  // Actualizar un faq si el metodo es PUT
  if (req.method === "PUT") {
    const faqUpdated = faqs.find(faq => faq.id === Number(id))
    if (!faqUpdated) {
      return res.status(404).json({ mensaje: `No existe un faq con el id ${id}` })
    }
    const { question, answer } = req.body
    if (!question || !answer) {
      return res.status(400).json({ mensaje: "Faltan campos por llenar" })
    }

    faqUpdated.question = question
    faqUpdated.answer = answer
    res.status(200).json(faqUpdated)
  }

  // Eliminar un faq si el metodo es DELETE
  if (req.method === "DELETE") {
    const faqDeleted = faqs.findIndex((faq) => faq.id === Number(id))
    
    if (faqDeleted === -1) {
      return res.status(404).json({ mensaje: `No existe un faq con el id ${id}` })
    }
    faqs.splice(faqDeleted, 1)
    return res.status(200).json({ mensaje: `Se ha eliminado el faq con el id ${id}` })
  }

  // Obtenemos un faq si el metodo es GET
  if (req.method === "GET") {
    const faq = faqs.find((faq) => faq.id === Number(id))

    if(!faq) {
      return res.status(404).json({ mensaje: `No existe un faq con el id ${id}` })
    }

    return res.status(200).json(faq)
  }

  // En caso de que llegue una petición diferente a las anteriores
  return res.status(400).json({ mensaje: "Método no permitido" })
}