"use client";
import React from "react";
// import { Produto } from "../page";
import "./styles.css";
import { adicionarProduto } from "@/app/actions/adicionar-produtos";
import { useFormState, useFormStatus } from "react-dom";

function Button() {
  const status = useFormStatus();
  return (
    <button type="submit" disabled={status.pending}>
      Adicionar
    </button>
  );
}

export default async function ProdutosPage() {
  //   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     const payload: Produto = {
  //       nome: event.currentTarget.nome.value,
  //       preco: Number(event.currentTarget.preco.value),
  //       descricao: event.currentTarget.descricao.value,
  //       estoque: Number(event.currentTarget.estoque.value),
  //       importado: event.currentTarget.importado.checked ? 1 : 0,
  //     };
  //     await adicionarProduto(payload);
  //   };
  const [state, formAction] = useFormState(adicionarProduto, {
    errors: [],
  });

  return (
    <>
      <h3>adicionar produto</h3>
      <form action={formAction}>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" required />
        </div>

        <div className="form-group">
          <label htmlFor="preco">Preço</label>
          <input type="number" id="preco" name="preco" step="0.01" required />
        </div>

        <div className="form-group">
          <label htmlFor="descricao">Descrição</label>
          <textarea id="descricao" name="descricao" required></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="estoque">Estoque</label>
          <input type="number" id="estoque" name="estoque" required />
        </div>

        <div className="form-group checkbox-group">
          <input type="checkbox" id="importado" name="importado" />
          <label htmlFor="importado">Importado</label>
        </div>
        <Button />
      </form>
    </>
  );
}
