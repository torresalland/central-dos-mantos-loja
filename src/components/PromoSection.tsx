import { AlertTriangle, Gift, Zap } from 'lucide-react';

export function PromoSection() {
  return (
    <section className="bg-gray-900 text-white py-12 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brasil-yellow via-brasil-green to-brasil-blue"></div>
      
      <div className="max-w-4xl mx-auto border-2 border-brasil-yellow rounded-2xl p-6 md:p-10 relative bg-gray-800 shadow-2xl">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brasil-yellow text-gray-900 font-extrabold px-6 py-1 rounded-full text-sm uppercase tracking-widest flex items-center gap-2">
          <AlertTriangle size={16} /> Edição Limitada
        </div>

        <div className="text-center mb-8 mt-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">PROMOÇÃO COPA 2026 🚨</h2>
          <p className="text-xl text-gray-300">Leve <span className="text-brasil-yellow font-bold">2 camisas personalizadas</span> + ganhe a <span className="text-brasil-green font-bold">bola oficial da Copa 2026 de brinde</span>.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600">
            <div className="flex items-center gap-3 mb-4 text-gray-400 line-through">
              <span>De R$349,97</span>
            </div>
            <div className="text-4xl md:text-5xl font-extrabold text-brasil-green mb-6">
              R$279,99
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Zap className="text-brasil-yellow shrink-0 mt-1" size={18} />
                <span className="text-sm">2 camisas da Seleção Brasil 2026 (Amarela, Azul ou Mistas)</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="text-brasil-yellow shrink-0 mt-1" size={18} />
                <span className="text-sm">Nomes e números personalizáveis nas duas</span>
              </li>
              <li className="flex items-start gap-2 text-brasil-yellow font-bold">
                <Gift className="shrink-0 mt-1" size={18} />
                <span className="text-sm">Bola oficial da Copa 2026 GRÁTIS</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="bg-red-500/20 text-red-200 p-4 rounded-lg border border-red-500/30 flex items-start gap-3">
              <AlertTriangle className="text-red-400 shrink-0" />
              <div className="text-sm font-medium">
                <p>Estoque limitado.</p>
                <p>Condição válida enquanto durar o lote promocional. Pode encerrar sem aviso.</p>
              </div>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-2 font-bold">Ideal para:</p>
              <p className="text-sm">Casal, pai e filho, coleção, ou presentes perfeitos (ex: REI 10 / RAINHA 10).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
