import {
  Laptop,
  Monitor,
  Keyboard,
  Cpu,
  Smartphone,
  Gamepad2,
} from "lucide-react";

const categories = [
  {
    name: "Notebooks",
    products: "120 produtos",
    icon: Laptop,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_899804-MLA95283742030_102025-F.webp",
  },
  {
    name: "Monitores",
    products: "65 produtos",
    icon: Monitor,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.kIQ_p8RgGpQbowrljEpZhwHaEe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Periféricos",
    products: "180 produtos",
    icon: Keyboard,
    image:
      "https://cdn.dooca.store/1841/products/kit-tt-commander.jpg?v=1681502663&webp=0",
  },
  {
    name: "Hardware",
    products: "90 produtos",
    icon: Cpu,
    image:
      "https://images.unsplash.com/photo-1591799265444-d66432b91588?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Smartphones",
    products: "210 produtos",
    icon: Smartphone,
    image:
      "https://img.ibxk.com.br/2016/09/30/30180434435322.jpg?w=1200&h=675&mode=crop&scale=both",
  },
  {
    name: "Gamer",
    products: "85 produtos",
    icon: Gamepad2,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80&auto=format&fit=crop",
  },
];

export default function Categories() {
  return (
    <section className="bg-zinc-950 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-12 text-center">
          <p className="text-green-500 font-semibold uppercase tracking-widest">
            Navegue
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Categorias em Destaque
          </h2>

          <p className="mt-4 text-zinc-400">
            Encontre rapidamente os produtos ideais para montar o seu setup.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map(({ name, products, icon: Icon, image }) => (
  <div
    key={name}
    className="
      group
      overflow-hidden
      rounded-2xl
      border
      border-zinc-800
      bg-zinc-900
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-green-500
      hover:shadow-xl
      hover:shadow-green-500/10
      cursor-pointer
    "
  >
    {/* Imagem */}
    <div className="overflow-hidden">
      <img
        src={image}
        alt={name}
        className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
      />
    </div>

    {/* Conteúdo */}
    <div className="p-6">

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 transition group-hover:bg-green-500">
          <Icon
            size={24}
            className="text-green-500 transition group-hover:text-white"
          />
        </div>

        <h3 className="text-2xl font-semibold text-white">
          {name}
        </h3>

      </div>

      <p className="mt-4 text-zinc-400">
        {products}
      </p>

      <div className="mt-6 flex items-center font-medium text-green-500">
        Ver categoria
        <span className="ml-2 transition group-hover:translate-x-2">
          →
        </span>
      </div>

    </div>

  </div>
))}

        </div>

      </div>
    </section>
  );
}