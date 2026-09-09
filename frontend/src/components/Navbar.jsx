import { Link } from "react-router-dom";
import {
  ShoppingCart,
  User,
  Search,
  Heart,
  Menu,
} from "lucide-react";
import { useCart } from "../contexts/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between gap-8">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold whitespace-nowrap"
        >
          <span className="text-green-500">INFO</span>
          <span className="text-white"> TECH</span>
        </Link>

        {/* Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white">
          <Link className="transition hover:text-green-400" to="/">
            Início
          </Link>

          <Link className="transition hover:text-green-400" to="/products">
            Produtos
          </Link>

          <Link className="transition hover:text-green-400" to="/categories">
            Categorias
          </Link>

          <Link className="transition hover:text-green-400" to="/offers">
            Ofertas
          </Link>

          <Link className="transition hover:text-green-400" to="/contact">
            Contato
          </Link>
        </nav>

        {/* Pesquisa */}
        <div className="hidden md:flex flex-1 max-w-md">
          <div className="relative w-full">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
            />

            <input
              type="text"
              placeholder="Buscar produtos..."
              className="
                w-full
                bg-zinc-900
                border
                border-zinc-700
                rounded-full
                py-2.5
                pl-11
                pr-4
                text-white
                placeholder:text-zinc-500
                focus:outline-none
                focus:border-green-500
                transition
              "
            />
          </div>
        </div>

        {/* Ícones */}
        <div className="flex items-center gap-5 text-white">

          <Heart
            size={22}
            className="cursor-pointer transition hover:text-green-400 hover:scale-110"
          />

          <User
            size={22}
            className="cursor-pointer transition hover:text-green-400 hover:scale-110"
          />

          {/* Carrinho */}
          <div className="relative">
            <Link
              to="/cart"
              className="transition hover:text-green-400"
            >
              <ShoppingCart size={22} />
            </Link>

            {cart.length > 0 && (
              <span
                className="
                  absolute
                  -top-2
                  -right-2
                  w-5
                  h-5
                  rounded-full
                  bg-green-500
                  text-xs
                  font-bold
                  flex
                  items-center
                  justify-center
                  text-white
                "
              >
                {cart.length}
              </span>
            )}
          </div>

          {/* Menu Mobile */}
          <button className="lg:hidden">
            <Menu
              size={24}
              className="hover:text-green-400 transition"
            />
          </button>

        </div>

      </div>
    </header>
  );
}