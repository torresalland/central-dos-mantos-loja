import { ShoppingCart } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-brasil-green text-white py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="w-8 h-8 bg-brasil-yellow rounded-full flex items-center justify-center text-brasil-green">
            BR
          </div>
          <span className="hidden sm:inline">Mantos da Seleção</span>
        </div>
        <a 
          href="#pedidos" 
          className="bg-brasil-yellow text-brasil-green font-bold py-2 px-4 rounded-full flex items-center gap-2 hover:bg-yellow-400 transition-colors"
        >
          <ShoppingCart size={18} />
          <span>Montar meu pedido</span>
        </a>
      </div>
    </header>
  );
}
