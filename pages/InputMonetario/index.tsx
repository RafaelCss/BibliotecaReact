import { ReactElement } from "react";
import ConsumoApi from "../../Components/ConsultadeCnpj/Index";
import { InputDinheiro } from "../../Components/InputMaskMoeda/index";

export default function InputMoney(): ReactElement {
  return (
    <div>
      <InputDinheiro onChange={(e)=> console.log(e)}/>
      <ConsumoApi />
    </div>
  );
}
