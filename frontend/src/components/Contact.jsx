import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-zinc-950 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-green-500 uppercase tracking-[0.3em] font-semibold">
            Contato
          </span>

          <h1 className="mt-4 text-5xl font-black text-white">
            Fale com a INFO TECH
          </h1>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
            Nossa equipe está pronta para esclarecer dúvidas,
            ajudar com pedidos e oferecer o melhor atendimento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Informações */}
          <div className="space-y-6">

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex gap-4">
              <Phone className="text-green-500" size={30} />

              <div>
                <h3 className="text-white font-semibold text-lg">
                  Telefone
                </h3>

                <p className="text-zinc-400">
                  (11) 99999-9999
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex gap-4">
              <Mail className="text-green-500" size={30} />

              <div>
                <h3 className="text-white font-semibold text-lg">
                  E-mail
                </h3>

                <p className="text-zinc-400">
                  contato@infotech.com
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex gap-4">
              <MapPin className="text-green-500" size={30} />

              <div>
                <h3 className="text-white font-semibold text-lg">
                  Endereço
                </h3>

                <p className="text-zinc-400">
                  São Paulo - SP
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex gap-4">
              <Clock className="text-green-500" size={30} />

              <div>
                <h3 className="text-white font-semibold text-lg">
                  Atendimento
                </h3>

                <p className="text-zinc-400">
                  Segunda a Sexta
                  <br />
                  08:00 às 18:00
                </p>
              </div>
            </div>

          </div>

          {/* Formulário */}
          <form className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 space-y-6">

            <div>
              <label className="block mb-2 text-white">
                Nome
              </label>

              <input
                type="text"
                placeholder="Seu nome"
                className="w-full rounded-xl bg-zinc-950 border border-zinc-700 p-4 text-white focus:border-green-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-white">
                E-mail
              </label>

              <input
                type="email"
                placeholder="email@exemplo.com"
                className="w-full rounded-xl bg-zinc-950 border border-zinc-700 p-4 text-white focus:border-green-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-white">
                Assunto
              </label>

              <input
                type="text"
                placeholder="Assunto"
                className="w-full rounded-xl bg-zinc-950 border border-zinc-700 p-4 text-white focus:border-green-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-white">
                Mensagem
              </label>

              <textarea
                rows={6}
                placeholder="Digite sua mensagem..."
                className="w-full rounded-xl bg-zinc-950 border border-zinc-700 p-4 text-white resize-none focus:border-green-500 outline-none"
              />
            </div>

            <button
              className="
                w-full
                bg-green-500
                hover:bg-green-600
                transition
                rounded-xl
                py-4
                font-semibold
                text-white
                flex
                justify-center
                items-center
                gap-2
              "
            >
              <Send size={20} />
              Enviar Mensagem
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}