import {  
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}
          <div>

            <h2 className="text-3xl font-black">
              <span className="text-green-500">INFO</span>
              <span className="text-white"> TECH</span>
            </h2>

            <p className="mt-5 text-zinc-400 leading-7">
              Tecnologia premium para quem exige o melhor.
              Produtos de alta performance, segurança e
              atendimento de qualidade.
            </p>

           

          </div>

          {/* Institucional */}
          <div>

            <h3 className="text-white text-lg font-semibold mb-5">
              Institucional
            </h3>

            <ul className="space-y-3 text-zinc-400">

              <li className="hover:text-green-400 cursor-pointer transition">
                Sobre Nós
              </li>

              <li className="hover:text-green-400 cursor-pointer transition">
                Quem Somos
              </li>

              <li className="hover:text-green-400 cursor-pointer transition">
                Política de Privacidade
              </li>

              <li className="hover:text-green-400 cursor-pointer transition">
                Termos de Uso
              </li>

            </ul>

          </div>

          {/* Atendimento */}
          <div>

            <h3 className="text-white text-lg font-semibold mb-5">
              Atendimento
            </h3>

            <ul className="space-y-3 text-zinc-400">

              <li className="hover:text-green-400 cursor-pointer transition">
                Central de Ajuda
              </li>

              <li className="hover:text-green-400 cursor-pointer transition">
                Trocas e Devoluções
              </li>

              <li className="hover:text-green-400 cursor-pointer transition">
                Perguntas Frequentes
              </li>

              <li className="hover:text-green-400 cursor-pointer transition">
                Meus Pedidos
              </li>

            </ul>

          </div>

          {/* Contato */}
          <div>

            <h3 className="text-white text-lg font-semibold mb-5">
              Contato
            </h3>

            <div className="space-y-4 text-zinc-400">

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-green-500" />
                <span>(11) 99999-9999</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-green-500" />
                <span>contato@infotech.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-green-500 mt-1" />
                <span>
                  São Paulo - SP
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Linha inferior */}
        <div className="mt-14 border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-zinc-500 text-sm">
            © 2026 INFO TECH. Todos os direitos reservados.
          </p>

          <p className="text-zinc-500 text-sm">
            Desenvolvido com React + Node.js
          </p>

        </div>

      </div>

    </footer>
  );
}