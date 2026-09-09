import ProductCard from "./Productcard";
import { products } from "../data/products";
import { ArrowRight } from "lucide-react";

export default function ProductGrid() {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">

          <div>
            <span className="text-green-500 font-semibold uppercase tracking-[0.2em]">
              Destaques
            </span>

            <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">
              Produtos Premium
            </h2>

            <p className="mt-4 max-w-xl text-zinc-400">
              Os produtos mais vendidos da INFO TECH, selecionados
              para oferecer alto desempenho e excelente custo-benefício.
            </p>
          </div>

          <button
            className="
              mt-8
              md:mt-0
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-zinc-700
              px-6
              py-3
              text-white
              transition
              hover:border-green-500
              hover:text-green-400
            "
          >
            Ver Todos
            <ArrowRight size={18} />
          </button>

        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
