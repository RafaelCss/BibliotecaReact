import type { NextPage } from 'next'
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <h1>Home</h1>
        <p>uma biblioteca criada a partir de aprendizados</p>
      </div>
      <div>
        <Link href='/InputMonetario'>
          <a>Formatando Dinheiro</a>
        </Link>
        <Link href='/TabelaSimples'>
          <a>Tabela</a>
        </Link>
      </div>
    </>
  );
};

export default Home
