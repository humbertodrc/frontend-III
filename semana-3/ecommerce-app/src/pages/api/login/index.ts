import { USERS } from '@/data/users'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req:NextApiRequest, res:NextApiResponse){

  const { email, password } = req.body
  
  const user = USERS.find((user) => user.email === email && user.password === password)

  if (!user) {
    res.status(401).json({ message: "Usuario no enconrado" })
  }

  res.setHeader('set-cookie', 'access=true; path=/; semesite=lax; httponly')

  res.status(200).json({ message: "Usuario encontrado"})

}