"use server";

import { redirect } from "next/navigation";
import { Produto } from "../produtos/page";
import { revalidatePath } from "next/cache";

function validarNome(nome: unknown) {
  return typeof nome === "string" && nome.length > 1;
}

function validarPreco(preco: unknown) {
  return typeof preco === "number" && preco > 1;
}
// export async function adicionarProduto(produto: Produto) {
export async function adicionarProduto(
  state: { errors: string[] },
  formData: FormData
) {
  const produto: Produto = {
    nome: formData.get("nome") as string,
    descricao: formData.get("descricao") as string,
    estoque: Number(formData.get("estoque")),
    importado: formData.get("importado") ? 1 : 0,
    preco: Number(formData.get("preco")),
  };
  let errors = [];
  if (!validarNome(produto.nome)) errors.push("Nome inválido.");
  if (!validarPreco(produto.preco)) errors.push("Preço inválido.");
  if (errors.length > 0) return { errors };

  try {
    const response = await fetch("https://api.origamid.online/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    });
    if (!response.ok) throw new Error("Erro ao adicionar o produto.");
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: [error.message],
      };
    }
  }
  revalidatePath("/produtos");
  redirect("/produtos");
}
