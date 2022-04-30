// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}
const api = axios.create({
  baseURL: 'https://receitaws.com.br/v1/',
  headers: {
    'Content-Type': 'application/json',
   // Authorization: 'Bearer ' + `seu token aqui`,
  },
})


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {cnpj}   = req.query ;
await api.get(`cnpj/${cnpj}`).then(response => {
res.status(200).json(response.data)
}).catch(err => {
  console.log(err);
})
}
