import { products } from '@/data/products';
import { defaultLocale } from '@/locale/constants';
import { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req:NextApiRequest, res:NextApiResponse) {
  const { query: { lang } } = req;
  
  const productByLanguage = products[lang as string] ?? products[defaultLocale];

  res.status(200).json(productByLanguage);
}