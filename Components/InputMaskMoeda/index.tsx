import { useState, useEffect } from "react";
import { InputMaskSaldo } from "./InputTexto";
import { InputTextoProps } from "./InputTexto";

export function InputDinheiro({ onChange }: InputTextoProps) {
  const [valor, setValor] = useState("");

  function handleChange(e: string) {
    let teste = e.replaceAll(/\D/g, "");
    teste = teste.replace(/(\d)(\d{2})$/, "$1,$2");
    teste = teste.replace(/(?=(\d{3})+(\D))\B/g, ".");
    formatarDecimal(teste);
    if (teste == "") {
      setValor("");
    } else {
      console.log({ teste });
      setValor(`R$ ${teste}`);
    }
  }

  function formatarDecimal(valor: string) {
    // formatar para decimal
    let teste = valor.replaceAll(/\D/g, "");
    teste = teste.replace(/(\d)(\d{2})$/, "$1.$2");
  //  teste = teste.replace(/(?=(\d{3})+(\D))\B/g, ".");
    console.log("teste 2 :", { teste });
    return teste;
  }
  useEffect(() => {
    setValor;
  }, [valor]);

  return <InputMaskSaldo placeholder='R$ 0,00' onChange={(e) => handleChange(e)} value={valor} />;
}
