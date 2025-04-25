import React from "react";
import Atualizar from "../components/atualizar";

type Acao = {
  nome: string;
  preco: number;
  atualizada: string;
};

export const revalidade = 10; // revalidate default geral para todo fech na pagina

export default async function AcoesPage() {
  const response = await fetch("https://api.origamid.online/acoes/lua", {
    // cache: "no-store", sem cache
    // cache: "force-cache", sem cache
    next: {
      //   revalidate: 5, // revalidar a cada 5 segundos, se esse valor for 0 vai ficar no cache tbm
      tags: ["acoes"],
    },
  });

  const acoe = (await response.json()) as Acao;

  return (
    <main>
      <h1>Acoes</h1>
      <Atualizar />
      <div>nome: {acoe.nome}</div>
      <div>preco: {acoe.preco}</div>
      <div>atualizada: {acoe.atualizada}</div>
    </main>
  );
}
