import {
  ShoppingCart,
  Heart,
  Star,
} from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      bg-zinc-900
      border
      border-zinc-800
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-green-500
      hover:shadow-2xl
      hover:shadow-green-500/10
    "
    >
      {/* Badge de desconto */}
      <span className="absolute left-4 top-4 z-10 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
        -20%
      </span>

      {/* Favorito */}
      <button
        className="
        absolute
        right-4
        top-4
        z-10
        rounded-full
        bg-zinc-800/80
        p-2
        text-white
        transition
        hover:bg-green-500
      "
      >
        <Heart size={18} />
      </button>

      {/* Imagem */}
      <div className="overflow-hidden bg-zinc-900 transition-transform duration-500 group-hover:scale-105">
        <img
          src={product.image}
          alt={product.name}
          className="
            h-64
            w-full
            object-contain
            p-6
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      {/* Conteúdo */}
      <div className="p-6">

        {/* Avaliações */}
        <div className="mb-3 flex items-center gap-1 text-green-800">
          <Star size={16} className="text-green-800" />
          <Star size={16} className="text-green-800" />
          <Star size={16} className="text-green-800" />
          <Star size={16} className="text-green-800" />
          <Star size={16} className="text-zinc-600" />
          <span className="ml-2 text-sm text-zinc-400">(124)</span>
        </div>

        <h3 className="line-clamp-2 min-h-[56px] text-lg font-semibold text-white">
          {product.name}
        </h3>

        {/* Preço */}
        <div className="mt-5">

          <p className="text-sm text-zinc-500 line-through">
            R$ {(product.price * 1.25).toFixed(2)}
          </p>

          <p className="text-3xl font-bold text-green-500">
            R$ {product.price.toFixed(2)}
          </p>

          <p className="mt-1 text-sm text-zinc-400">
            ou 12x de{" "}
            <span className="font-semibold text-white">
              R$ {(product.price / 12).toFixed(2)}
            </span>
          </p>

          <p className="mt-2 text-sm text-green-400">
            🚚 Frete grátis para todo Brasil
          </p>

        </div>

        {/* Botão */}
        <button
          className="
          mt-6
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-green-500
          py-3.5
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-green-600
        "
        >
          <ShoppingCart size={20} />
          Adicionar ao Carrinho
        </button>

      </div>
    </div>
  );
}