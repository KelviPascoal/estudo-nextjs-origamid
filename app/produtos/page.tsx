import Link from "next/link";

export type Produto = {
  id?: string;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};

export default async function ProdutosPage() {
  const response = await fetch("https://api.origamid.online/produtos");
  const produtos = (await response.json()) as Produto[];
  return (
    <section>
      <h3>Produtos</h3>
      <Link href="/produtos/adicionar">adicionar</Link>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} {produto.preco}
          </li>
        ))}
      </ul>
    </section>
  );
}
