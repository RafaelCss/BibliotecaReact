/* import React, { useState } from "react"; */

/* import { useState } from "react";

 function PhoneInput() {
  const [value, setValue] = useState<string>("( ) _____-____");

/*   function handleInput(event :any) {
    const inputValue = event.target.value.replace(/\D/g, ""); // remove tudo que não for número

    // mantém a formatação do número de telefone enquanto o usuário digita
    let formattedValue = inputValue;
    if (inputValue.length >= 2) {
      formattedValue = `(${inputValue.slice(0, 2)}) `;
    } else if (inputValue.length > 0) {
      formattedValue = `(${inputValue}`;
    }
    if (inputValue.length >= 3) {
      formattedValue += `${inputValue.slice(2, 7)}-`;
    } else if (inputValue.length > 2) {
      formattedValue += `${inputValue.slice(2)}`;
    }
    if (inputValue.length >= 7) {
      formattedValue += `${inputValue.slice(7, 11)}`;
    } else if (inputValue.length > 6) {
      formattedValue += `${inputValue.slice(7)}`;
    }

    setValue(formattedValue);
  } */


/*   function handleInput(event :any) {
    const inputValue = event.target.value.replace(/\D/g, ""); // remove tudo que não for número

    if (inputValue === "") {
      // se o valor estiver vazio, preencha com ( ) _____-____
      setValue("( ) _____-____");
      return;
    }

    // mantém a formatação do número de telefone enquanto o usuário digita
    let formattedValue = inputValue;
    if (inputValue.length >= 2) {
      formattedValue = `(${inputValue.slice(0, 2)}) `;
    } else if (inputValue.length > 0) {
      formattedValue += `(${inputValue}`;
    }
    if (inputValue.length >= 3) {
      formattedValue += `${inputValue.slice(2, 7)}-`;
    } else if (inputValue.length > 2) {
      formattedValue += `${inputValue.slice(2)}`;
    }
    if (inputValue.length >= 7) {
      formattedValue += `${inputValue.slice(7, 11)}`;
    } else if (inputValue.length > 6) {
      formattedValue += `${inputValue.slice(7)}`;
    }
    formattedValue = event.target.value.replace(/\D/g, ""); // remove tudo que não for número
    const regex = /^(\d{2})(\d{4,5})(\d{4})$/;
     formattedValue = inputValue.replace(regex, "($1) $2-$3");
    setValue(formattedValue);
  } */

/*
   function handleInput(event :any) {
    const inputValue = event.target.value.replace(/\D/g, ""); // remove tudo que não for número
    let formattedValue = "";

    if (inputValue.length === 0) {
      // se o valor estiver vazio, preencha com ( ) _____-____
      formattedValue = "( ) _____-____";
    } else if (inputValue.length <= 2) {
      // adiciona o código de área, se o usuário já digitou
      formattedValue = `(${inputValue}`;
    } else if (inputValue.length <= 7) {
      // adiciona o número de telefone sem o hífen, se o usuário já digitou
      formattedValue = `(${inputValue.slice(0, 2)}) ${inputValue.slice(2)}`;
    } else {
      // adiciona o número completo de telefone com o hífen, se o usuário já digitou
      formattedValue = `(${inputValue.slice(0, 2)}) ${inputValue.slice(
        2,
        7
      )}-${inputValue.slice(7, 11)}`;
    }
    formattedValue = event.target.value.replace(/\D/g, ""); // remove tudo que não for número
    const regex = /^(\d{2})(\d{4,5})(\d{4})$/;
     formattedValue = inputValue.replace(regex, "($1) $2-$3");
    setValue(formattedValue);
  }

  function handleFocus() {
    if (value === "( ) _____-____") {
      setValue("");
    }
  }

  function handleBlur() {
    if (value === "") {
      setValue("( ) _____-____");
    }
  }

  return (
    <input
      type="tel"
      pattern="[0-9]{2} [0-9]{4,5}-[0-9]{4}"
      minLength={11}
      maxLength={15}
      value={value}
      onChange={handleInput}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
} */


import React, { useState } from "react";

function PhoneInput() {
  const [value, setValue] = useState("( ) _____-____");
  const [previousValue, setPreviousValue] = useState('');

  function handleInput(event: any) {
    const inputValue = event.target.value.replace(/\D/g, ""); // remove tudo que não for número
    const regex = /^(\d{0,2})(\d{0,5})(\d{0,4})$/;
    const groups = inputValue.match(regex);
    let formattedValue = "";

    if (groups) {
      if (groups[1]) {
        formattedValue = `(${groups[1]}`;
      }
      if (groups[2]) {
        formattedValue += `) ${groups[2]}`;
      }
      if (groups[3]) {
        formattedValue += `-${groups[3]}`;
      }
    }

    setValue(formattedValue);
  }


  function handleFocus() {
    if (value === "( ) _____-____") {
      setValue("");
    }
  }

  function handleBlur() {
    if (value.trim() === "") {
      setValue("( ) _____-____");
    }
  }

  return (
    <input
      type="tel"
      pattern="[0-9]{2} [0-9]{4,5}-[0-9]{4}"
      maxLength={15}
      value={value}
      onChange={handleInput}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}

export default PhoneInput;
