import { ArrowRight } from "lucide-react";
import KitGamer from "../assets/kitGamer.png";

export default function PromoBanner() {
  return (
    <section className="bg-zinc-950 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-r from-zinc-950 via-zinc-900 to-green-950">

          <div className="grid lg:grid-cols-[42%_58%] items-center gap-0 px-10 py-12 lg:px-16">

            {/* Texto */}
            <div>

              <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-green-400">
                🔥 Aproveite a Semana Gamer
              </span>

              <h2 className="mt-6 text-5xl font-black leading-tight text-white">
                Monte seu
                <br />
                <span className="text-green-500">
                  Setup Gamer
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-lg text-zinc-300">
                Aproveite descontos em notebooks, placas de vídeo,
                periféricos e acessórios para montar seu setup.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <button className="rounded-xl bg-green-500 px-8 py-4 font-semibold text-white transition hover:bg-green-600">
                  Comprar Agora
                </button>

                <button className="flex items-center gap-2 rounded-xl border border-zinc-500 px-8 py-4 font-semibold text-white transition hover:border-green-500">
                  Ver Ofertas
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>

            {/* Imagem */}
            <div className="flex h-full w-full items-center justify-center">

              <img
                src={KitGamer}
                alt="Kit Gamer"
                className="
                  w-full
                  h-full
                  object-contain
                  transition-transform
                  duration-500
                  hover:scale-105
                  rounded-3xl
                  box-shadow-lg                  
                "
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}