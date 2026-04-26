export function Hero() {
  return (
    <section className="bg-gradient-to-b from-brasil-blue to-blue-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Garanta sua Camisa Brasil 2026 Personalizada <span className="text-brasil-yellow">🇧🇷</span>
        </h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
          Escolha nome, número, cor e tamanho. Personalização inclusa e envio para todo o Brasil.
        </p>
        
        <div className="bg-white text-brasil-blue inline-block p-4 rounded-xl shadow-xl border-2 border-brasil-yellow animate-bounce mt-6">
          <p className="font-bold text-lg md:text-2xl uppercase tracking-wide">
            🔥 2 camisas + Bola Oficial 2026
          </p>
          <p className="text-xl md:text-3xl font-extrabold text-brasil-green">
            Por apenas R$279,99
          </p>
        </div>

        <div className="pt-8">
          <a 
            href="#pedidos" 
            className="inline-block bg-brasil-green hover:bg-green-600 text-white font-bold text-xl py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Montar meu pedido agora
          </a>
        </div>
      </div>
    </section>
  );
}
