"use server";

import { redirect } from "next/navigation";
import { Produto } from "../produtos/page";
import { revalidatePath } from "next/cache";

// export async function adicionarProduto(produto: Produto) {
export async function adicionarProduto(formData: FormData) {
  const produto: Produto = {
    nome: formData.get("nome") as string,
    descricao: formData.get("descricao") as string,
    estoque: Number(formData.get("estoque")),
    importado: formData.get("importado") ? 1 : 0,
    preco: Number(formData.get("preco")),
  };

  const response = await fetch("https://api.origamid.online/produtos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(produto),
  });

  await response.json();
  revalidatePath("/produtos");
  redirect("/produtos");
}
