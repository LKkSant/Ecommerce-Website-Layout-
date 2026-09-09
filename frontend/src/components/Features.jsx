import {
  Truck,
  ShieldCheck,
  Zap,
  CreditCard,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Frete Grátis",
    description: "Acima de R$199",
  },
  {
    icon: ShieldCheck,
    title: "Compra Segura",
    description: "Pagamento protegido",
  },
  {
    icon: Zap,
    title: "Entrega Rápida",
    description: "Envio em até 24h",
  },
  {
    icon: CreditCard,
    title: "Até 12x",
    description: "Sem juros",
  },
];

export default function Features() {
  return (
    <section className="bg-zinc-950 py-20">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-950
                p-5
                transition-all
                duration-300
                hover:border-green-500
                hover:-translate-y-1
                hover:shadow-lg
                hover:shadow-green-500/10
              "
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-500/10">
                <Icon
                  size={28}
                  className="text-green-500"
                />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  {title}
                </h3>

                <p className="text-sm text-zinc-400">
                  {description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}