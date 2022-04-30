import axios from "axios";
import { useState, useEffect } from "react";

type Props = {
  nome : string;
  fantasia : string;
}

export default function ConsumoApi () {
  const [data, setData] =useState<Props>({nome: '', fantasia: ''})
  const [ cnpj , setCnpj ] = useState('')

  function handlerPegarCnpj(cnpj : string) {
    console.log(cnpj)
    setCnpj(cnpj)
  }
 useEffect(() => {
  if(cnpj.length == 14) {
    axios.get(`http://localhost:3000/api/consultacnpj?cnpj=${cnpj}`)
    .then(res => {
      setData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

}, [cnpj])

  return (
    <div>
      <h1>Buscar Cnpj : </h1>
      <label htmlFor="text0">Digite o Cnpj: </label>
      <br/>
      <input
      maxLength={14}
      id='text0'
      type="text"
      value={cnpj}
      onChange={(e) =>handlerPegarCnpj(e.target.value)} />
      <br />
      <label htmlFor="text1">Resultado: </label>
      <br/>
      <input id='text1' value={data.nome}/>
    </div>
  )
}