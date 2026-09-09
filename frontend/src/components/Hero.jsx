import { ArrowRight, ShoppingBag } from "lucide-react";
import kit from "../assets/Kit.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950">
      {/* Glow */}
      <div className="absolute -top-40 -left-32 w-96 h-96 bg-green-500/20 blur-[140px]" />
      <div className="absolute top-20 right-0 w-80 h-80 bg-green-400/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <div className="space-y-7">

          <span className="inline-flex  bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
             Promoção da Semana
          </span>

          <h1 className="text-5xl lg:text-7xl font-black text-white">
            TECNOLOGIA 
            PARA QUEM  
            <br />

            <span className="text-green-500">
              EXIGE MAIS
            </span>
          </h1>

          <p className="text-zinc-400 text-lg max-w-xl">
            Os melhores produtos para elevar sua perfomance
            ao próximo nível.
          </p>

          <div className="flex gap-5">

            <button className="flex items-center cursor-pointer gap-2 bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl font-bold text-white">

              <ShoppingBag size={20} />

              Comprar Agora

            </button>

            <button className="flex items-center cursor-pointer gap-2 border border-zinc-700 hover:border-green-500 hover:text-green-400 transition px-8 py-4 rounded-xl text-white">

              Ver Ofertas

              <ArrowRight size={20} />

            </button>

          </div>

        </div>

        {/* Imagem */}

        <div className="relative flex justify-center">

          <div className="absolute w-120 h-120 bg-green-500/20 rounded-full blur-[120px]" />

          <img
            src= {kit}
            alt="Notebook Gamer"
            className="relative rounded-2xl w-full max-w-xl drop-shadow-[0_30px_40px_rgba(34,197,94,.35)] hover:scale-105 transition duration-500 ease-in-out"
          />

          <div className="absolute top-auto right-0 border border-green-500 text-green-400 px-5 py-3 rounded-2xl shadow-xl">

            <p className="text-sm align-center right-5 text-amber-50">Até</p>

            <h2 className="text-3xl right-5 align-center font-black">
              40% 
              
            </h2>
            <p className="text-green-300 right-10 align-center text-2xl font-bold">
            OFF            
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
