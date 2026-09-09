import {
  Mail,
  ShieldCheck,
  BadgePercent,
  Bell,
} from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-r from-zinc-900 via-zinc-900 to-green-900 p-10 lg:p-16">

          {/* Luzes */}
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-green-400/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-14 items-center">

            {/* Texto */}
            <div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/20">
                <Mail
                  size={34}
                  className="text-green-400"
                />
              </div>

              <h2 className="mt-8 text-5xl font-black text-white leading-tight">
                Receba ofertas
                <br />
                exclusivas
              </h2>

              <p className="mt-5 text-lg text-zinc-300 max-w-xl">
                Seja o primeiro a conhecer promoções, lançamentos,
                cupons e ofertas especiais da INFO TECH.
              </p>

              <div className="mt-8 flex flex-wrap gap-6">

                <div className="flex items-center gap-2 text-zinc-300">
                  <ShieldCheck
                    size={18}
                    className="text-green-500"
                  />
                  Sem spam
                </div>

                <div className="flex items-center gap-2 text-zinc-300">
                  <BadgePercent
                    size={18}
                    className="text-green-500"
                  />
                  Cupons exclusivos
                </div>

                <div className="flex items-center gap-2 text-zinc-300">
                  <Bell
                    size={18}
                    className="text-green-500"
                  />
                  Novidades em primeira mão
                </div>

              </div>

            </div>

            {/* Formulário */}
            <div>

              <div className="rounded-2xl bg-zinc-950/70 backdrop-blur-md border border-zinc-800 p-8">

                <h3 className="text-2xl font-bold text-white">
                  Cadastre seu e-mail
                </h3>

                <p className="mt-2 text-zinc-400">
                  Receba conteúdos exclusivos e descontos especiais.
                </p>

                <div className="mt-8 space-y-4">

                  <input
                    type="email"
                    placeholder="Digite seu melhor e-mail"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-zinc-700
                      bg-zinc-900
                      px-5
                      py-4
                      text-white
                      outline-none
                      transition
                      focus:border-green-500
                    "
                  />

                  <button
                    className="
                      w-full
                      rounded-xl
                      bg-green-500
                      py-4
                      font-semibold
                      text-white
                      transition
                      hover:bg-green-600
                    "
                  >
                    Quero Receber Ofertas
                  </button>

                </div>

                <p className="mt-5 text-center text-sm text-zinc-500">
                  Ao se cadastrar você concorda em receber comunicações da INFO TECH.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}