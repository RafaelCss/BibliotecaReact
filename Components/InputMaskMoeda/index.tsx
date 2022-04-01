import { useState, useEffect } from "react";
import { InputMaskSaldo } from "./InputTexto";
import { InputTextoProps } from "./InputTexto";

export function InputDinheiro({ onChange }: InputTextoProps) {
  const [valor, setValor] = useState("");

  function handleChange(e: string) {
    let teste = e.replaceAll(/\D/g, "");
    teste = teste.replace(/(\d)(\d{2})$/, "$1,$2");
    teste = teste.replace(/(?=(\d{3})+(\D))\B/g, ".");

    if (teste == "") {
      setValor("");
    } else {
      setValor(`R$ ${teste}`);
    }
  }

  useEffect(() => {
    setValor;
  }, [valor]);

  return <InputMaskSaldo placeholder='R$ 0,00' onChange={(e) => handleChange(e)} value={valor} />;
}
